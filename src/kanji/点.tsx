import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji点: KanjiIconType = (props) => (
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
      <path d="M56.3 29.5c5.7-1 13.95-3.25 16.28-3.08.94.07 2.64 0 3.4.19" />
      <path d="M52.7 11.13c.57.34 1.78 2.53 1.9 3.21.12.68-.07 27.28-.19 31.51" />
      <path d="M32.61 48.83c.42.41.85.76 1.03 1.28 1.45 4.1 3.2 14.42 4.19 21.8" />
      <path d="M34.47 50.36c10.27-1.72 36.65-5.73 41.95-6.31 1.94-.21 3.1 2.14 2.82 3.39-1.15 5.17-2.58 9.89-4.16 16.45" />
      <path d="M38.25 69.69c6.22-.66 30.87-4 38.77-4.66" />
      <path d="M23.25 83c0 5.25-5.75 13-7.25 14.5" />
      <path d="M40.02 82.08c2.61 2.95 4.58 10.07 5.23 14.67" />
      <path d="M61.5 80.5c2.4 2.73 5.71 10.72 6.31 14.97" />
      <path d="M82.25 79c3.81 2.82 9.85 12.08 10.81 16.47" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(59.75 25.13)">{"1"}</text>
      <text transform="translate(44.5 11.5)">{"2"}</text>
      <text transform="translate(24.5 55.5)">{"3"}</text>
      <text transform="translate(35.5 46.5)">{"4"}</text>
      <text transform="translate(42.5 66.13)">{"5"}</text>
      <text transform="translate(16.5 83.5)">{"6"}</text>
      <text transform="translate(34.5 83.5)">{"7"}</text>
      <text transform="translate(55.5 82.63)">{"8"}</text>
      <text transform="translate(74.5 79.63)">{"9"}</text>
    </g>
  </svg>
);

export default Kanji点;
