import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Katakanaテ: KanjiIconType = (props) => (
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
      <path d="M36.5 21.5c2.12 1.25 4.38 1.59 7.25 1.25 10.62-1.25 16.88-2.25 24.62-3.25 3.73-.48 5.63-.5 8.13-.25" />
      <path d="M20 44.12c2.88 1 5.26 1.05 7.5.75 22.38-3 37-5.62 54.13-6.12 5.62-.16 7.75 0 10.38.62" />
      <path d="M58 43.25c.88 1 1.32 2.63 1.12 4.38C57.38 63 47.5 82.62 34.5 89.5" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(29.38 19.25)">{"1"}</text>
      <text transform="translate(16.38 39.75)">{"2"}</text>
      <text transform="translate(50.38 49.88)">{"3"}</text>
    </g>
  </svg>
);

export default Katakanaテ;
