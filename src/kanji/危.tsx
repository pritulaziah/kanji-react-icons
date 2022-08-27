import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji危: KanjiIconType = (props) => (
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
      <path d="M45.5 10.5c.06.54-.17 1.49-.62 2.18-3 4.57-12.38 15.07-23.13 22.32" />
      <path d="M42.25 17.63c2.84 0 17.7-1.87 20.69-2.15 2.56-.24 3.37 2.31 2.31 3.51-4.88 5.5-8.62 10.88-15.5 19" />
      <path d="M23.69 41.32c2.59.79 6.19.66 8.83.28 12.74-1.85 26.24-3.85 42.49-5.37 3.03-.28 5.64-.6 8.63-.05" />
      <path d="M25.72 42.17c.81.81 1.2 2.04 1.18 3.75-.15 12.46-1.78 33.46-12.09 47.58" />
      <path d="M37 52.25c1.38.62 2.8.77 4.64.58 7.98-.83 22.54-2.8 24.82-3.17 3.75-.6 6.19 1.31 6.04 3.73-.25 4.11-3.43 14.92-5.85 20.21-2.32 5.06-5.9 1.02-7.49-.41" />
      <path d="M39.74 53.8c.86.86 1.34 2.2 1.34 3.84 0 9.87.04 19.21.04 25.92 0 11.69 2.75 13.65 24.44 13.65 23.44 0 24.82-2.21 24.82-11" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(36.75 12.13)">{"1"}</text>
      <text transform="translate(53.25 13.63)">{"2"}</text>
      <text transform="translate(30.5 38.5)">{"3"}</text>
      <text transform="translate(18.5 49.5)">{"4"}</text>
      <text transform="translate(40.5 49.63)">{"5"}</text>
      <text transform="translate(32.5 61.5)">{"6"}</text>
    </g>
  </svg>
);

export default Kanji危;
