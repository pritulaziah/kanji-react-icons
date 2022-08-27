import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji年: KanjiIconType = (props) => (
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
      <path d="M40.01 11.89c.24 1.61-.01 2.86-.84 4.46-2.53 4.84-6.91 11.4-15.86 19.62" />
      <path d="M39.13 23.62c2.25.38 4.4.18 5.79.03 11.7-1.27 21.33-2.9 33.22-4.07 2.3-.23 4.2 0 5.35.26" />
      <path d="M30.13 43.59c1.36.33 3.87.46 5.21.33 10.91-1.05 28.53-3.42 40.78-4.26 2.26-.15 3.63.16 4.76.32" />
      <path d="M33.75 44.5c1 1.25 1 1.97 1.01 3.5.04 4.33.24 17.29.24 18.25" />
      <path d="M13.88 67.74c1.97.47 5.61.66 7.57.47 20.21-2.03 36.35-4.62 66.65-5.31 3.29-.08 5.26.22 6.91.46" />
      <path d="M56.56 25.46c1.12 1.12 1.79 3.54 1.79 4.94 0 .89-.05 44.26-.13 61.6-.01 3.12-.03 5.39-.05 6.38" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(32.25 11.5)">{"1"}</text>
      <text transform="translate(46.5 19.5)">{"2"}</text>
      <text transform="translate(31.5 41.5)">{"3"}</text>
      <text transform="translate(27.5 53.5)">{"4"}</text>
      <text transform="translate(6.5 69.5)">{"5"}</text>
      <text transform="translate(50.5 33.5)">{"6"}</text>
    </g>
  </svg>
);

export default Kanji年;
