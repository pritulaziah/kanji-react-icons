import * as fs from "fs";
import * as path from "path";
import { transform } from "@svgr/core";

const checkIsHarigana = (v: number) => {
  return v >= 12352 && v <= 12447;
};

const checkIsKatakana = (v: number) => {
  return v >= 12448 && v <= 12543;
};

const checkIsKanji = (v: number) => {
  return (
    (v >= 19968 && v <= 40899) ||
    (v >= 13312 && v <= 19903) ||
    (v >= 63744 && v <= 64217) ||
    (v >= 11904 && v <= 12031) ||
    (v >= 131072 && v <= 173791)
  );
};

const sourceDir = "kanji";
const kanji = fs.readdirSync(sourceDir);
const outDir = "src";
const replaceKVGArray = [
  "type",
  "element",
  "variant",
  "partial",
  "original",
  "number",
  "tradForm",
  "radicalForm",
  "position",
  "radical",
  "part",
  "phon",
];

if (fs.existsSync(outDir)) {
  fs.rmSync(outDir, { recursive: true, force: true });
}

fs.mkdirSync(outDir);

type Alphabets = "katakana" | "harigana" | "kanji";

const alphabets: { [key in Alphabets]: (v: number) => void } = {
  katakana: checkIsKatakana,
  harigana: checkIsHarigana,
  kanji: checkIsKanji,
};

const findAlphabet = (v: number) => {
  return Object.entries(alphabets).find(([alphabet, checkAlphabet]) => {
    return checkAlphabet(v);
  });
};

for (const alphabet of Object.keys(alphabets)) {
  fs.mkdirSync(path.resolve(outDir, alphabet));
}

fs.writeFileSync(path.resolve(outDir, "index.ts"), "");

for (const filename of kanji) {
  const name = path.parse(filename).name.replace("-", "");
  const code = parseInt(name, 16);

  const [alphabet] = findAlphabet(code) || [];

  if (alphabet) {
    const filepath = path.resolve(sourceDir, filename);
    const file = fs.readFileSync(filepath);

    let svgCode = file.toString();

    for (const replacer of replaceKVGArray) {
      svgCode = svgCode.replace(new RegExp(`kvg:${replacer}="[^"]*"`, "g"), "");
    }

    const jsCode = transform.sync(
      svgCode,
      {
        icon: "100%",
        typescript: true,
        plugins: [
          "@svgr/plugin-svgo",
          "@svgr/plugin-jsx",
          "@svgr/plugin-prettier",
        ],
        runtimeConfig: true,
      },
      { componentName: `Icon${name}` }
    );

    const dir = alphabet;

    fs.writeFileSync(path.resolve(outDir, dir, `${name}.tsx`), jsCode);

    fs.appendFileSync(
      path.resolve(outDir, "index.ts"),
      `export { default as Icon${name} } from './${dir}/${name}';\n`
    );
  }
}
