import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Katakanaシ: KanjiIconType = (props) => (
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
      <path d="M39.87 19.75c5.14 1.57 9.79 6.01 11.5 8.62" />
      <path d="M26 42.62c3.25.88 10.25 5.5 12.25 8.13" />
      <path d="M33 85c3.75.88 7.12.49 10.38-1.38C61.25 73.38 75.75 59.75 89.5 40.75" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(34 19.13)">{"1"}</text>
      <text transform="translate(23.38 38.63)">{"2"}</text>
      <text transform="translate(27.38 78.63)">{"3"}</text>
    </g>
  </svg>
);

export default Katakanaシ;
