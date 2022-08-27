import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji匠: KanjiIconType = (props) => (
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
      <path d="M21.38 20.98c3.62.77 7.34.7 10.75.52 14.34-.78 33.9-1.95 48.74-2.67 3.23-.16 6.58-.19 9.75.49" />
      <path d="M69.35 27c-.35.88-1.02 1.63-1.69 2.18-5 4.15-12.26 7.37-22.06 11.03" />
      <path d="M42.32 38.23c.85.85 1.01 2.82 1.04 4.26.39 21.01-1.86 31.01-10.14 38.82" />
      <path d="M45.72 50.07c1.02 0 2.61-.11 4.56-.3 8.14-.78 22.48-2.47 29.48-3.04 1.87-.15 3.98-.49 5.83-.15" />
      <path d="M65.07 51.33c.86.86 1.14 2.3 1.14 3.68 0 .54-.04 12.85-.05 22.12v4.88" />
      <path d="M23.75 21.75c.81.81 1.15 2.25 1.15 3.51 0 13.31-1.37 54.01-1.62 63.62-.07 2.85.33 4.92 3.71 4.38 11.81-1.89 39.12-4.5 57.62-4.13 3.4.07 6.58.56 9.88 1.38" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(25.5 18.5)">{"1"}</text>
      <text transform="translate(58.5 29.5)">{"2"}</text>
      <text transform="translate(35.25 44.5)">{"3"}</text>
      <text transform="translate(49.5 46.63)">{"4"}</text>
      <text transform="translate(58.5 58.5)">{"5"}</text>
      <text transform="translate(16.5 29.5)">{"6"}</text>
    </g>
  </svg>
);

export default Kanji匠;
