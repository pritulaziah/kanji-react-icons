import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji拍: KanjiIconType = (props) => (
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
      <path d="M17 39.92c2.08.25 1.27.55 3.5.25 5.5-.75 15.5-3.5 24.67-4.67" />
      <path d="M32.77 17.5c.48.92 1.76 2.49 1.76 5.52 0 15.23.24 49.46.24 60.9 0 14.25-6.32 3.53-7.77 2" />
      <path d="M16 67.68c1.25 1.78 3.83 1.61 6.5-.18 5-3.36 7.5-5.5 18.75-13.58" />
      <path d="M71.91 16.5c.5 1.02.68 2.31.46 3.15-1.63 6.18-6.71 17.77-12.18 24.81" />
      <path d="M54.3 44.76c.59 1.14 1.19 3.03 1.19 4.55 0 1.51 1.19 32.6 1.19 41.69" />
      <path d="M55.85 47c3.35-.19 30.57-3.57 33.62-3.89 1.94-.21 2.73 1.24 2.72 3.63-.01 4.08-1.03 30.12-1.66 42.62" />
      <path d="M56.31 66.47c6.09-.49 12.16-1.18 18.24-1.77 1.81-.18 3.61-.35 5.32-.51" />
      <path d="M57.48 88.03c8.41-.61 23.88-2.06 32.85-2.34" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(9.5 40.5)">{"1"}</text>
      <text transform="translate(24.5 17.5)">{"2"}</text>
      <text transform="translate(8.5 72.5)">{"3"}</text>
      <text transform="translate(63.5 15.5)">{"4"}</text>
      <text transform="translate(47.5 54.5)">{"5"}</text>
      <text transform="translate(54.75 42.5)">{"6"}</text>
      <text transform="translate(60.5 62.5)">{"7"}</text>
      <text transform="translate(60.46 85.48)">{"8"}</text>
    </g>
  </svg>
);

export default Kanji拍;
