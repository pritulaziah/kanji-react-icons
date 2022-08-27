import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji快: KanjiIconType = (props) => (
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
      <path d="M14.75 39.5c0 6.61-2.97 16.36-3.75 18.25" />
      <path d="M30.88 36.5c2.89 1.45 7.46 5.96 8.18 8.22" />
      <path d="M23.87 14.75c.88.88 1.46 2.62 1.46 4 0 .84-.15 47.34-.2 67.88-.01 4.35-.02 7.54-.02 8.88" />
      <path d="M45.81 36.01c1.21.6 3.37 1.02 5.18.76 8.64-1.27 24.15-4.36 26.52-4.72 4.02-.6 5.28 1.1 4.68 4.12-.6 3.02-2.76 14.72-2.96 17.14" />
      <path d="M35.95 57.85c2.55 1.15 6.28.65 8.92.26 11.63-1.74 27.45-3.58 41.14-4.72 3.34-.28 6.4-.5 9.69.33" />
      <path d="M61.97 14.25c.83.83 1.04 2.52 1.13 4.54C65.38 74 52.62 82.25 34.01 94.75" />
      <path d="M62.55 56.56c6.09 7.38 17.41 23.75 25.66 31.31 1.97 1.8 4.41 3.76 7.09 5.04" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(9.5 36.13)">{"1"}</text>
      <text transform="translate(29.75 33.13)">{"2"}</text>
      <text transform="translate(14.5 15.88)">{"3"}</text>
      <text transform="translate(45.5 33.5)">{"4"}</text>
      <text transform="translate(35.5 55.33)">{"5"}</text>
      <text transform="translate(52.5 14.5)">{"6"}</text>
      <text transform="translate(73.5 65.5)">{"7"}</text>
    </g>
  </svg>
);

export default Kanji快;
