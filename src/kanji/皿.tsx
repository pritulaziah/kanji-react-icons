import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji皿: KanjiIconType = (props) => (
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
      <path d="M22.82 32.31c1.06 1.06 1.81 2.48 1.91 3.5 1.02 9.81 2.57 27.99 3.45 42.44" />
      <path d="M25.92 34.83c11.91-1.45 43.51-3.98 54.7-4.6 4.13-.23 6.88 1.15 6.15 5.77-1.51 9.6-5.02 33.87-6.11 40.42" />
      <path d="M42.66 35.06c.77.77 1.2 1.9 1.28 2.86.69 8.96 1.66 26.03 2.41 39.66" />
      <path d="M63.92 33.33c.58.92.89 2.48.79 3.67-.96 11.75-2.03 24.78-3.21 39.83" />
      <path d="M10.13 79.32c2.81.92 7.95 1.09 10.76.92 24.86-1.49 46.49-2.49 66.92-2.69 4.67-.05 7.48.44 9.82.9" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(17.5 41.5)">{"1"}</text>
      <text transform="translate(27.5 31.5)">{"2"}</text>
      <text transform="translate(36.5 43.63)">{"3"}</text>
      <text transform="translate(56.5 41.5)">{"4"}</text>
      <text transform="translate(2.5 80.5)">{"5"}</text>
    </g>
  </svg>
);

export default Kanji皿;
