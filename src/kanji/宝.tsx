import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji宝: KanjiIconType = (props) => (
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
      <path d="M48.17 12.11c3.83 1.64 7.08 5.39 9.39 9.57" />
      <path d="M21.89 25.74c0 4.22-4.05 15.84-5.89 18.66" />
      <path d="M23.35 30.52c8.92-.93 55.48-5.74 62.71-6.1 11.3-.55 2.4 6.72-.42 8.7" />
      <path d="M32.85 46.67c.85.39 3.61.52 4.46.4 3.98-.53 18.75-2.99 35.27-4.37 1.3-.11 2.49.08 3.58.41" />
      <path d="M53.71 47.76c1.26 1.32 1.26 4.29 1.26 5.35 0 7.4-.19 25.64-.19 37.06" />
      <path d="M32.13 67.56c.84.43 3.61.66 4.46.56 4.91-.56 18.12-3.19 34.09-4.17 1.05-.06 3.35-.17 4.91.2" />
      <path d="M21.25 93.09c.81.24 3.94.33 5.31.19 13.2-1.28 47.95-4.03 56.98-4.26 2.21-.05 4.86.4 5.97.77" />
      <path d="M71.54 72.05c3.85 2.06 7.15 6.45 7.97 9.03" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(42.5 13.13)">{"1"}</text>
      <text transform="translate(14.25 30.13)">{"2"}</text>
      <text transform="translate(27.5 26.5)">{"3"}</text>
      <text transform="translate(30.75 43.55)">{"4"}</text>
      <text transform="translate(46.5 56.5)">{"5"}</text>
      <text transform="translate(24.75 68.5)">{"6"}</text>
      <text transform="translate(14.5 93.13)">{"7"}</text>
      <text transform="translate(63.75 74.5)">{"8"}</text>
    </g>
  </svg>
);

export default Kanji宝;
