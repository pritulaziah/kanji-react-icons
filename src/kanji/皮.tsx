import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji皮: KanjiIconType = (props) => (
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
      <path d="M22.41 32.87c1.3 1.3 1.71 2.72 1.7 5.07C24 64.5 22 80.88 11.87 92.63" />
      <path d="M25.14 35.26C45.12 32 66.62 29.62 75.7 29.09c12.11-.72 5.93 5.29.8 10.28" />
      <path d="M51.87 13.75c1.06 1.06 1.46 2.5 1.46 3.75 0 1.02-.08 23-.08 33.25" />
      <path d="M36 53.94c2.02.49 4.11.19 6.13-.17 5.68-1 21.7-4.05 23.58-4.54 3.29-.86 4.96.72 3.12 4.31C59.12 72.5 43.38 85.99 25 95.17" />
      <path d="M36.23 62.9c4.67.76 26.56 20.08 43.46 29.57 3.08 1.73 6.32 3.56 9.84 4.21" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(17.5 41.5)">{"1"}</text>
      <text transform="translate(25.5 31.63)">{"2"}</text>
      <text transform="translate(41.5 14.5)">{"3"}</text>
      <text transform="translate(36.5 51.13)">{"4"}</text>
      <text transform="translate(30.5 64.63)">{"5"}</text>
    </g>
  </svg>
);

export default Kanji皮;
