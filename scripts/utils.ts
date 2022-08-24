import * as fs from "fs";
import * as path from "path";

export const replaceKVGAttrs = (str: string) => {
  const kvgAttrs = [
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

  for (const replacer of kvgAttrs) {
    str = str.replace(new RegExp(`kvg:${replacer}="[^"]*"`, "g"), "");
  }

  return str;
};

export const createIndexFile = (dir: string, data = "") => {
  fs.writeFileSync(path.resolve(dir, "index.ts"), data);
};

export const appendIndexFile = (dir: string, data: string) => {
  fs.appendFileSync(path.resolve(dir, "index.ts"), data);
};
