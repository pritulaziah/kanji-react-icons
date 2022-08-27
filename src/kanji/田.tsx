import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji田: KanjiIconType = (props) => (
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
      <path d="M19 27.48c.5 1.02.51 1.7.78 2.95C22 40.75 24 66.5 25.31 85.5" />
      <path d="M21.35 29.04C39 28 69.25 26.25 82.43 25.24c4.84-.37 7.3 2.62 7.04 5.38C88.5 40.75 86 66 85.01 81.87" />
      <path d="M54.5 28.75c-.03.79-.05 2.18-.06 4-.06 11.96.31 42.66.31 47" />
      <path d="M24.5 55.5c13.67-1.19 27.43-1.76 41.13-2.52 1.65-.09 3.25-.18 4.78-.26" />
      <path d="M26.23 82.82c12.7 0 41.39-2.3 58.93-2.58" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(11.5 34.63)">{"1"}</text>
      <text transform="translate(23.5 25.5)">{"2"}</text>
      <text transform="translate(46.5 37.5)">{"3"}</text>
      <text transform="translate(27.5 52.5)">{"4"}</text>
      <text transform="translate(28.5 79.5)">{"5"}</text>
    </g>
  </svg>
);

export default Kanji田;
