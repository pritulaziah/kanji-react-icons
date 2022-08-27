import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji反: KanjiIconType = (props) => (
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
      <path d="M28.13 22.29c1.84.48 5.22.64 7.06.48C50 21.5 64.62 19.12 79.06 18.04c3.06-.23 4.91-.02 6.44.22" />
      <path d="M31.24 23c1.13 1.13 1.49 2.69 1.4 4.89-.89 22.11-3.02 45.36-16.83 61.58" />
      <path d="M35.09 43.98c1.81.37 2.76.74 6.4.37 8.39-.85 24.76-4.35 29.34-5.65 3.42-.97 5.17 1.43 3.89 4.31C64.06 66.95 51.88 83.25 26 93.51" />
      <path d="M37.5 52.82c5.09.96 28.95 25.78 46.67 36.36 2.76 1.65 4.77 2.74 7.33 3.29" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(33.5 19.5)">{"1"}</text>
      <text transform="translate(25.5 32.5)">{"2"}</text>
      <text transform="translate(38.5 41.5)">{"3"}</text>
      <text transform="translate(44.5 54.5)">{"4"}</text>
    </g>
  </svg>
);

export default Kanji反;
