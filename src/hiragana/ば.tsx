import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Hiraganaば: KanjiIconType = (props) => (
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
      <path d="M24.75 17.75c1.25 1.5 1.9 4.25 1.38 6.88-3.5 17.62-6.98 36.4-4 54.88 2.5 15.5 1.12 2 5.62-6.25" />
      <path d="M49.88 37.89c2.41 1.57 4.85 2.41 7.8 1.96 9.36-1.43 17.21-3.19 23.15-4.82 3.12-.86 5.96-1.29 7.8-1.29" />
      <path d="M69.75 16.5c2.26 2.12 2.88 4.12 2.88 6.5s1.5 38.62 1.5 48c0 22.5-30.62 19.62-30.62 10.5 0-9.75 23.88-5.62 29.5-2.88 5.62 2.74 12 8.25 13.38 9.38" />
      <path d="M84.75 15.25c2.75 1.75 6 5.38 7.75 8.5" />
      <path d="M91.13 10.38c3.06 1.57 6.68 4.82 8.62 7.62" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(16.88 17.63)">{"1"}</text>
      <text transform="translate(43.01 36.38)">{"2"}</text>
      <text transform="translate(59.88 16)">{"3"}</text>
      <text transform="translate(77.13 14.25)">{"4"}</text>
      <text transform="translate(83.26 9.13)">{"5"}</text>
    </g>
  </svg>
);

export default Hiraganaば;
