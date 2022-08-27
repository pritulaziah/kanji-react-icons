import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji吐: KanjiIconType = (props) => (
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
      <path d="M13 38.81c.75 1.04 1 1.77 1.25 3.06.87 4.5 1.67 12.81 2.46 20.13.27 2.48.51 4.87.71 7" />
      <path d="M14.84 40.02c9.08-1.74 15.14-2.67 19.45-3.25 3.34-.45 4.62.41 4.09 3.87-.84 5.58-1.5 13.48-2.28 19.65" />
      <path d="M17.85 63.27c4-.59 9.76-1.21 15.45-2 1.66-.23 3.83-.49 5.16-.49" />
      <path d="M46.85 48.92c2.15.46 3.78.58 5.4.4 9.42-1.01 20.76-2.85 29.62-3.48 1.99-.14 4.02-.39 5.96.2" />
      <path d="M64.67 17.62c.86.85 1.27 2.27 1.27 4.14 0 12-.07 47.13-.07 62.75" />
      <path d="M36.88 87.23c2.87.77 6.09.67 8.62.38 14.07-1.6 31.24-2.86 43.27-3.52 3.39-.19 6.33-.43 9.61.48" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(8.25 47.5)">{"1"}</text>
      <text transform="translate(17.25 36.13)">{"2"}</text>
      <text transform="translate(20.5 59.5)">{"3"}</text>
      <text transform="translate(44.5 46.5)">{"4"}</text>
      <text transform="translate(53.5 18.5)">{"5"}</text>
      <text transform="translate(34.5 84.5)">{"6"}</text>
    </g>
  </svg>
);

export default Kanji吐;
