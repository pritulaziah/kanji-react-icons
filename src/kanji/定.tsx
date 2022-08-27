import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji定: KanjiIconType = (props) => (
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
      <path d="M48.23 9.92c3.69 2.13 9.02 7.51 9.93 10.38" />
      <path d="M21.19 27.62c0 3.22-2.88 12.07-4.19 14.21" />
      <path d="M21.88 29.64c4.12-.39 48.09-7.04 63.61-7.54 11.01-.35 4.51 6.65.07 9.08" />
      <path d="M33.6 43.82c2.72.44 5.36.34 8.12 0C48.25 43 67 39.75 71.34 39.75c3.74 0 2.41.13 5.41.13" />
      <path d="M52.15 42.77c1.07.44 1.71 1.98 1.92 2.87.21.88.49 32.38.28 37.89" />
      <path d="M54.61 63.11c6.98-.66 10.41-1.32 20.93-2.64 1.69-.21 2.13-.22 3.2 0" />
      <path d="M35.86 57.89c.06.87.12 2.25-.11 3.51-1.33 7.4-8.48 22.2-18.94 32.13" />
      <path d="M31.46 74.39c8.01 3.1 43.15 17.78 51.86 20.83 2.95 1.03 5.48 1.48 8.43 1.77" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(42.5 10.5)">{"1"}</text>
      <text transform="translate(12.75 31.63)">{"2"}</text>
      <text transform="translate(25.5 25.5)">{"3"}</text>
      <text transform="translate(30.75 39.13)">{"4"}</text>
      <text transform="translate(46.5 53.5)">{"5"}</text>
      <text transform="translate(59.25 59.5)">{"6"}</text>
      <text transform="translate(27.75 59.5)">{"7"}</text>
      <text transform="translate(39.75 75.5)">{"8"}</text>
    </g>
  </svg>
);

export default Kanji定;
