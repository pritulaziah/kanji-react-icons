import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji存: KanjiIconType = (props) => (
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
      <path d="M22.75 29.55c2.37.86 5.67.68 8.12.39 11.38-1.31 34.88-3.44 49.37-4.16 2.79-.14 5.77-.17 8.51.43" />
      <path d="M54.14 11c.36 1.75.14 3.25-.82 5.89C47.25 33.5 36 56.88 16.5 71.29" />
      <path d="M30.89 54.25c1.12 1.12 1.76 2.88 1.76 4.57 0 8.47.09 19.32.04 31.18-.01 2.04-.01 4.12-.01 6.25" />
      <path d="M54.15 43.63c1.87.62 4.43.97 6.39.66 6.59-1.04 13.58-2.59 17.33-3.29 2.01-.38 2.93 1.53 1.29 2.93-2.28 1.95-10.01 8.62-14.65 12.11" />
      <path d="M64.5 56.04c6 5.71 12.62 22.96 6.22 36.87-2.68 5.82-7.47 1.21-8.93-.6" />
      <path d="M43.59 68.39c2.16.73 5.49.64 7.79.36C59.75 67.74 77.78 65.77 87 65c3.12-.26 5.88-.26 8.16.44" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(16.5 30.5)">{"1"}</text>
      <text transform="translate(45.5 11.5)">{"2"}</text>
      <text transform="translate(24.75 73.63)">{"3"}</text>
      <text transform="translate(51.75 40.63)">{"4"}</text>
      <text transform="translate(57.75 60.13)">{"5"}</text>
      <text transform="translate(41.5 65.5)">{"6"}</text>
    </g>
  </svg>
);

export default Kanji存;
