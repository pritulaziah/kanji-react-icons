import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji茂: KanjiIconType = (props) => (
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
      <path d="M18.5 27.02c2.4.97 5.72.96 8.24.66 13.13-1.56 35.49-4.17 49.64-4.96 3.42-.19 7.03-.02 10.37.8" />
      <path d="M33.75 16c.94.94 1.31 2.12 1.5 3 1.75 8.25 3 15 3.5 18" />
      <path d="M70.5 11.5c.42 1.18.35 2.27 0 3.75C69 21.5 68 27.75 66.5 35" />
      <path d="M24.98 51.08c.97.97 1.21 2.36 1.18 3.83-.32 13.63-2.03 29.22-12.1 40.45" />
      <path d="M25.75 51.53c2.33.22 4.7-.13 7-.45 12.98-1.81 25.13-3.71 39.13-4.91 3.27-.28 6.03-.07 9.39.51" />
      <path d="M52.92 34.75c1.79 1.37 2.36 3.24 2.65 6.19 2.29 23.05 13.19 45.43 34.21 54.55 6.95 3.01 5.68 1.09 4.79-4.97" />
      <path d="M76.98 56.3c.11.83-.15 1.95-.72 3.09C72.5 67 61.75 82.12 40.39 92.49" />
      <path d="M81.61 33.82c3.26 2.11 8.46 6.94 9.98 10.56" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(11.5 27.13)">{"1"}</text>
      <text transform="translate(23.5 16.63)">{"2"}</text>
      <text transform="translate(60.5 12.13)">{"3"}</text>
      <text transform="translate(15.75 61.63)">{"4"}</text>
      <text transform="translate(24.75 48.13)">{"5"}</text>
      <text transform="translate(45.75 41.5)">{"6"}</text>
      <text transform="translate(68.5 58.5)">{"7"}</text>
      <text transform="translate(74.5 35.5)">{"8"}</text>
    </g>
  </svg>
);

export default Kanji茂;
