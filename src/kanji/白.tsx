import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji白: KanjiIconType = (props) => (
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
      <path d="M54.25 13.25c.74.98 1.01 2.23.68 3.04-2.43 5.96-9.98 17.14-18.12 23.93" />
      <path d="M25.25 40.97c.94 1.37 1.88 2.06 1.88 3.88 0 1.83.62 43.9 1 52.9" />
      <path d="M27.69 44.2c5.31-.23 48.17-5.31 52.99-5.7 3.06-.25 4.31 1.5 4.31 4.38-.01 4.93-2.74 38.37-3.74 53.46" />
      <path d="M27.63 67.69c9.63-.59 19.24-1.57 28.85-2.4 2.86-.25 5.7-.49 8.42-.71" />
      <path d="M28.69 94.24c13.31-.74 38.56-2.49 52.75-2.83" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(46.5 13.5)">{"1"}</text>
      <text transform="translate(17.5 48.13)">{"2"}</text>
      <text transform="translate(29.5 40.5)">{"3"}</text>
      <text transform="translate(32.5 63)">{"4"}</text>
      <text transform="translate(32.5 91.5)">{"5"}</text>
    </g>
  </svg>
);

export default Kanji白;
