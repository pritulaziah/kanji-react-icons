import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji外: KanjiIconType = (props) => (
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
      <path d="M35.44 15.75c.53 1.77.62 3.56.13 5.33C33.25 29.5 26.75 44.75 16.5 55" />
      <path d="M36.72 28.81c1.47.25 3.12.16 4.56-.14 3.52-.72 5.83-1.04 9.45-2.2 3.61-1.17 4.39 1.7 3.77 3.54-5.46 16.06-22.18 50.32-39.75 58.5" />
      <path d="M27.5 47c3.71 1.68 9.57 6.89 10.5 9.5" />
      <path d="M65.56 12.13c1.09 1.09 1.76 2.87 1.76 5.25 0 .78-.07 54.62-.19 73.62-.02 3.16-.04 5.33-.06 6.13" />
      <path d="M71.5 42.5c7.85 3.75 20.29 15.42 22.25 21.25" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(27.75 13.63)">{"1"}</text>
      <text transform="translate(42.75 24.13)">{"2"}</text>
      <text transform="translate(33.75 46.63)">{"3"}</text>
      <text transform="translate(57.5 11.5)">{"4"}</text>
      <text transform="translate(74.25 40.63)">{"5"}</text>
    </g>
  </svg>
);

export default Kanji外;
