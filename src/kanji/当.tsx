import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji当: KanjiIconType = (props) => (
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
      <path d="M51.61 13.62c.18.26 2.39 1.35 2.56 2.99.83 7.9.33 21.89.33 32.39" />
      <path d="M24.27 24.83c3.99 2.76 10.3 11.34 11.29 15.63" />
      <path d="M83.99 19c.04.48.08 1.24-.08 1.94-.93 4.08-6.28 13.05-13.61 18.53" />
      <path d="M24.45 50.18c4.13.99 4.37.97 7.09.79C50.25 49.75 76 47.5 81.15 47c3.82-.37 5.35 3.03 4.91 5.98-1.56 10.27-3.56 28.52-4.73 39.66" />
      <path d="M26 70.24c2.66.2 4.74.53 7.68.4 8.57-.39 25.57-2.64 33.94-2.96 3.26-.13 5.91.4 7.38.59" />
      <path d="M24.22 92.41c1.48.2 4.14.7 5.91.6 16.24-.99 31.78-2.58 46.54-2.98 2.36-.06 2.84 0 4.61.2" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(44.5 14.5)">{"1"}</text>
      <text transform="translate(15.75 24.5)">{"2"}</text>
      <text transform="translate(75.75 18.5)">{"3"}</text>
      <text transform="translate(16.5 51.13)">{"4"}</text>
      <text transform="translate(17.5 71.5)">{"5"}</text>
      <text transform="translate(16.5 94.63)">{"6"}</text>
    </g>
  </svg>
);

export default Kanji当;
