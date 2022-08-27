import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji柄: KanjiIconType = (props) => (
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
      <path d="M13.28 37.72c.35.24 2.39.41 3.31.31 3.94-.41 18.12-2.21 24.45-3.41.92-.17 2.15-.24 2.73 0" />
      <path d="M29.36 14.5c.91.47 2.86 3.49 3.04 4.42.18.93-.3 70.73-.3 71.58 0 11-5.47 2.12-6.35 1.25" />
      <path d="M31.94 37.28c-5.98 14.28-9.31 20.31-18.58 32.81" />
      <path d="M34.47 44.9c2.37 1.59 6.28 7.76 8.28 10.85" />
      <path d="M52.15 28.5c.9.48 2.53.56 3.45.48 5.4-.48 24.52-4.23 33.07-4.21 1.5 0 2.4.23 3.15.47" />
      <path d="M49.19 50.11c.47.76 1.38 3.35 1.45 4.73.41 8.48 1.41 30.32 1.73 38.98" />
      <path d="M50.87 52.51c5.9-.61 38.75-5.85 39.88-5.96 2.64-.26 4 1.69 4.07 4.61.21 8.92-.51 30.54-1.8 37.48-1.35 7.25-2.77 4.36-6.08 1.03" />
      <path d="M70.07 29.19c.47.65 1.04 1.66 1.03 3.45C71 52 68.75 66.25 55.13 77.19" />
      <path d="M71.19 58.14c5.41 2.68 13.97 11.03 15.32 15.21" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(6.75 38.5)">{"1"}</text>
      <text transform="translate(21.5 15.13)">{"2"}</text>
      <text transform="translate(20.5 48.5)">{"3"}</text>
      <text transform="translate(37.5 46.63)">{"4"}</text>
      <text transform="translate(49.5 25.5)">{"5"}</text>
      <text transform="translate(44.25 66.13)">{"6"}</text>
      <text transform="translate(52.5 48.13)">{"7"}</text>
      <text transform="translate(63.5 37.5)">{"8"}</text>
      <text transform="translate(77.25 58.5)">{"9"}</text>
    </g>
  </svg>
);

export default Kanji柄;
