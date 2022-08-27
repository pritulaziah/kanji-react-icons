import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji同: KanjiIconType = (props) => (
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
      <path d="M21.67 16.73c1.08 1.27 1.69 3.02 1.69 5.32 0 4.15-.19 49.87-.25 67.2-.01 3.37-.02 5.63-.02 6.25" />
      <path d="M24.04 19.17c15.63-1.45 57.69-4.83 59.24-5 3.88-.42 5.19 1.58 5.19 4.37 0 2.54-.26 65.26-.26 71.1 0 12.6-5.08 4.85-7.96 2.05" />
      <path d="M37.38 33.92c1.35.38 3.82.54 5.16.38 6.96-.8 18.96-2.05 25.62-2.63 2.23-.2 3.59.18 4.71.37" />
      <path d="M38.83 48.39c.82.55 1.53 1.56 1.76 2.49 1.15 4.62 2.13 10.46 3.01 16.32.27 1.8.52 2.78.76 4.3" />
      <path d="M41.44 49.72c9.31-1.22 20.85-2.46 26.25-3.06 2.2-.24 3.53 1.44 3.21 2.87-1.09 4.92-2.33 9.95-3.83 16.33" />
      <path d="M45.09 69.33c5.52-.48 12.6-1.51 20.15-2.26 1.19-.12 2.51-.07 3.84-.1" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(15.5 26.5)">{"1"}</text>
      <text transform="translate(27.5 15.5)">{"2"}</text>
      <text transform="translate(29.5 35.5)">{"3"}</text>
      <text transform="translate(32.5 55.63)">{"4"}</text>
      <text transform="translate(42.5 46.5)">{"5"}</text>
      <text transform="translate(48.75 66.13)">{"6"}</text>
    </g>
  </svg>
);

export default Kanji同;
