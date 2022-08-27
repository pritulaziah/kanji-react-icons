import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji交: KanjiIconType = (props) => (
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
      <path d="M51.62 11.75c1.06 1.06 1.73 2.38 1.73 4.01 0 4.32-.11 8.74-.11 12.15" />
      <path d="M21.5 30.76c2.49.61 5.29.81 8.48.5 15.27-1.51 32.64-3.51 49.25-4.35 3.4-.17 5.39.04 7.92.63" />
      <path d="M38.65 39.33c.35 1.17.23 2.47-.58 3.81C34.86 48.41 28 55.38 22 59.5" />
      <path d="M67.51 37.73c7.84 4.31 14.32 9.28 18.24 14.52" />
      <path d="M67.43 51c.44 1.5.17 2.92-.69 4.74C58.82 72.27 40.22 88.14 19 95.25" />
      <path d="M35 59c4.45.12 29.53 21.55 46.53 32.58 3.81 2.47 6.72 4.17 11.47 5.07" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(44.25 11.5)">{"1"}</text>
      <text transform="translate(13.5 31.63)">{"2"}</text>
      <text transform="translate(30.75 42.13)">{"3"}</text>
      <text transform="translate(58.5 38.5)">{"4"}</text>
      <text transform="translate(58.5 51.5)">{"5"}</text>
      <text transform="translate(38.5 57.13)">{"6"}</text>
    </g>
  </svg>
);

export default Kanji交;
