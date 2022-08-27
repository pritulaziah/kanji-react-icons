import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji柱: KanjiIconType = (props) => (
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
      <path d="M15.28 40.72c.35.24 2.39.41 3.31.31 3.94-.41 16.12-2.21 22.45-3.41.92-.17 2.15-.24 2.73 0" />
      <path d="M29.86 15c.91.47 2.64 3 2.54 4.92-.05.95-.3 69.73-.3 70.58 0 12-4.6 2.75-6.35 1" />
      <path d="M31.94 41.28c-6.06 14.39-9.44 20.47-18.83 33.06" />
      <path d="M34.47 47.9c2.37 1.59 8.28 7.76 10.28 10.85" />
      <path d="M64.02 14.33c3.6 1.94 8.89 7.37 9.79 10.38" />
      <path d="M50 39.11c.95.48 4.04.16 5 .03 10.5-1.39 22.25-3.44 33-3.93 1.46-.07 2.79.1 4 .5" />
      <path d="M69 38.33c1 1.15 2 3.33 2 4.25 0 6.41.5 38.25.25 44.67" />
      <path d="M52.75 63.07c.94.52 4.04.34 5 .23 11.5-1.3 14.08-1.82 27-2.68 1.17-.08 3.75-.21 5.5.25" />
      <path d="M43.75 90.51c.92.29 5.7.15 7.25 0 13.5-1.26 31-2.51 42.75-2.8 2.5-.06 5.5.49 6.75.94" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(7.5 41.5)">{"1"}</text>
      <text transform="translate(20.5 15.5)">{"2"}</text>
      <text transform="translate(21.5 50.5)">{"3"}</text>
      <text transform="translate(38.5 49.5)">{"4"}</text>
      <text transform="translate(59.25 10.63)">{"5"}</text>
      <text transform="translate(48.5 35.5)">{"6"}</text>
      <text transform="translate(63.75 49.63)">{"7"}</text>
      <text transform="translate(51.25 60.13)">{"8"}</text>
      <text transform="translate(43.75 86.5)">{"9"}</text>
    </g>
  </svg>
);

export default Kanji柱;
