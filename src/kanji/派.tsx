import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji派: KanjiIconType = (props) => (
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
      <path d="M17.63 17.75C21.88 20 26.5 23 29 26.09" />
      <path d="M13.25 41.5c4.24 1.37 10.94 5.62 12 7.75" />
      <path d="M13.83 92.25c1.35.5 2.72.23 3.53-1.01 3.14-4.79 6.29-10.64 9.14-16.75" />
      <path d="M65.82 13a3.51 3.51 0 0 1-.95 2.96c-5.12 5.41-10.37 9.66-19.12 14.33" />
      <path d="M41.75 30.28c.98.98 1.39 2.47 1.39 4.11 0 21.09 1.35 50.11-13.34 62.86" />
      <path d="M75.34 27.5c.13 1.15-.31 1.82-1.13 2.7-3.72 4.02-6.93 6.37-13.46 10.84" />
      <path d="M57.02 40.33c.98.92 1.51 2.54 1.51 4.52 0 9.81.04 31.42.05 44.52v5.62" />
      <path d="M85.59 38.75c.03.75-.22 1.38-.83 2.08-3.92 4.5-6.14 6.42-14.26 11.21" />
      <path d="M65.5 47.25C71.84 58.96 78 70.88 86.29 82.22c2.01 2.75 4.95 5.58 7.21 7.28" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(9.75 16.63)">{"1"}</text>
      <text transform="translate(5.5 42.5)">{"2"}</text>
      <text transform="translate(5.25 95.5)">{"3"}</text>
      <text transform="translate(57.5 11.5)">{"4"}</text>
      <text transform="translate(34.5 38.5)">{"5"}</text>
      <text transform="translate(67.5 26.5)">{"6"}</text>
      <text transform="translate(51.75 51.13)">{"7"}</text>
      <text transform="translate(77.5 39.5)">{"8"}</text>
      <text transform="translate(64.5 64.63)">{"9"}</text>
    </g>
  </svg>
);

export default Kanji派;
