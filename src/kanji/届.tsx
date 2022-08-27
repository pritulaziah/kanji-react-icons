import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji届: KanjiIconType = (props) => (
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
      <path d="M25.5 17.24c1.74.65 3.12 1.24 4.97 1.1 9.98-.73 47.17-4.54 51.18-4.8 1.98-.13 3.27 1.66 2.85 3.57-.75 3.39-2 11.14-3.61 16.24" />
      <path d="M30 38.5c5.75-.25 45-4 54.25-4.5" />
      <path d="M29.75 20c0 29.64-5.75 51-18.5 65.25" />
      <path d="M35.42 58.76c.38.7.39 1.16.59 2.01 1.69 7.04 2.92 23.06 3.92 36.02" />
      <path d="M37.21 60.33c14.79-1.58 37.45-3.96 47.48-4.64 3.68-.25 5.56 1.78 5.36 3.67-.74 6.91-3.13 25.23-5.76 34.19" />
      <path d="M59.24 42.07c1.26 1.18 2 2.88 2.01 4.43.04 15.3.23 42.45.23 46.44" />
      <path d="M39.32 75.55c10.9-.85 21.81-1.54 32.72-2.25 1.31-.09 2.59-.17 3.81-.25" />
      <path d="M40.64 94.19c11.07-.5 30.42-2.35 43.77-2.53" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(30.75 15.13)">{"1"}</text>
      <text transform="translate(35.25 34.55)">{"2"}</text>
      <text transform="translate(21.75 27.13)">{"3"}</text>
      <text transform="translate(29.25 67.5)">{"4"}</text>
      <text transform="translate(38.5 56.5)">{"5"}</text>
      <text transform="translate(51.5 46.5)">{"6"}</text>
      <text transform="translate(44.25 72.13)">{"7"}</text>
      <text transform="translate(44.25 90.05)">{"8"}</text>
    </g>
  </svg>
);

export default Kanji届;
