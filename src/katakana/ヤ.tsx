import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Katakanaヤ: KanjiIconType = (props) => (
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
      <path d="M18 45.75c2.12 1.62 6.15 2.35 10.12 1.38C47 42.51 61.51 39.3 77 35.25c22-5.75 1.5 14.25-2.75 20" />
      <path d="M38.47 19.38c1.65 1.4 2.54 2.67 3.18 5.21.64 2.54 11.95 52.9 12.59 55.57.64 2.67 2.16 9.16 3.05 12.46" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(14.63 40.75)">{"1"}</text>
      <text transform="translate(30.26 19.25)">{"2"}</text>
    </g>
  </svg>
);

export default Katakanaヤ;
