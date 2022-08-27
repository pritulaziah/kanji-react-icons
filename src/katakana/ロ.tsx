import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Katakanaロ: KanjiIconType = (props) => (
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
      <path d="M25 33.25c1.5 1.25 2.16 3.14 2.38 5.38.96 10.07 2.14 23.67 3.14 34.88.31 3.4.59 6.58.86 9.38" />
      <path d="M28.13 36.12c9.25-1 37.62-3.12 45.62-4.25s9.57.53 8.38 6.62C80 49.38 78 60.38 75.38 73.38" />
      <path d="M32 78.12c5.38-.5 33.62-3 36.5-3 2.88 0 7.88-.25 11.5.25" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(18.38 39.75)">{"1"}</text>
      <text transform="translate(30.51 32.25)">{"2"}</text>
      <text transform="translate(35.13 73.63)">{"3"}</text>
    </g>
  </svg>
);

export default Katakanaロ;
