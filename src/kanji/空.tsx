import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji空: KanjiIconType = (props) => (
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
      <path d="M48.34 11.75c3.39 1.55 7.28 5.69 8.15 10.03" />
      <path d="M26.57 28.25c0 3.34-2.5 12.52-3.63 14.75" />
      <path d="M29.15 29.75c.97.08 45.48-5.2 51.45-5.5 9.9-.5 4.15 5-.6 8.75" />
      <path d="M40.51 39.25c.08.56.09 1.44-.17 2.26C38 48.73 35 54.25 25 61.25" />
      <path d="M59.51 33.22c.94 1.02 1.68 2.22 1.74 3.78.25 7-.75 13.25 2 15.75 2.63 2.39 17.5.5 20.75-.5" />
      <path d="M32.29 68.97c.91.52 2.89.64 3.82.53 8.39-1 24.14-2.5 34.53-3.29 1.41-.11 2.69.1 3.86.54" />
      <path d="M53.08 70.45c.96 1.25.96 2 .96 3 0 7 .15 8.8.15 16.8" />
      <path d="M19.5 92.55c.89.32 4.06 1.15 5.56 1.01 13.19-1.3 43.19-4.05 60.94-4.78 2.41-.1 5.3.53 6.5 1.03" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(43.5 10.93)">{"1"}</text>
      <text transform="translate(20.75 28.13)">{"2"}</text>
      <text transform="translate(31.25 25.63)">{"3"}</text>
      <text transform="translate(33.5 39.13)">{"4"}</text>
      <text transform="translate(50.5 37.93)">{"5"}</text>
      <text transform="translate(25 71.5)">{"6"}</text>
      <text transform="translate(45.5 78.5)">{"7"}</text>
      <text transform="translate(11.25 93.5)">{"8"}</text>
    </g>
  </svg>
);

export default Kanji空;
