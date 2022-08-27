import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji客: KanjiIconType = (props) => (
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
      <path d="M48.83 10.2c3.25 1.19 7.45 4.27 7.8 7.69" />
      <path d="M27.27 22.18c0 3.2-3.07 11.99-4.46 14.13" />
      <path d="M28.73 25.01C43.5 23.25 68.25 20 80.39 19.8c10.89-.18 1.12 6.36-.34 7.02" />
      <path d="M45.43 29.73c.05.63.11 1.63-.11 2.53-1.28 5.34-8.6 17.05-18.62 24.22" />
      <path d="M42.39 39.65c.39.03 2.04 0 3.15-.1 3.65-.31 10.32-2.3 15.52-3.26 3.57-.66 4.59.76 3.68 2.56-5 9.88-23.34 32.45-45.8 38.97" />
      <path d="M39.06 44.14C47 51 74.5 67.75 86.44 72.58c2.93 1.18 5.11 2.09 7.87 2.51" />
      <path d="M34.32 76.77c.41.37.83.68 1 1.15 1.41 3.7 3.11 13.9 4.07 20.55" />
      <path d="M36.86 78.44c9.25-1.66 26.04-3.23 30.82-3.71 1.75-.18 2.8 1.05 2.54 2.1-1.03 4.32-2.24 10.38-3.78 16.36" />
      <path d="M39.6 96.06c5.61-.55 20.9-1.5 28.6-2.34" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(43.5 11.5)">{"1"}</text>
      <text transform="translate(20.5 24.5)">{"2"}</text>
      <text transform="translate(30.5 21.5)">{"3"}</text>
      <text transform="translate(37.5 33.5)">{"4"}</text>
      <text transform="translate(50.5 34.5)">{"5"}</text>
      <text transform="translate(46.75 47.75)">{"6"}</text>
      <text transform="translate(28.5 84.5)">{"7"}</text>
      <text transform="translate(41.5 74.5)">{"8"}</text>
      <text transform="translate(43.5 92.5)">{"9"}</text>
    </g>
  </svg>
);

export default Kanji客;
