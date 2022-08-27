import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji天: KanjiIconType = (props) => (
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
      <path d="M26.63 25.58c1.19.46 3.38.58 4.57.46 12.3-1.28 32.8-4.78 43.51-5.75 1.98-.18 3.18.22 4.17.45" />
      <path d="M20.81 51.5c1 .35 4.14.57 5.23.48 12.66-.98 43.08-4.73 53.97-5.03 1.38-.04 3.89.05 6.43.73" />
      <path d="M50.32 24.75c.68 1 1.3 3.43 1.29 5.37-.26 33.52-12.96 51.21-33.86 61.5" />
      <path d="M50.1 51.39c9.19 9.19 29.1 30.85 38.27 37 3.12 2.09 4.21 2.4 5.63 2.6" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(19.25 24.13)">{"1"}</text>
      <text transform="translate(12.25 51.13)">{"2"}</text>
      <text transform="translate(42.75 36.13)">{"3"}</text>
      <text transform="translate(65.25 61.63)">{"4"}</text>
    </g>
  </svg>
);

export default Kanji天;
