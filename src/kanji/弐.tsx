import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji弐: KanjiIconType = (props) => (
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
      <path d="M24.25 25.94c1.61.49 4 .49 5.63.29 4.77-.6 7.5-1.35 14.08-2.29 1.55-.22 2.5-.11 3.29.03" />
      <path d="M16.75 45.2c3.38.93 7.18.57 10.51.01 15.11-2.58 38.49-6.33 54.49-8.03 2.85-.3 5.7-.23 8.5.37" />
      <path d="M22 63.94c1.77.54 4.19.47 6.02.24 5.38-.7 11.7-1.92 17.87-2.83 1.46-.21 2.89-.39 4.36-.13" />
      <path d="M21.25 89.15c1.25.98 2.49.84 4.33-.07 7.8-3.83 17.81-8.46 24.17-11.58" />
      <path d="M55.25 12.75c1.19 1.19 1.92 2.48 2.25 6.25 2.25 25.75 8.25 57.75 30.25 73.75 7.05 5.13 6.75.75 5.75-7" />
      <path d="M74.5 17.88c3.75 1.83 9.75 6 11.5 9.12" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(17.5 27.5)">{"1"}</text>
      <text transform="translate(9.5 46.5)">{"2"}</text>
      <text transform="translate(14.5 65.98)">{"3"}</text>
      <text transform="translate(13.5 95.5)">{"4"}</text>
      <text transform="translate(46.5 12.5)">{"5"}</text>
      <text transform="translate(67.5 17.5)">{"6"}</text>
    </g>
  </svg>
);

export default Kanji弐;
