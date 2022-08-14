import * as fs from "fs";
import * as path from "path";

const checkIsHarigana = (v: number) => {
  return v >= 12352 && v <= 12447;
};

const checkIsKatakana = (v: number) => {
  return v >= 12448 && v <= 12543;
};

const sourceDir = "kanji";
const kanji = fs.readdirSync(sourceDir);
const outDir = "new_kanji";
const replaceKVGArr = [
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

for (const filename of kanji) {
  const name = path.parse(filename).name;
  const code = parseInt(name, 16);

  const isHarigana = checkIsHarigana(code);
  const isKatakana = checkIsKatakana(code);

  if (isHarigana || isKatakana) {
    const charCode = String.fromCharCode(code);
    const filepath = path.resolve(sourceDir, filename);
    const file = fs.readFileSync(filepath);
    const ext = path.parse(filename).ext;

    let fileString = file.toString();

    for (const replacer of replaceKVGArr) {
      fileString = fileString.replace(
        new RegExp(`kvg:${replacer}="[^"]*"`, "g"),
        ""
      );
    }

    fs.writeFileSync(
      path.resolve(
        outDir,
        isKatakana ? "katakana" : "harigana",
        `${charCode}${ext}`
      ),
      file
    );
  }
}
