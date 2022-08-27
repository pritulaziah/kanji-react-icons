import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji因: KanjiIconType = (props) => (
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
      <path d="M18.75 16.32c1.22 1.22 1.86 3.01 1.86 4.91 0 12.2-.05 48.6-.06 68.4v7.62" />
      <path d="M21.23 18.4c18.9-1.27 51.45-3.15 63.52-3.15 2.75 0 4.55 1.74 4.5 4.75-.22 13.86-.05 45.05-.01 67.75.01 3.1.01 6.04.01 8.75" />
      <path d="M32.11 45.55c2.2.53 4.69.23 6.89 0 10.93-1.16 23.62-2.45 33.64-3.32 2.15-.19 4.36-.35 6.41 0" />
      <path d="M53.55 24.5c.41.81.62 1.73.61 3.47C54.12 56.38 46 73 29.75 83.25" />
      <path d="M54.97 54.31c8.18 5.54 18.49 15.5 23.44 26.3" />
      <path d="M21.75 94.51C41.62 93.75 69.96 92.41 88 92" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(13.5 26.5)">{"1"}</text>
      <text transform="translate(23.5 15.5)">{"2"}</text>
      <text transform="translate(30.5 42.5)">{"3"}</text>
      <text transform="translate(44.5 26.5)">{"4"}</text>
      <text transform="translate(57.5 54.5)">{"5"}</text>
      <text transform="translate(25.12 91.25)">{"6"}</text>
    </g>
  </svg>
);

export default Kanji因;
