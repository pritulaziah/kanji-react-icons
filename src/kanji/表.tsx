import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji表: KanjiIconType = (props) => (
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
      <path d="M30 24.4c1.02.37 2.9.55 3.9.37 4.12-.72 31.85-4.76 41.53-4.76 1.7 0 2.72.18 3.57.36" />
      <path d="M32.25 35.89c.94.38 2.66.49 3.6.38 5.98-.66 32.4-4.27 39.61-4.88 1.56-.13 2.5.18 3.29.37" />
      <path d="M16.25 49.7c1.52.54 4.31.68 5.82.54 10.68-.99 49.43-5.49 65.11-6.23 2.53-.12 4.05.26 5.31.53" />
      <path d="M52.37 9.75c1.09.5 1.74 2.25 1.96 3.25.22 1 .5 27.25.28 33.5" />
      <path d="M43.97 51.14c.09.83.59 2.35-.18 3.34-7.03 9.01-15.53 18.26-30.73 26.48" />
      <path d="M37.75 66c.48.54 1 1.06 1 2-.03 11.82-.32 20.69-.32 22.69s1.18 3.14 2.68 1.64 14.35-11.84 16.35-13.34" />
      <path d="M76.25 51.89c.05.43.57 2.05.25 2.61-2 3.5-5.75 7.5-12.25 12.25" />
      <path d="M50.75 60.75c4 .75 32.79 23.64 38.31 27.35 2.08 1.4 3.86 2 5.94 2.4" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(23.25 24.5)">{"1"}</text>
      <text transform="translate(24.75 36.13)">{"2"}</text>
      <text transform="translate(9.5 49.5)">{"3"}</text>
      <text transform="translate(42.5 10.5)">{"4"}</text>
      <text transform="translate(31.5 59.5)">{"5"}</text>
      <text transform="translate(31.5 77.5)">{"6"}</text>
      <text transform="translate(69.5 54.5)">{"7"}</text>
      <text transform="translate(52.5 57.5)">{"8"}</text>
    </g>
  </svg>
);

export default Kanji表;
