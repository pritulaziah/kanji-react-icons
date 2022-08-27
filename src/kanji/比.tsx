import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji比: KanjiIconType = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 109 109"
    {...props}
  >
    <g
      style={{
        fill: "none",
        stroke: "#000",
        strokeWidth: 3,
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }}
    >
      <path d="M29.25 49.5c5.98-.66 12-3 17.21-4.11 1.53-.33 2.5-.32 3.29-.13" />
      <path d="M24 23.25c1.07 1.19 2.01 2.45 2.01 4.07 0 4.45-.34 50.41-.34 57.34 0 5.82-.75 5.98 4.33 3.33 6.25-3.25 11.07-5.89 15.67-8" />
      <path d="M61.25 50.25c7.88-.66 15.8-3 22.67-4.11 2.02-.33 3.3-.32 4.33-.13" />
      <path d="M59 16c1.25 1.25 2.33 3.25 2.33 4.83 0 4.17-.86 48.33-.86 53.23 0 22.86 9.33 19.69 17.78 19.69 6.55 0 13.2-.65 15.67-4.17" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(29.75 46.13)">{"1"}</text>
      <text transform="translate(15.5 24.5)">{"2"}</text>
      <text transform="translate(64.5 46.5)">{"3"}</text>
      <text transform="translate(50.5 16.63)">{"4"}</text>
    </g>
  </svg>
);

export default Kanji比;
