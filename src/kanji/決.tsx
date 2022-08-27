import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji決: KanjiIconType = (props) => (
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
      <path d="M17.5 21.62c3.62 1.63 9.34 6.69 10.25 9.22" />
      <path d="M12.5 43.5C16.03 45 20.88 49 22.75 52" />
      <path d="M11.25 90.71c1.75.29 3.31-.64 4.25-2.26 2.75-4.7 5-9.95 7.5-15.95" />
      <path d="M38.3 36.57c2.2.56 5.59.95 8.42.46 9.4-1.65 20.15-3.28 29.78-4.61 3.12-.43 4.74 2.21 3.99 4.58-1.37 4.35-3 10.25-4.75 16" />
      <path d="M30.88 57.53c3.62.85 7.01.54 10.41.15 12.59-1.43 28.79-3.34 42.33-4.07 4.25-.23 7.63.02 10.66.71" />
      <path d="M57.41 13c1.11 1.11 1.62 2.33 1.7 4.42C61.25 72.5 48.5 83.88 32 94.75" />
      <path d="M60.06 56.96c6.58 7.59 18.34 22.12 26.47 29.77 2.19 2.06 5.1 4.4 8.23 5.87" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(9.5 22.5)">{"1"}</text>
      <text transform="translate(4.5 44.5)">{"2"}</text>
      <text transform="translate(3.75 94.5)">{"3"}</text>
      <text transform="translate(38.25 34.5)">{"4"}</text>
      <text transform="translate(30.5 54.5)">{"5"}</text>
      <text transform="translate(48.5 13.5)">{"6"}</text>
      <text transform="translate(70.5 64.5)">{"7"}</text>
    </g>
  </svg>
);

export default Kanji決;
