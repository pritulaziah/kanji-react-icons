import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Hiraganaた: KanjiIconType = (props) => (
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
      <path d="M24.38 35.38c1.38.62 3.88 1.51 6.38 1.12 6.5-1 16.25-2.88 24.88-4.75 2.64-.57 5.38-1.5 7.62-2.38" />
      <path d="M45 16.88c.75 1.25.87 3.62.38 5.25C39.03 43.07 32.63 58.5 26.5 74.5c-1.36 3.56-4.75 11.75-6 14.62" />
      <path d="M56.38 53.25c12.38-2.75 18.25-3.7 23.62-3.12 15.12 1.62-1.12 2.25-4.25 4.88" />
      <path d="M54.13 82.25c4.38 7 14.25 8.12 34.5 5.62" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(16.88 34.88)">{"1"}</text>
      <text transform="translate(35.13 16.25)">{"2"}</text>
      <text transform="translate(52.26 50.63)">{"3"}</text>
      <text transform="translate(46.76 80)">{"4"}</text>
    </g>
  </svg>
);

export default Hiraganaた;
