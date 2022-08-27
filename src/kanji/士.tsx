import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji士: KanjiIconType = (props) => (
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
      <path d="M13.13 54.98c3.87.9 7.66.43 11.36.16 18.76-1.39 44.96-3.08 61.9-3.32 3.22-.05 6.57.08 9.74.76" />
      <path d="M52.25 17.25A6.122 6.122 0 0 1 54 21.5c0 1.03.25 58.62.25 66" />
      <path d="M21.75 89.45c2.73.83 5.82.54 8.62.42 12.73-.57 33.94-2.04 45.88-2.17 2.97-.03 5.83.21 8.75.74" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(6.5 55.63)">{"1"}</text>
      <text transform="translate(40.5 18.5)">{"2"}</text>
      <text transform="translate(13.5 89.5)">{"3"}</text>
    </g>
  </svg>
);

export default Kanji士;
