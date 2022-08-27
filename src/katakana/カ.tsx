import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Katakanaカ: KanjiIconType = (props) => (
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
      <path d="M25.5 40.62c1.88 1.25 4.51 1.87 7.12 1.5 17.88-2.5 32.78-4.51 42.5-5.88 7.12-1 10.59.24 8.62 7.88-2.12 8.25-4.47 17.81-9.25 29.12C64 98.12 60.38 87.75 55.25 85.12" />
      <path d="M55.88 17.12c.88 1.62 1.29 3.83.75 6.75-4.25 22.88-15.88 45.25-30.25 58.88" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(18.13 41.13)">{"1"}</text>
      <text transform="translate(46.25 17.25)">{"2"}</text>
    </g>
  </svg>
);

export default Katakanaカ;
