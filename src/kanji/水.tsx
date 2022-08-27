import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji水: KanjiIconType = (props) => (
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
      <path d="M52.77 15.08c1.08 1.08 1.67 2.49 1.76 5.52.4 14.55-.26 62.16-.26 67.12 0 9.78-7.52.03-9.02-1.22" />
      <path d="M17.5 45.75c1.75.62 3.73.43 5.25 0C25.88 44.88 36.09 41 38.59 40s4.47 1.24 3.75 3.5C39 54 28.25 69 19 74.75" />
      <path d="M81.22 27.5c-.22 1.25-.72 2.25-1.52 2.97-5.64 5.1-12.45 9.78-22.45 13.78" />
      <path d="M57 46c8.82 10.73 19.23 21.46 28.42 27.42 2.16 1.4 4.52 3 7.08 3.58" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(43.75 15.38)">{"1"}</text>
      <text transform="translate(10.25 47.28)">{"2"}</text>
      <text transform="translate(83.75 24.28)">{"3"}</text>
      <text transform="translate(64 51.03)">{"4"}</text>
    </g>
  </svg>
);

export default Kanji水;
