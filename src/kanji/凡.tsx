import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji凡: KanjiIconType = (props) => (
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
      <path d="M35.55 21.25c1.04 1.04 1.5 2.38 1.57 4.74C37.75 48 38 78.5 17.25 92.5" />
      <path d="M38.25 23.75C42 23 60.5 19.5 63.5 18.75s5.85.69 5.5 4.5c-1.75 19.25-2.5 36-2.5 52 0 13.02 2.75 15 14.25 15 12 0 13.5-1.5 13.5-10.5" />
      <path d="M46 48c5.58 4.67 8.77 9.62 10.5 14" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(30.5 31.63)">{"1"}</text>
      <text transform="translate(38.5 19.5)">{"2"}</text>
      <text transform="translate(43.5 44.5)">{"3"}</text>
    </g>
  </svg>
);

export default Kanji凡;
