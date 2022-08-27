import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji卓: KanjiIconType = (props) => (
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
      <path d="M51.81 10.88c.76.33 2.36 2.46 2.51 3.12.15.66.4 16.03.25 20.13" />
      <path d="M55.25 24.5c2 0 11.67-1.86 17.5-2.77 2.09-.33 3.01-.15 4.25-.23" />
      <path d="M33.66 35.53c.73 1.22 1.72 1.61 1.95 3.25.64 4.47 2.89 19.97 2.92 23.72" />
      <path d="M36.55 37.03c4.17-.2 35.93-4.55 39.7-4.04 1.49.2 2.93 1.8 2.35 3.86-1.08 3.85-2.25 15.72-4.2 22.61" />
      <path d="M37.39 48.2c6.62-.42 13.22-1.06 19.83-1.59 2.02-.16 4.04-.32 5.98-.47" />
      <path d="M39.26 60.27c10.24-.77 29.51-2.44 34.72-2.44" />
      <path d="M16.13 76.41c1.47.48 4.18.61 5.64.48 12.73-1.13 55.98-4.63 67.96-4.59 2.45.01 3.92.23 5.15.47" />
      <path d="M54.73 60.25c.44.55 1.38 4.13 1.47 5.24.09 1.1-.06 27.12-.15 34.01" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(45 11.5)">{"1"}</text>
      <text transform="translate(59 21.5)">{"2"}</text>
      <text transform="translate(27.75 43.63)">{"3"}</text>
      <text transform="translate(36.75 33.13)">{"4"}</text>
      <text transform="translate(41.25 45.05)">{"5"}</text>
      <text transform="translate(41.25 56.98)">{"6"}</text>
      <text transform="translate(9.5 76.63)">{"7"}</text>
      <text transform="translate(47.5 69.13)">{"8"}</text>
    </g>
  </svg>
);

export default Kanji卓;
