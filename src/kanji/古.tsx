import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji古: KanjiIconType = (props) => (
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
      <path d="M11.25 43.25c2.75.62 5.54.83 9.53.5 23.85-2 49.47-4.12 67.35-4.75 4.02-.14 6.87 0 9.12.5" />
      <path d="M52.41 12.5c1.42 1.42 2.13 3.25 2.13 5.06 0 17.05-.14 39.31-.14 48.94" />
      <path d="M31 67.77c1.12 1.12 2 2.73 2.24 4.48.61 4.43 1.87 12.12 3.22 20.93.2 1.31.39 2.59.57 3.83" />
      <path d="M33.77 69.3c11.97-1.17 36.4-3.39 42.99-3.81 3.74-.24 5.11 1.39 4.26 4.71-1.18 4.63-3.81 13.6-5.23 20.06" />
      <path d="M37.88 94.42c7.81-.36 23.99-1.88 35.14-2.65 1.87-.13 3.61-.24 5.18-.32" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(3.75 40.63)">{"1"}</text>
      <text transform="translate(47.25 7.63)">{"2"}</text>
      <text transform="translate(23.25 75.13)">{"3"}</text>
      <text transform="translate(36.75 64.63)">{"4"}</text>
      <text transform="translate(42.75 90.13)">{"5"}</text>
    </g>
  </svg>
);

export default Kanji古;
