import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Katakanaラ: KanjiIconType = (props) => (
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
      <path d="M38.63 21.06c2.07 1.86 4.43 2.53 8.05 2.15 9.2-.96 14.34-2.01 21.57-2.95 2.41-.31 4.13-.53 6.51-.19" />
      <path d="M26 41.89c2.38 1.7 5.12 2.24 9.25 1.7 14-1.84 31.21-4.95 40.88-6.32 6-.85 8.14.62 6.25 5.72-6.88 18.62-22 38.25-45.25 48.62" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(33.13 19)">{"1"}</text>
      <text transform="translate(22.75 37.38)">{"2"}</text>
    </g>
  </svg>
);

export default Katakanaラ;
