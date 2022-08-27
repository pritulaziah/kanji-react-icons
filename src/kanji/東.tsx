import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji東: KanjiIconType = (props) => (
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
      <path d="M32.13 25.23c.94.38 2.66.42 3.6.38 9.77-.44 26.02-4.05 37.36-3.88 1.57.02 2.5.18 3.29.37" />
      <path d="M27.52 37.11c.52.69 1.04 1.03 1.04 1.95 0 .92 5.65 25.18 5.65 25.64 0 .46.17.46.35 1.37" />
      <path d="M29.42 39.22c2.94-.11 45.63-4.78 48.3-4.92 2.23-.11 3.62 2.26 3.49 2.95-1.46 7.82-3.71 16.82-7.21 26.07" />
      <path d="M31.25 50.82c10.71-1.07 21.45-1.88 32.18-2.69 1.2-.09 2.37-.18 3.49-.26" />
      <path d="M35.76 63.49c8.09-.49 27.47-2.81 37.55-3.23" />
      <path d="M51.25 12.82c1.25.5 2 2.25 2.25 3.25s-.25 71.75-.25 78c0 11.75-4.88 3.38-6.25 2" />
      <path d="M53.25 62.57c-6.07 10.48-21.87 25.32-34.5 31.25" />
      <path d="M53.25 62.57c9.5 9.25 29.25 23.25 35.7 26.03 2.21.96 3.77 1.85 5.8 2.22" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(23.25 21.7)">{"1"}</text>
      <text transform="translate(17.25 45.7)">{"2"}</text>
      <text transform="translate(30.75 36.7)">{"3"}</text>
      <text transform="translate(35.25 48.7)">{"4"}</text>
      <text transform="translate(38.25 60.7)">{"5"}</text>
      <text transform="translate(45.75 6.7)">{"6"}</text>
      <text transform="translate(33.75 78.7)">{"7"}</text>
      <text transform="translate(71.25 74.2)">{"8"}</text>
    </g>
  </svg>
);

export default Kanji東;
