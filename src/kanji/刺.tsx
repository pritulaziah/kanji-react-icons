import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji刺: KanjiIconType = (props) => (
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
      <path d="M17.45 26.05c1.05.55 2.23.72 3.43.55 6.23-.9 21.41-2.56 30.99-3.62 1.19-.13 2.23.09 2.85.48" />
      <path d="M18.38 39.12c.36.77.67 2.01.8 3.4.17 1.82 2.12 15.17 2.12 17.48" />
      <path d="M19.17 41.06c5.01-.29 33.3-3.67 34.19-3.88 1.9-.46 2.57-.05 2.44 2.25-.17 2.93-1.15 10.67-2.29 13.94-1.91 5.45-2.02 2.94-3.44.93" />
      <path d="M35.57 11.25c.84.5 1.34 2.25 1.51 3.25.17 1-.17 74.74-.17 76 0 13-5.66 3.5-7.16 2" />
      <path d="M36.91 53.25C32.5 63.67 20.68 79.6 11.5 85.5" />
      <path d="M37.75 61.5c8 3 14 7.75 18.5 14.5" />
      <path d="M67.27 24.33c.98.92 1.67 1.99 1.76 5.02C69.42 43.91 69 57.04 69 62" />
      <path d="M87.27 11.83c.98.92 1.67 1.99 1.76 5.02.4 14.55-.26 68.16-.26 73.12 0 13.14-7.21 1.5-8.71.25" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(11.25 25.63)">{"1"}</text>
      <text transform="translate(11.25 45.5)">{"2"}</text>
      <text transform="translate(21.5 37.63)">{"3"}</text>
      <text transform="translate(25.5 10.63)">{"4"}</text>
      <text transform="translate(27.5 59.5)">{"5"}</text>
      <text transform="translate(41.5 60.5)">{"6"}</text>
      <text transform="translate(60.5 24.5)">{"7"}</text>
      <text transform="translate(77.5 12.5)">{"8"}</text>
    </g>
  </svg>
);

export default Kanji刺;
