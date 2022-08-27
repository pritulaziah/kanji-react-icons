import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji向: KanjiIconType = (props) => (
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
      <path d="M49.51 18.39c.24.98.04 2.08-.33 2.85C45.62 28.5 43 32.75 34.06 42.97" />
      <path d="M18.75 42.5c1 1 1.66 2.28 1.78 3.64.41 4.91 1.18 24.14 1.58 36.73.06 1.78.1 3.42.14 4.87" />
      <path d="M21.35 45.1c16.03-1.85 61.13-7.17 62.97-7.43 2.93-.42 6.74 1.55 6.66 5.33-.22 9.76-3.67 33.44-6.49 42.28-3.37 10.47-5.87 4.84-8.49.72" />
      <path d="M38.75 55.53c.8.8 1.29 1.9 1.35 2.4.67 5.55 1.13 8.83 1.97 14.58.13.93.28 1.92.43 2.99" />
      <path d="M41.03 57.28c10.34-1.53 17.23-2.44 24.75-3.54 2.47-.36 3.35 1.14 2.97 2.76-1 4.35-2.25 7.5-3.33 13.38" />
      <path d="M43.52 73.26c5.61-.5 12.98-1.38 21.6-2.24 1.16-.12 2.32-.09 3.46-.11" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(40.5 17.5)">{"1"}</text>
      <text transform="translate(12.75 52.5)">{"2"}</text>
      <text transform="translate(23.5 41.5)">{"3"}</text>
      <text transform="translate(33.5 64.63)">{"4"}</text>
      <text transform="translate(42.5 53.5)">{"5"}</text>
      <text transform="translate(46.5 69.13)">{"6"}</text>
    </g>
  </svg>
);

export default Kanji向;
