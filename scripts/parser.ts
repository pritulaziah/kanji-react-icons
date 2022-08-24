import * as fs from "fs";
import * as path from "path";
import { transform } from "@svgr/core";
import { appendIndexFile, createIndexFile, replaceKVGAttrs } from "./utils";
import { alphabets, findAlphabet } from "./alphabet";

const sourceDir = "kanji";
const kanji = fs.readdirSync(sourceDir);
const outDir = "src";

if (fs.existsSync(outDir)) {
  fs.rmSync(outDir, { recursive: true, force: true });
}

fs.mkdirSync(outDir);
createIndexFile(outDir);

for (const alphabet of Object.keys(alphabets)) {
  fs.mkdirSync(path.resolve(outDir, alphabet));
  appendIndexFile(outDir, `export * from './${alphabet}';\n`);
  createIndexFile(path.resolve(outDir, alphabet));
}

for (const filename of kanji) {
  const name = path.parse(filename).name.replace("-", "");
  const code = parseInt(name, 16);
  const [alphabet] = findAlphabet(code) || [];

  if (alphabet) {
    const filepath = path.resolve(sourceDir, filename);
    const file = fs.readFileSync(filepath);
    const svgCode = replaceKVGAttrs(file.toString());
    const componentName = `Icon${name}`;

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
      { componentName }
    );

    fs.writeFileSync(path.resolve(outDir, alphabet, `${name}.tsx`), jsCode);
    appendIndexFile(
      path.resolve(outDir, alphabet),
      `export { default as ${componentName} } from './${name}';\n`
    );
  }
}
