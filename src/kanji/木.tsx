import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji木: KanjiIconType = (props) => (
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
      <path d="M19.75 40.11c2.45.61 4.91.75 7.36.42 10.61-.99 35.11-3.44 50.38-4.87 3.13-.29 7.01.33 9.26 1.23" />
      <path d="M51.25 10.75c1.81 1.29 2.25 3.62 2.25 5.87 0 14.03.25 69.89.25 75.88 0 13.75-6.12 2.38-7.5 1" />
      <path d="M51.75 39.25c-1.07 2.28-2.46 4.76-4.08 7.35-7.82 12.48-21.15 27.44-31.92 33.65" />
      <path d="M54.5 39c4.35 4.81 23.45 27.3 30.6 35.02 1.76 2.15 3.97 3.73 6.65 4.73" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(12.5 41.5)">{"1"}</text>
      <text transform="translate(42.5 11.5)">{"2"}</text>
      <text transform="translate(37.5 50.5)">{"3"}</text>
      <text transform="translate(66.5 49.5)">{"4"}</text>
    </g>
  </svg>
);

export default Kanji木;
