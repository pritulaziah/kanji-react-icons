import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Hiraganaけ: KanjiIconType = (props) => (
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
      <path d="M24.67 19.75c1.25 1.5 2.62 3.75 2.12 6.38-3 15.88-6.5 29.5-4.88 44.62 2.02 18.84 2.25 4.75 6.75-3.5" />
      <path d="M53.67 38.62c2.12 1.38 4.28 1.89 6.88 1.5 8.25-1.25 15.39-2.57 20.62-4 2.76-.74 5.26-1.12 6.88-1.12" />
      <path d="M71.67 14.38c2.13 1.37 2.88 3.35 2.88 5.12 0 11.62.12 20.38.12 30.12 0 20.75-.62 30.88-12.5 42.25" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(16.3 18.75)">{"1"}</text>
      <text transform="translate(46.68 36.88)">{"2"}</text>
      <text transform="translate(64.05 13.25)">{"3"}</text>
    </g>
  </svg>
);

export default Hiraganaけ;
