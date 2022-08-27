import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji帆: KanjiIconType = (props) => (
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
      <path d="M13.38 34.71c.89.89 1.19 1.92 1.19 3.45 0 4.84-.04 15.93-.06 25.22 0 2.18-.01 4.25-.01 6.13" />
      <path d="M15.64 36.77c3.63-1.01 18.32-3.97 22.98-4.91 2.38-.48 4.11 1.02 4.11 3.64 0 7.95.18 17.43-.9 25.12-.83 5.88-4.96 1.31-5.91-.72" />
      <path d="M25.87 14.63c1.25 1.25 1.54 2.62 1.54 4.63 0 6.29.01 48.88.02 67.49v8.13" />
      <path d="M52.62 20.89c1.12 1.12 1.55 2.73 1.55 4.89 0 21.22 1.33 46.34-16.42 64.46" />
      <path d="M54.96 22.57c3.79-.7 13.17-3.07 16.6-3.58 2.38-.35 4.2.43 4.2 4.1 0 8.91.34 43.16.34 49.24 0 13.83 1.4 14.98 9.98 14.98 9.58 0 10.45-1.57 10.45-10.64" />
      <path d="M58 45.38c5.03 4.64 7.91 9.56 9.47 13.91" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(8.25 42.5)">{"1"}</text>
      <text transform="translate(17.5 32.5)">{"2"}</text>
      <text transform="translate(17.25 14.5)">{"3"}</text>
      <text transform="translate(45.75 29.5)">{"4"}</text>
      <text transform="translate(56.5 19.5)">{"5"}</text>
      <text transform="translate(58.5 43.5)">{"6"}</text>
    </g>
  </svg>
);

export default Kanji帆;
