import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji思: KanjiIconType = (props) => (
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
      <path d="M26.5 19.36c.39.52.9 1.36 1.11 1.99 1.75 5.23 3.32 23.27 4.35 32.9" />
      <path d="M27.85 21.15c18.65-1.9 38.71-4.41 49.08-4.93 3.81-.19 4.75 2.83 4.54 4.23-.76 5.13-2.47 21.3-4.51 29.96" />
      <path d="M53.75 19.5c.5.75.95 1.94.93 3.25-.08 7.22.07 24.36.07 26.5" />
      <path d="M31.75 35.5c10.48-.58 20.94-1.52 31.4-2.27 1.25-.09 2.47-.17 3.64-.26" />
      <path d="M33.5 51.5c10.81-1.39 33.75-3.5 43.58-3.91" />
      <path d="M23.11 69.29c.23 2.7-2.28 14.62-4.11 19.12" />
      <path d="M34.35 64.42c5.15 15.83 21.36 30.41 47.26 28.12 8.89-.79 8.39-2.79 3.2-8.1" />
      <path d="M55.47 61.5c1.83 3.82 5.62 10.37 6.76 4.97" />
      <path d="M83 60.75c4 2.34 7 4.47 10.25 11.72" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(20.5 26.5)">{"1"}</text>
      <text transform="translate(31.5 17.5)">{"2"}</text>
      <text transform="translate(46.5 27.13)">{"3"}</text>
      <text transform="translate(34.5 32.5)">{"4"}</text>
      <text transform="translate(36.5 47.5)">{"5"}</text>
      <text transform="translate(17.5 67.63)">{"6"}</text>
      <text transform="translate(27.75 65.5)">{"7"}</text>
      <text transform="translate(48.5 61.63)">{"8"}</text>
      <text transform="translate(73.5 61.63)">{"9"}</text>
    </g>
  </svg>
);

export default Kanji思;
