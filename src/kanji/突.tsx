import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji突: KanjiIconType = (props) => (
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
      <path d="M50.09 12.25c2.04.68 4.86 4.01 5.4 5.89" />
      <path d="M20.62 23.77c0 4.42-2.2 16.59-3.2 19.54" />
      <path d="M20.82 27.36C32.75 26 75.73 22.4 82.61 22.03c14.39-.78 3.21 7.18 1.49 7.98" />
      <path d="M38.76 35.51c.09.52.19 1.36-.18 2.08C35.25 44 31 49.25 22.25 55.75" />
      <path d="M59.01 31.48c.94.76 1.68 1.66 1.74 2.84.25 5.25 0 3.18 0 6.68 0 4.75 1.75 6.5 11.25 6.5 7.25 0 11.25-.25 12.5-1.75" />
      <path d="M24.98 67.43c1.01.54 3.71 1.17 5.85.93 14.51-1.61 33.55-4.32 46.58-5.09 2.24-.13 4.04-.07 6.06.35" />
      <path d="M51.22 49.53c.51.68.77 1.46.76 2.93C51.73 77.82 39.46 91.21 19.25 99" />
      <path d="M50.54 65.83c8.08 6.84 26.94 24.27 35.01 28.85 2.75 1.56 3.7 1.79 4.95 1.94" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(44.25 12.5)">{"1"}</text>
      <text transform="translate(13.5 27.5)">{"2"}</text>
      <text transform="translate(23.5 23.5)">{"3"}</text>
      <text transform="translate(30.5 36.13)">{"4"}</text>
      <text transform="translate(51.75 33.5)">{"5"}</text>
      <text transform="translate(17.5 69.5)">{"6"}</text>
      <text transform="translate(42.5 50.5)">{"7"}</text>
      <text transform="translate(63.5 74.5)">{"8"}</text>
    </g>
  </svg>
);

export default Kanji突;
