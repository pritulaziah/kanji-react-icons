import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji竹: KanjiIconType = (props) => (
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
      <path d="M30.2 16.43c.17.95.19 2.1-.09 3.24-1.74 7.09-7.28 22.56-15.48 31.74" />
      <path d="M24.48 43.58c6.14.04 14.59-2.46 21.58-3.72 1.9-.34 3.43-.56 4.32-.56" />
      <path d="M35.21 45.61c.96.96 1.55 2.39 1.55 4.13 0 10.53-.09 29.94-.24 40.26-.04 3.02-.07 4.71-.07 5.62" />
      <path d="M68.7 11.68c.43 1.2.21 2.55-.1 3.79C66.25 24.75 59.75 38 51.14 49.4" />
      <path d="M64.48 36.08c8.14.04 20.64-3.08 28.54-4.71 2.1-.43 3.83-.57 4.86-.57" />
      <path d="M76.77 37.83c1.08 1.08 2.01 2.79 2.01 5.02 0 14.56-.01 42.16-.01 47.12 0 11.03-4.89 4.66-7.96 1" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(21.5 16.5)">{"1"}</text>
      <text transform="translate(29.5 39.5)">{"2"}</text>
      <text transform="translate(28.5 54.13)">{"3"}</text>
      <text transform="translate(58.5 11.5)">{"4"}</text>
      <text transform="translate(68.5 32.5)">{"5"}</text>
      <text transform="translate(70.5 46.5)">{"6"}</text>
    </g>
  </svg>
);

export default Kanji竹;
