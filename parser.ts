import * as fs from "fs";
import * as path from "path";
import { transform } from "@svgr/core";

const checkIsHarigana = (v: number) => {
  return v >= 12352 && v <= 12447;
};

const checkIsKatakana = (v: number) => {
  return v >= 12448 && v <= 12543;
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
fs.mkdirSync(path.resolve(outDir, "katakana"));
fs.mkdirSync(path.resolve(outDir, "harigana"));
fs.writeFileSync(path.resolve(outDir, "index.ts"), "");

for (const filename of kanji) {
  const name = path.parse(filename).name;
  const code = parseInt(name, 16);

  const isHarigana = checkIsHarigana(code);
  const isKatakana = checkIsKatakana(code);

  if (isHarigana || isKatakana) {
    const charCode = String.fromCharCode(code);
    const filepath = path.resolve(sourceDir, filename);
    const file = fs.readFileSync(filepath);

    let svgCode = file.toString();

    for (const replacer of replaceKVGArray) {
      svgCode = svgCode.replace(new RegExp(`kvg:${replacer}="[^"]*"`, "g"), "");
    }

    const jsCode = transform.sync(
      svgCode,
      {
        icon: false,
        typescript: true,
        plugins: [
          "@svgr/plugin-svgo",
          "@svgr/plugin-jsx",
          "@svgr/plugin-prettier",
        ],
        jsxRuntime: "classic",
      },
      { componentName: `Icon${name}` }
    );

    const formDir = isKatakana ? "katakana" : "harigana";

    fs.writeFileSync(path.resolve(outDir, formDir, `${name}.tsx`), jsCode);

    fs.appendFileSync(
      path.resolve(outDir, "index.ts"),
      `export { default as Icon${name} } from './${formDir}/${name}';\n`
    );
  }
}
