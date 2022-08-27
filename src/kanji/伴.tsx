import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji伴: KanjiIconType = (props) => (
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
      <path d="M35.73 14.89c.14 1.15 0 2.34-.38 3.76-2.39 8.93-11.65 26.46-22.8 38.57" />
      <path d="M28.53 37.75c.92.92 1.26 1.97 1.26 3.23 0 10.64-.03 32.78-.04 45.03v6.62" />
      <path d="M47.5 23.5c2.97 2.26 7.67 9.28 8.41 12.79" />
      <path d="M91.18 19.63c.08 1.03-.04 1.45-.56 2.38-2.02 3.67-5.12 7.64-9.51 12.29" />
      <path d="M47.71 46.93c2.13.7 4.74.66 6.89.29 7.9-1.35 20.65-2.85 31.02-3.85 2.09-.2 4.17-.19 6.24.22" />
      <path d="M39.56 65.64c2.64.76 5.75.58 8.45.23 10.93-1.41 28.49-3.37 42.86-3.97 2.71-.11 5.15-.12 7.81.34" />
      <path d="M68.6 10.75c1.2 1.2 1.5 2.62 1.5 4.08 0 .87-.09 67.42-.09 73.42 0 4.59-.01 7.92-.01 9.25" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(27.5 15.5)">{"1"}</text>
      <text transform="translate(22.5 55.5)">{"2"}</text>
      <text transform="translate(44.5 20.5)">{"3"}</text>
      <text transform="translate(82.5 19.5)">{"4"}</text>
      <text transform="translate(40.5 47.5)">{"5"}</text>
      <text transform="translate(37.5 62.5)">{"6"}</text>
      <text transform="translate(60.75 10.63)">{"7"}</text>
    </g>
  </svg>
);

export default Kanji伴;
