import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Hiraganaわ: KanjiIconType = (props) => (
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
      <path d="M38.53 14.75c1.5 1.38 2.22 3.73 2 6.38-1 11.87-2.75 44.49-2.75 52.87 0 8.38-.62 16.62-.62 19.5" />
      <path d="M17.53 40.75c2.12 1.38 3.68 1.3 7.5 0 5.88-2 9.8-3.16 16.25-6 4.25-1.88 6.12 0 2.75 4-6.72 7.96-13 16.5-22.12 27.88-7.75 9.66-7.54 12.21 3 2.88 21.88-19.38 49.75-35.62 63.5-21 14.36 15.27 1.62 36.62-23.38 42.62" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(31.16 13.25)">{"1"}</text>
      <text transform="translate(12.41 36.25)">{"2"}</text>
    </g>
  </svg>
);

export default Hiraganaわ;
