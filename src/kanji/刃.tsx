import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji刃: KanjiIconType = (props) => (
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
      <path d="M25.59 22.74c2.96 1.18 6.22.95 9.29.68 15.63-1.37 35.05-3.38 42.6-4.17 5.57-.58 7.62 2.19 7.06 7.39-1.46 13.76-6.81 46.15-14.55 58.96-5.08 8.41-6.93 5.92-10.83.51" />
      <path d="M54.11 25.06c.26 1.44.32 2.67-.22 4.65C48.12 50.75 37 72.62 15.25 88.22" />
      <path d="M32.27 45.58c7.6 3.38 19.64 13.88 21.54 19.13" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(18.75 22.5)">{"1"}</text>
      <text transform="translate(44.5 33.5)">{"2"}</text>
      <text transform="translate(24.75 44.5)">{"3"}</text>
    </g>
  </svg>
);

export default Kanji刃;
