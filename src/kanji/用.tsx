import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji用: KanjiIconType = (props) => (
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
      <path d="M24.94 16.89c.83 1.04 1.37 2.08 1.65 3.11.27 1.04.27 27.41.27 29.75 0 19.5-5.7 37.72-13.12 45.25" />
      <path d="M28.24 18.93c9.26-.43 51.48-4.67 53.93-4.96 4.4-.52 6.05 3.37 5.5 4.93-.53 1.5-.82 50.1-.82 71.12 0 14.98-8.09 2.23-9.84 1.34" />
      <path d="M28.24 40.91c12.74-.94 25.46-2.05 38.19-3.11 1.38-.12 2.74-.23 4.06-.34" />
      <path d="M28.5 62c12.47-1.11 25-1.77 37.5-2.54 1.47-.09 2.91-.18 4.32-.27" />
      <path d="M53.37 19.25c1.09.5 1.74 2.25 1.96 3.25.22 1 0 63.75-.22 70" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(20.5 27.13)">{"1"}</text>
      <text transform="translate(31.5 15.5)">{"2"}</text>
      <text transform="translate(32.25 37.5)">{"3"}</text>
      <text transform="translate(32.25 58.5)">{"4"}</text>
      <text transform="translate(47 27.5)">{"5"}</text>
    </g>
  </svg>
);

export default Kanji用;
