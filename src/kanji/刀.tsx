import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji刀: KanjiIconType = (props) => (
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
      <path d="M23.34 27.56c2.19.76 4.95.62 6.87.41 15.78-1.72 41.52-5.94 50.19-6.72 5.64-.51 8.15 2.77 7.83 6.31-.83 9.35-7.98 45.4-15.67 56.15-5.56 7.79-8.81 5.29-13.02.23" />
      <path d="M49.81 29.06c.7 2.01.74 3.8.37 5.63C46.59 52 36.12 73 16.62 86.88" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(16.5 28.5)">{"1"}</text>
      <text transform="translate(41.5 38.5)">{"2"}</text>
    </g>
  </svg>
);

export default Kanji刀;
