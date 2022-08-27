import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Hiraganaお: KanjiIconType = (props) => (
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
      <path d="M22.88 35.12c1.38 1 3.62 2.38 6 2.12 2.38-.26 19.62-5.12 21.12-5.74 1.5-.62 4-1.25 5.88-2" />
      <path d="M41.5 16.12c2.25 1 3.59 4.39 3.12 7.38-2.5 16.12-3.37 45.53-2.25 58.38.75 8.62-.64 10.45-7.12 7.12-5.13-2.62-13.75-8-13.75-12.38C21.5 69.12 45.88 53 66.25 53c17.25 0 25 8.25 25 17.25 0 8.25-9.38 18.88-26.75 21" />
      <path d="M73 22.12c5.38 2.62 8.88 5.88 10.62 8.25 2.27 3.08.38 4.5-1.12 5" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(17.25 34.88)">{"1"}</text>
      <text transform="translate(32.75 16.63)">{"2"}</text>
      <text transform="translate(64.38 21.63)">{"3"}</text>
    </g>
  </svg>
);

export default Hiraganaお;
