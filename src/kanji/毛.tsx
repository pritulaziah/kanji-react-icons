import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji毛: KanjiIconType = (props) => (
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
      <path d="M61.75 13.25c-.25 1.5-1.06 2.76-2.04 3.5-5.33 4-17.21 9.62-36.46 14.25" />
      <path d="M20.5 47.79c2.75.84 5.69.44 8.37.08 11.84-1.61 26.38-4.99 40.15-6.93 2.46-.35 5.15-.81 7.6-.11" />
      <path d="M13 69.12c3.09.77 6.77.77 9.89.23 20.11-3.47 34.49-6.6 53.84-9.2 2.76-.37 7-.09 8.39.11" />
      <path d="M44.24 28.87c1.13 1.13 1.35 2.55 1.36 4.62.07 10.16-.6 42.49-.6 47.26 0 11 2.5 13.78 24.74 13.78 20.76 0 23.76-1.78 23.76-13.28" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(53.5 12.5)">{"1"}</text>
      <text transform="translate(12.5 49.5)">{"2"}</text>
      <text transform="translate(5.5 70.63)">{"3"}</text>
      <text transform="translate(37.5 37.5)">{"4"}</text>
    </g>
  </svg>
);

export default Kanji毛;
