import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji央: KanjiIconType = (props) => (
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
      <path d="M27.09 33.75c1.25 1.24 1.38 2.73 1.69 4.22.31 1.49 1.97 20.03 2.38 23.53" />
      <path d="M29.63 36.3c12.03-1.15 39.16-3.83 44.42-4.53 6.39-.85 7.5 1.42 6.94 5.38-.29 2.04-2.47 13.74-3.75 20.11" />
      <path d="M14.38 62.86c4.17.77 8.25.48 11.79.14 17.58-1.7 37.24-4.59 59.1-4.67 3.52-.01 6.9.34 10.35.93" />
      <path d="M53.19 13c1.06 1.75 1.26 2.94 1.31 5.38C55.62 71.25 43.25 81.12 20 95.75" />
      <path d="M54.5 61.25c7.87 8.53 20.63 20.96 29.68 28.31 2.52 2.05 5.94 4.45 9.57 5.56" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(22.5 43.5)">{"1"}</text>
      <text transform="translate(32.25 32.5)">{"2"}</text>
      <text transform="translate(6.5 64.5)">{"3"}</text>
      <text transform="translate(44.5 14.5)">{"4"}</text>
      <text transform="translate(65.5 69.5)">{"5"}</text>
    </g>
  </svg>
);

export default Kanji央;
