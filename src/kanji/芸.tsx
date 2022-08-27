import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji芸: KanjiIconType = (props) => (
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
      <path d="M19.5 27.52c2.4.98 5.13.44 7.61.24 12.74-1.01 38.67-3.21 53.01-3.66 3.04-.1 6.14-.31 9.12.42" />
      <path d="M38.25 14.5c1.25.75 2.02 1.87 2.25 3.25C42 26.88 42.38 31.25 43 36" />
      <path d="M70.25 13c.42 1.18.77 2 .5 3.5-1.38 7.62-2.12 11.12-3.75 18" />
      <path d="M31.25 45.2c2.04.75 4.68.78 6.76.64 9.81-.66 21.41-1.71 31.61-2.37 2.38-.15 4.78-.41 7.13.11" />
      <path d="M16.75 61.63c3.34.89 6.89.51 10.26.22 15.33-1.33 42.06-3.21 56.98-3.53 3.25-.07 6.53-.18 9.76.33" />
      <path d="M50.74 63.68c.38 1.32 0 3.46-1.13 4.82C43.62 75.75 38.62 81 30.9 88.73c-3.96 3.96-3.15 5.39 1.93 4.28 15.22-3.33 25.67-5.27 43.92-9.27" />
      <path d="M68.25 74.5c6.5 4 14.25 13.5 16.31 19.97" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(12.49 28.63)">{"1"}</text>
      <text transform="translate(30.49 15.06)">{"2"}</text>
      <text transform="translate(61.99 13.48)">{"3"}</text>
      <text transform="translate(24.49 46.41)">{"4"}</text>
      <text transform="translate(9.49 62.83)">{"5"}</text>
      <text transform="translate(39.49 71.76)">{"6"}</text>
      <text transform="translate(61.99 73.18)">{"7"}</text>
    </g>
  </svg>
);

export default Kanji芸;
