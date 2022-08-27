import * as fs from "fs";
import * as path from "path";
import { transform } from "@svgr/core";
import {
  appendIndexFile,
  capitalize,
  createIndexFile,
  replaceKVGAttrs,
} from "./utils";
import template from "./template";
import { alphabets, findAlphabet } from "./alphabet";

const sourceDir = "kanji";
const kanji = fs.readdirSync(sourceDir);
const outDir = "src";

if (fs.existsSync(outDir)) {
  fs.rmSync(outDir, { recursive: true, force: true });
}

fs.mkdirSync(outDir);
fs.writeFileSync(
  path.resolve(outDir, "kanjiIcon.ts"),
  `import { SVGProps } from "react";
export type KanjiIconType = (props: SVGProps<SVGSVGElement>) => JSX.Element;\n`
);
createIndexFile(outDir, `export { KanjiIconType } from "./kanjiIcon";\n`);

for (const alphabet of Object.keys(alphabets)) {
  fs.mkdirSync(path.resolve(outDir, alphabet));
  appendIndexFile(outDir, `export * from './${alphabet}';\n`);
  createIndexFile(path.resolve(outDir, alphabet));
}

const visited = new Set<string>();

for (const filename of kanji) {
  const name = path.parse(filename).name.split("-")[0];
  const code = parseInt(name, 16);
  const char = String.fromCharCode(code);
  const [alphabet] = findAlphabet(char) || [];

  if (alphabet && !visited.has(char)) {
    const filepath = path.resolve(sourceDir, filename);
    const file = fs.readFileSync(filepath);
    const svgCode = replaceKVGAttrs(file.toString());
    const componentName = `${capitalize(alphabet)}${char}`;

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
        template,
      },
      { componentName }
    );

    fs.writeFileSync(path.resolve(outDir, alphabet, `${char}.tsx`), jsCode);
    appendIndexFile(
      path.resolve(outDir, alphabet),
      `export { default as ${componentName} } from './${char}';\n`
    );

    visited.add(char);
  }
}
