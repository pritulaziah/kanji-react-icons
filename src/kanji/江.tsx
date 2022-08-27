import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji江: KanjiIconType = (props) => (
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
      <path d="M21.76 19.88c4.94 1.71 12.75 7.05 13.99 9.72" />
      <path d="M15.75 41.75c4.59 1.59 11.85 6.53 13 9" />
      <path d="M14.02 88.62c1.39.58 2.83.38 3.67-.81C20.71 83.5 27 72.99 29.75 67.5" />
      <path d="M44.26 36.06c2.74.56 5.66.47 7.69.18 6.86-.97 20.58-3.25 27.54-4 1.9-.21 4.38-.12 6.14.21" />
      <path d="M64.1 37.12c1.08 1.08 1.32 2.51 1.32 5.23 0 10.16-.05 28.59-.05 37.03" />
      <path d="M34.77 82.59c2.61 1.03 6.42.82 9.11.46 13.62-1.81 28.24-3.43 42.99-4.45 2.59-.18 6.16-.01 8.6 1.1" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(15.5 19.63)">{"1"}</text>
      <text transform="translate(8.5 43.5)">{"2"}</text>
      <text transform="translate(7.5 93.5)">{"3"}</text>
      <text transform="translate(42.5 33.5)">{"4"}</text>
      <text transform="translate(57.5 46.5)">{"5"}</text>
      <text transform="translate(33.5 79.63)">{"6"}</text>
    </g>
  </svg>
);

export default Kanji江;
