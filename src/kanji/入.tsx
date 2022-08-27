import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji入: KanjiIconType = (props) => (
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
      <path d="M54.75 48.75c-.5 2-1.1 3.2-2.07 4.62C44.22 65.8 27.98 81.44 14.5 88" />
      <path d="M36.5 20c8.25 1.38 15.12 34 48.81 62.08 2.71 2.26 5.56 4.8 9.44 6.42" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(45 51)">{"1"}</text>
      <text transform="translate(28.5 21)">{"2"}</text>
    </g>
  </svg>
);

export default Kanji入;
