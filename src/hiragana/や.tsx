import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Hiraganaや: KanjiIconType = (props) => (
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
      <path d="M18 49.38c1.88 1.62 5.25 2.5 8.62.88C45.13 41.38 62.38 30.88 77.45 31c9.02.14 16.01 4.13 15.93 12.29 0 8.33-10.88 16.58-24.5 17.83" />
      <path d="M47.13 15.88c5.12.88 10.41 4.05 11.5 6.62 2.12 5-1 2.38-2.88 2.62" />
      <path d="M30 24.38c2.38 1.88 3.28 2.87 3.88 5.25C36.5 40.13 45 70.75 48.63 82.13c.65 2.04 1.88 6.25 2.88 9.38" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(12.88 44.13)">{"1"}</text>
      <text transform="translate(39.88 13.88)">{"2"}</text>
      <text transform="translate(19.26 25)">{"3"}</text>
    </g>
  </svg>
);

export default Hiraganaや;
