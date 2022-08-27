import { Template } from "@svgr/babel-plugin-transform-svg-component";

const template: Template = (variables, { tpl }) => {
  const formattedName = `${variables.componentName}: KanjiIconType`;

  return tpl`
import * as React from "react";
import { KanjiIconType } from '../kanjiIcon';
${variables.interfaces};
const ${formattedName} = (props) => (
  ${variables.jsx}
);

${variables.exports};
`;
};

export default template;
