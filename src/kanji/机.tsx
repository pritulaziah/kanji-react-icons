import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji机: KanjiIconType = (props) => (
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
      <path d="M14.28 37.72c.35.24 2.39.41 3.31.31 3.94-.41 18.12-2.21 24.45-3.41.92-.17 2.15-.24 2.73 0" />
      <path d="M29.86 14.5c.91.47 2.54 3.47 2.54 4.42 0 7.08-.3 64.83-.3 71.58 0 13-5.22 2.62-6.6 1.25" />
      <path d="M31.94 39.28c-5.66 14.93-8.81 21.24-17.58 34.31" />
      <path d="M35.22 49.9c2.66 1.35 7.03 5.74 9.28 8.35" />
      <path d="M54.25 25.76c.47 1.82 1.13 3.25 1.13 5.52 0 20.76.87 44.22-14.63 61.37" />
      <path d="M56.15 28.19c6.1-1.19 11.89-2.12 16.17-2.85 4.93-.84 5.56 1.19 5.09 4.83C75.5 45 73.95 70.5 73.95 82.25c0 5.5 1.8 7.9 11.33 7.94 13.47.06 10.99-3.85 10.99-9.38" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(5.5 39.5)">{"1"}</text>
      <text transform="translate(21.5 15.5)">{"2"}</text>
      <text transform="translate(21.5 49.5)">{"3"}</text>
      <text transform="translate(37.5 48.5)">{"4"}</text>
      <text transform="translate(47.5 34.5)">{"5"}</text>
      <text transform="translate(57.5 24.5)">{"6"}</text>
    </g>
  </svg>
);

export default Kanji机;
