import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Katakanaマ: KanjiIconType = (props) => (
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
      <path d="M21.5 33.75c1.88 1.88 3.5 1.99 6.5 1.62 19.62-2.38 33.5-4 51.25-6.38 6.85-.92 9.37 1.67 4.38 7.62-7.12 8.5-17.88 20-28.75 31.62" />
      <path d="M43.38 58.88c8.43 6.5 16.6 15.93 20.25 26.25" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(17.88 27.88)">{"1"}</text>
      <text transform="translate(36.12 59.12)">{"2"}</text>
    </g>
  </svg>
);

export default Katakanaマ;
