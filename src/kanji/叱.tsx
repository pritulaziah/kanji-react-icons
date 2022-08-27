import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji叱: KanjiIconType = (props) => (
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
      <path d="M14.75 38.79c.92.92 1.1 1.79 1.23 2.85.97 5.21 1.92 12.07 2.82 19.13.29 2.24.57 4.5.85 6.74" />
      <path d="M16.08 40.22c8.84-1.95 15.7-3.23 20.2-3.96 2.28-.37 4.33.78 3.91 3.5-.85 5.36-2.16 12.15-3.57 20.35" />
      <path d="M19.82 63.3c4.04-.59 8.86-1.21 14.67-2.01 1.58-.22 3.24-.45 4.97-.7" />
      <path d="M87.78 25.84c0 1.41-.4 2.6-1.31 3.74C77.38 41 62.75 56.62 44.8 66.86" />
      <path d="M54.5 14.13c1.25 1.25 1.26 3.12 1.26 4.72 0 2.12-.17 54.56-.12 61.13.1 13.52 3.25 14.74 20.47 14.74 16.55 0 19.68-2.8 19.68-14.52" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(8.5 46.5)">{"1"}</text>
      <text transform="translate(18.16 36.5)">{"2"}</text>
      <text transform="translate(22.5 59.5)">{"3"}</text>
      <text transform="translate(79.5 25.5)">{"4"}</text>
      <text transform="translate(45.75 12.33)">{"5"}</text>
    </g>
  </svg>
);

export default Kanji叱;
