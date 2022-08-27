import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Hiraganaう: KanjiIconType = (props) => (
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
      <path d="M42 15.5c5.62 2.12 9.62 3 12.88 3 8.27 0 8 1.12-.38 5.5" />
      <path d="M33 42.38c2.12 1.12 4.12 2.88 8.5 1.38s12.75-7.12 18.5-7c5.75.12 10.25 5 10.25 18C70.25 70.25 62 85 45.88 96" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(33.5 14.13)">{"1"}</text>
      <text transform="translate(28.75 39.63)">{"2"}</text>
    </g>
  </svg>
);

export default Hiraganaう;
