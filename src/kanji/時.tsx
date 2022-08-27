import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji時: KanjiIconType = (props) => (
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
      <path d="M16.5 30.34c.35 1.08.71 1.62.71 3.07s-.24 39.7-.24 40.42c0 .72.12 1.72.24 3.17" />
      <path d="M17.3 31.02c2-.18 16.26-2.31 18.08-2.53 1.52-.18 3 1.5 2.88 2.57-.24 2.17-.36 24.9-.35 40.79 0 1.63-.12 3.35-.12 4.43" />
      <path d="M18.75 52.25c3.21-.54 6.43-1.08 9.65-1.58.9-.14 1.79-.27 2.65-.39" />
      <path d="M17.8 74.02c6.2-.77 12.45-1.52 18.94-2.45" />
      <path d="M51.69 29.28c.67.31 1.89.38 2.56.31 7.75-.84 21.25-3.34 30.38-3.56 1.11-.03 1.78.15 2.34.3" />
      <path d="M68.59 12.37c.08.24 1.02 1.24 1.09 2.75.35 7.25-.22 25.13-.22 27.6" />
      <path d="M46.13 45.85c.94.44 2.65.53 3.59.44 8.28-.79 30.03-3.79 42.63-4.25 1.56-.06 2.5.21 3.28.43" />
      <path d="M46.5 61.49c.94.46 2.66.54 3.61.46 10.64-.95 30.97-4.45 42.76-4.39 1.57.01 2.51.22 3.29.44" />
      <path d="M78.82 46.08c.43.67 1.16 2.06 1.21 4.56.23 12.03-1.09 34.93-1.09 39.02 0 9.83-5.67 1.97-6.91.71" />
      <path d="M57.75 71c2.48 1.54 5.65 5.6 6.27 8" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(9.75 39.13)">{"1"}</text>
      <text transform="translate(18.5 27.5)">{"2"}</text>
      <text transform="translate(21.5 48.13)">{"3"}</text>
      <text transform="translate(21.33 70.5)">{"4"}</text>
      <text transform="translate(45.5 27.13)">{"5"}</text>
      <text transform="translate(58.5 11.5)">{"6"}</text>
      <text transform="translate(45.75 42.13)">{"7"}</text>
      <text transform="translate(44.25 57.13)">{"8"}</text>
      <text transform="translate(71.25 54.13)">{"9"}</text>
      <text transform="translate(47.25 76.63)">{"10"}</text>
    </g>
  </svg>
);

export default Kanji時;
