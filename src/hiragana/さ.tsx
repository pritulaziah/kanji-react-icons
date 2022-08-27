import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Hiraganaさ: KanjiIconType = (props) => (
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
      <path d="M27 38.9c2.42 1.33 5.38 1.47 8.32 1.06 8.79-1.24 28.67-7.76 34.15-10.43 2.79-1.36 3.78-1.91 6.28-3.53" />
      <path d="M41.5 13.88c1.5.88 3.63 2.94 4.5 5.12 5.5 13.75 15.25 27.62 26.87 39.5 7.98 8.15 6.38 10-6 3.12" />
      <path d="M35.25 80.5C39.75 92.25 56.13 93 73.63 88" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(21.25 38.5)">{"1"}</text>
      <text transform="translate(32 13)">{"2"}</text>
      <text transform="translate(28.25 77)">{"3"}</text>
    </g>
  </svg>
);

export default Hiraganaさ;
