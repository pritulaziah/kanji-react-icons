import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji果: KanjiIconType = (props) => (
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
      <path d="M28.27 16.76c.73.74 1.78 1.61 1.78 2.6s4.24 27.16 4.24 27.65c0 .49.13.49.26 1.48" />
      <path d="M30.19 18.39c2.2-.12 43.91-4.65 45.92-4.65 2.64.01 3.74 2.87 3.61 3.6-.26 1.48-7.02 27.01-7.02 27.75" />
      <path d="M32.08 32.26c9.68 0 19.57-1.64 29.2-2.5 1.2-.11 2.37-.21 3.5-.31" />
      <path d="M35.44 46.22c6.06-.53 29.31-2.45 36.85-2.9" />
      <path d="M17.75 60c.75.25 2.75.66 4.75.75 5.5.25 48-5.5 64-6 2-.06 2.5.25 3.75.5" />
      <path d="M52.25 18.25c1.25.5 2 2.25 2.25 3.25s-.25 67.73-.25 69c0 12.25-5.5 2.75-6.75 1.5" />
      <path d="M51.75 58.75c-6.73 10.9-24.24 26.33-38.25 32.5" />
      <path d="M54.5 57.25c5.31 4.12 28.63 23.6 34.41 27.65 1.96 1.37 3.64 1.96 5.59 2.35" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(22.5 24.5)">{"1"}</text>
      <text transform="translate(33.5 14.5)">{"2"}</text>
      <text transform="translate(37.5 28.63)">{"3"}</text>
      <text transform="translate(37.5 43.63)">{"4"}</text>
      <text transform="translate(9.75 61.5)">{"5"}</text>
      <text transform="translate(45.5 25.63)">{"6"}</text>
      <text transform="translate(35.5 70.5)">{"7"}</text>
      <text transform="translate(71.5 68.5)">{"8"}</text>
    </g>
  </svg>
);

export default Kanji果;
