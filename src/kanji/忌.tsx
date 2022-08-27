import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji忌: KanjiIconType = (props) => (
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
      <path d="M29.84 19.1c2.16.65 4.04.84 6.64.56 5.28-.57 27.92-4.58 29.53-4.69 2.13-.14 3.55 1.42 2.79 3.61-.23.65-1.66 5.12-3.15 11.37" />
      <path d="M31.27 34.51c.86.24 1.97.31 3.74.13 5.9-.62 18.9-1.96 26.76-3.01 2.37-.31 3.98-.38 5.54-.33" />
      <path d="M32.31 35.15c.71.71.78 1.72.78 3.07 0 1.9-.05 5.03-.05 6.51 0 11.01 2.09 12.28 21.55 12.28 20.3 0 21.64-1.64 21.64-7.71" />
      <path d="M23.25 76.5c.36 2.21-3.61 11.98-6.5 15.67" />
      <path d="M31.7 68.48C40.5 88 55.52 96.67 79 95.25c8.25-.5 8.36-4.38 1.75-8" />
      <path d="M55 70.5c1.44 2.72 5.67 9.85 6.14 2.77" />
      <path d="M79.25 65.75c5.76 2.74 11.12 8.7 14.75 13.7" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(23.5 18.5)">{"1"}</text>
      <text transform="translate(36.75 31.55)">{"2"}</text>
      <text transform="translate(26.25 41.98)">{"3"}</text>
      <text transform="translate(17.25 71.9)">{"4"}</text>
      <text transform="translate(26.5 66.13)">{"5"}</text>
      <text transform="translate(47.5 70.63)">{"6"}</text>
      <text transform="translate(72.75 67.5)">{"7"}</text>
    </g>
  </svg>
);

export default Kanji忌;
