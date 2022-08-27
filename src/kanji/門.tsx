import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji門: KanjiIconType = (props) => (
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
      <path d="M16.14 14.22c.76.45 2.36 3.35 2.51 4.25.15.9-.1 68.15-.25 73.75" />
      <path d="M18.86 17.32c2.52-.12 19.94-2.47 22.23-2.61 1.91-.12 2.9 1.04 3 1.96.14 1.41-1.59 25.52-1.59 26.21" />
      <path d="M19.31 29.68c6.19-.68 17.19-2.43 23.15-3.16" />
      <path d="M18.86 44.07c8.39-1.32 14.89-2.32 22.3-2.92" />
      <path d="M61.96 13.47c.46.61.92 1.92.92 2.73s-.15 23.23 0 24.05" />
      <path d="M63.63 14.57c2.58-.1 22.2-2.21 24.55-2.33 1.96-.1 3.08 1.11 3.07 1.73-.5 18.78-.51 62.03-.51 75.65.01 11.13-5.99 3.13-10.24-.62" />
      <path d="M64.09 26.39c3.49 0 21.55-1.92 25.5-1.92" />
      <path d="M63.63 39.13c5.16 0 18.97-1.72 25.65-1.72" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(9.5 22.5)">{"1"}</text>
      <text transform="translate(20.5 13.5)">{"2"}</text>
      <text transform="translate(22.5 26.5)">{"3"}</text>
      <text transform="translate(22.5 39.5)">{"4"}</text>
      <text transform="translate(53.5 19.5)">{"5"}</text>
      <text transform="translate(63.5 11.5)">{"6"}</text>
      <text transform="translate(66.5 23.5)">{"7"}</text>
      <text transform="translate(66.5 35.5)">{"8"}</text>
    </g>
  </svg>
);

export default Kanji門;
