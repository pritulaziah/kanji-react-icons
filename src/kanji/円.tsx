import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji円: KanjiIconType = (props) => (
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
      <path d="M21.75 19.8c.91.91 1.47 3.23 1.5 5.45.2 13.9.03 47.69.03 62.5 0 2-.03 4.99-.03 6" />
      <path d="M24.06 21.56c15.07-1.68 49.46-5.58 57.92-6.31 2.9-.25 4.78 1.88 4.78 4.27V87c0 9.75-4.25 6.5-8.5 1.5" />
      <path d="M52.25 20.75c.88.88 1.5 2 1.5 3.71V55.5" />
      <path d="M24.75 59.75c14.62-1.75 43-4.25 60.5-5.25" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(16.5 28.63)">{"1"}</text>
      <text transform="translate(24.75 17.5)">{"2"}</text>
      <text transform="translate(45.5 29.5)">{"3"}</text>
      <text transform="translate(28.5 56.5)">{"4"}</text>
    </g>
  </svg>
);

export default Kanji円;
