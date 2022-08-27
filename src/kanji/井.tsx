import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji井: KanjiIconType = (props) => (
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
      <path d="M23.5 36.9c2.13.77 4.95.45 7.14.16 10.59-1.37 37.06-3.96 49.24-4.82 2.63-.19 4.81-.18 7.38.38" />
      <path d="M14.25 62.95c3.44 1.23 7.55.89 11.12.49 12.88-1.44 42.51-4.32 61.11-5.17 3.37-.15 6.23.06 9.52.77" />
      <path d="M40 16.5c.75 1 .98 2.47 1 3.5 1.12 55.5-2.38 62-19.25 78.25" />
      <path d="M66.62 11.25c.88.88 1.21 2.25 1.21 3.5 0 .73-.06 54.49-.07 77.38v8.62" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(16.5 38.5)">{"1"}</text>
      <text transform="translate(6.75 63.5)">{"2"}</text>
      <text transform="translate(31.5 17.5)">{"3"}</text>
      <text transform="translate(57.5 11.5)">{"4"}</text>
    </g>
  </svg>
);

export default Kanji井;
