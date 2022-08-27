import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji窓: KanjiIconType = (props) => (
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
      <path d="M49.34 10.25c3.31 1.62 6.53 4.21 8.09 7.65" />
      <path d="M24.69 23.76c0 3.73-2.04 14-2.96 16.49" />
      <path d="M26.32 26.24c11.43-1.99 46.43-6.49 54.77-6.38 10.79.14 2.29 6.41-.4 8.3" />
      <path d="M40.02 31.5c.04.42.08 1.09-.08 1.69-.93 3.57-5.81 12.1-13.53 16.22" />
      <path d="M62.24 28.87c5.37 2.71 12.51 8.58 15.65 14.18" />
      <path d="M51.5 42c.5 1.25.3 1.82-.02 2.33-4.23 6.67-7.73 10.42-14.93 17.5-1.77 1.74-1.93 2.13.92 1.49 9.28-2.07 22.03-6.07 29.52-7.4" />
      <path d="M61.83 50.55c3.54 2.19 9.15 9.01 10.03 12.42" />
      <path d="M24.63 78.27c.31 2.54-3.12 13.75-5.62 17.98" />
      <path d="M32.5 76.71C42 93 57.5 99.75 77.45 98.75c9.05.25 8.8-4 3.33-7.48" />
      <path d="M49.53 69.87c1.56 2.9 5.65 9.37 6.63 5.28" />
      <path d="M76.6 71.34c4.06 1.52 7.1 2.91 10.4 7.62" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(44.5 10.5)">{"1"}</text>
      <text transform="translate(17.25 30.13)">{"2"}</text>
      <text transform="translate(29.25 21.13)">{"3"}</text>
      <text transform="translate(31.5 34.5)">{"4"}</text>
      <text transform="translate(55.5 31.5)">{"5"}</text>
      <text transform="translate(44.25 43.5)">{"6"}</text>
      <text transform="translate(56.5 49.5)">{"7"}</text>
      <text transform="translate(18.5 78.13)">{"8"}</text>
      <text transform="translate(30.5 89.5)">{"9"}</text>
      <text transform="translate(40.5 73.5)">{"10"}</text>
      <text transform="translate(65.5 74.5)">{"11"}</text>
    </g>
  </svg>
);

export default Kanji窓;
