import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji上: KanjiIconType = (props) => (
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
      <path d="M52.31 15.88c1.15 1.15 2.01 3.12 2.01 5.12 0 .82-.22 63.62-.25 64.63" />
      <path d="M58 44.75c7-.62 14.25-2.5 17.75-3 1.38-.2 3.5-.38 4.75 0" />
      <path d="M13.38 88.28c3.6 1.15 7.45.62 11.13.34 16.23-1.23 41.16-2.66 60.24-2.92 3.65-.05 7.47-.32 11 .82" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(43.5 16.28)">{"1"}</text>
      <text transform="translate(60.25 41.5)">{"2"}</text>
      <text transform="translate(5.5 88.5)">{"3"}</text>
    </g>
  </svg>
);

export default Kanji上;
