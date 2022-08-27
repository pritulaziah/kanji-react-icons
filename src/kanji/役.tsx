import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji役: KanjiIconType = (props) => (
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
      <path d="M31.35 14.5c.12 1.15 0 1.71-.63 2.69-2.85 4.36-9.47 12.19-16.34 16.81" />
      <path d="M34.62 34.25c.13 1.55.03 2.63-.62 4.06C30.5 46 23.5 55.25 12.5 65.25" />
      <path d="M27.08 53c.83.83 1.59 2.25 1.59 4.16 0 3.36-.04 23.53-.06 34.47 0 2.77-.01 4.96-.01 6.12" />
      <path d="M51.58 16.25c.83.83 1.21 2.32 1.19 3.49-.15 12.01-3.21 23.9-10.43 29.27" />
      <path d="M54.01 18.07c5.49-.82 11.69-2.14 16.23-3.51 2.52-.76 4.63.32 3.7 3.26-1.23 3.85-1.74 9.31-1.74 13.32 0 6.73 2.17 9.07 9.61 9.07 8.32 0 9.86-1.34 9.86-9.04" />
      <path d="M49.07 53.83c1.48.37 3.43.42 5.12.12 2.96-.54 17.69-3.92 19.7-4.55 2.86-.89 4.74.73 3.27 3.78C67.74 72.76 55 86.75 39 95.01" />
      <path d="M47.48 63.25c8.58.47 22.08 17.31 37.83 26.65 2.92 1.73 6.12 3.63 9.49 4.27" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(23.5 14.5)">{"1"}</text>
      <text transform="translate(25.5 37.5)">{"2"}</text>
      <text transform="translate(21.75 66.5)">{"3"}</text>
      <text transform="translate(45.5 23.5)">{"4"}</text>
      <text transform="translate(54.5 14.5)">{"5"}</text>
      <text transform="translate(51.5 51.5)">{"6"}</text>
      <text transform="translate(41.5 63.5)">{"7"}</text>
    </g>
  </svg>
);

export default Kanji役;
