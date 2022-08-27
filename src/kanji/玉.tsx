import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji玉: KanjiIconType = (props) => (
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
      <path d="M28.5 23.34c.95.51 4.04.66 5 .52C45.75 22 57 20 75.5 18.21c1.46-.14 2.79.1 4 .52" />
      <path d="M28.75 56.12c.94.55 4.04.86 5 .73 9.5-1.34 29.25-4.59 39-5.38 1.17-.1 3.75-.22 5.5.26" />
      <path d="M16 90.51c.91.31 4.41.41 5.94.25 14.31-1.5 50.81-4.75 67.87-4.85 2.48-.01 5.45.51 6.69 1" />
      <path d="M52 24.6c1 1.21 2 2.4 2 4.41 0 6.79.5 50.15.25 56.94" />
      <path d="M72 64c5.43 2.74 10.09 8.57 11.25 12" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(21.5 24.43)">{"1"}</text>
      <text transform="translate(20.5 57.13)">{"2"}</text>
      <text transform="translate(7.5 90.43)">{"3"}</text>
      <text transform="translate(45.5 34.63)">{"4"}</text>
      <text transform="translate(64.5 64.5)">{"5"}</text>
    </g>
  </svg>
);

export default Kanji玉;
