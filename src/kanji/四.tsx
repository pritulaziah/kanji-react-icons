import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji四: KanjiIconType = (props) => (
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
      <path d="M14.5 31.48c1.51 1.51 2.25 3.27 2.53 5.2 1.14 7.9 2.61 25.18 4.39 40.83.29 2.55.34 3.81.64 6.24" />
      <path d="M17.85 34.04c21.65-1.92 51.52-3.92 67.82-4.3 4.85-.11 6.31 2.62 6.04 5.38-.9 9.02-4.17 28.29-6.41 39.62-.49 2.49-.94 4.6-1.3 6.13" />
      <path d="M40.5 36c.08.64.12 1.65-.16 2.57-2.22 7.3-5.1 14.55-13.35 22.68" />
      <path d="M59.75 34.25c.8 1.05 1.44 2.29 1.49 3.92.11 3.62.05 7.05.05 9.89 0 6.94.71 7.54 9.47 7.54 4.99 0 8.86-.72 10.25-1.72" />
      <path d="M22.73 79.32c13.77-.57 43.64-1.8 61.18-2.08" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(8.75 40.63)">{"1"}</text>
      <text transform="translate(20.75 29.13)">{"2"}</text>
      <text transform="translate(31.25 41.63)">{"3"}</text>
      <text transform="translate(52.25 40.13)">{"4"}</text>
      <text transform="translate(27.25 75.63)">{"5"}</text>
    </g>
  </svg>
);

export default Kanji四;
