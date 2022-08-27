import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Hiraganaご: KanjiIconType = (props) => (
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
      <path d="M34.75 27c1.12.88 2.91 2.01 6 1.5 7.62-1.25 14.11-2.56 22.38-2.62 15.5-.12 5.88 5-5.75 9" />
      <path d="M30 68.38c2.25 14.5 15.26 17.96 31 16.75 6.5-.5 11.88-1.25 17.62-2.88" />
      <path d="M80.37 16.25c2.75 1.75 6 5.38 7.75 8.5" />
      <path d="M86.75 11.38c3.06 1.57 6.68 4.82 8.62 7.62" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(28 26.13)">{"1"}</text>
      <text transform="translate(23.75 68.38)">{"2"}</text>
      <text transform="translate(72.75 15.25)">{"3"}</text>
      <text transform="translate(78.88 10.13)">{"4"}</text>
    </g>
  </svg>
);

export default Hiraganaご;
