import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji官: KanjiIconType = (props) => (
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
      <path d="M48.15 11.5c3.88 1.4 9.48 6.05 10.28 10.02" />
      <path d="M27.05 27.75c0 2.77-3.35 12.9-4.42 14.75" />
      <path d="M27.74 29.63c1.18.07 47.42-5.65 53.41-5.91 10.85-.47 1.15 6.7-.35 7.4" />
      <path d="M36.87 40.75c1.09.5 1.74 2.25 1.96 3.25.22 1 0 48.75-.22 55" />
      <path d="M39.25 42c9-1.5 24.25-3.5 29.19-4.01 1.8-.19 2.89 1.11 2.63 2.21-1.07 4.55-2.32 8.05-3.91 14.35" />
      <path d="M39.75 58.5c5.8-.58 21.25-2.5 29.21-3.39" />
      <path d="M39 75.75c9.75-1.5 28.5-3.95 33.44-4.51 1.8-.21 2.89 1.21 2.63 2.41-1.07 4.97-2.32 10.98-3.91 17.86" />
      <path d="M39.25 95.75c5.8-.63 25.75-2.65 33.71-3.62" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(42.5 11.5)">{"1"}</text>
      <text transform="translate(19.5 30.13)">{"2"}</text>
      <text transform="translate(30.5 25.13)">{"3"}</text>
      <text transform="translate(30.75 49.63)">{"4"}</text>
      <text transform="translate(41.5 38.5)">{"5"}</text>
      <text transform="translate(43.36 54.13)">{"6"}</text>
      <text transform="translate(43.42 70.63)">{"7"}</text>
      <text transform="translate(43.38 91.5)">{"8"}</text>
    </g>
  </svg>
);

export default Kanji官;
