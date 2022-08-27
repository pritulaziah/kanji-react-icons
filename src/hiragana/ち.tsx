import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Hiraganaち: KanjiIconType = (props) => (
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
      <path d="M24.5 32.62c1.38.62 3.88 1.51 6.38 1.12 6.5-1 18.25-4.12 26.88-6 2.64-.57 5.38-1.5 7.62-2.38" />
      <path d="M45.62 15.62c.75 1.25.71 3.58.38 5.25-3 15-4.25 22.59-8.38 38.62-3.25 12.62-5.38 11.12 3.62 4.38 8.29-6.21 19.75-9.5 28.5-9.5 8.62 0 14.58 5.88 14.5 14.5-.12 13.5-16.5 20.62-29.88 23.25" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(20 28.88)">{"1"}</text>
      <text transform="translate(36.75 15.5)">{"2"}</text>
    </g>
  </svg>
);

export default Hiraganaち;
