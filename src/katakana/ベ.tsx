import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Katakanaベ: KanjiIconType = (props) => (
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
      <path d="M15.5 49c2.75 1.5 5.33.62 6.88-.88 4-3.88 9.38-8.5 11.88-11C37.38 34 41.49 32.04 46.13 36 57.26 45.5 72.38 58.5 83 67.12c4.23 3.43 7.62 6.62 11.12 9.25" />
      <path d="M66.88 27c2.75 1.75 6 5.38 7.75 8.5" />
      <path d="M73.26 22.12c3.06 1.57 6.68 4.82 8.62 7.62" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(11.76 43.63)">{"1"}</text>
      <text transform="translate(59.26 26)">{"2"}</text>
      <text transform="translate(65.38 21.63)">{"3"}</text>
    </g>
  </svg>
);

export default Katakanaベ;
