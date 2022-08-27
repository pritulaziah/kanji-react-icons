import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji旬: KanjiIconType = (props) => (
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
      <path d="M38.5 11.5c.06.9.13 2.33-.13 3.63-1.52 7.66-10.22 24.46-22.13 34.75" />
      <path d="M35.5 30.75c1.25.75 3 1 5 .5s40.75-5.75 45.75-6 6 2.5 5.25 7.75-5 45-16 59.25c-3.3 4.28-5.05 1.88-8-1.25" />
      <path d="M31.27 48.44c.37.78.74 1.18.74 2.22 0 1.04-.12 31.29 0 32.34" />
      <path d="M32.62 50.07c2.09-.13 23.21-3.17 25.12-3.33 1.59-.13 2.61 1.45 2.49 2.22-.25 1.57-.49 31.23-.49 32.01" />
      <path d="M32.99 64.73c4.24 0 8.61-.89 12.8-1.4 1.43-.18 2.86-.35 4.23-.51" />
      <path d="M32.86 80.06c5.76-.56 18.83-1.06 26-1.54" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(30.75 13.63)">{"1"}</text>
      <text transform="translate(44.25 27.13)">{"2"}</text>
      <text transform="translate(24.75 58.63)">{"3"}</text>
      <text transform="translate(35.25 46.63)">{"4"}</text>
      <text transform="translate(36.75 61.55)">{"5"}</text>
      <text transform="translate(36.75 76.48)">{"6"}</text>
    </g>
  </svg>
);

export default Kanji旬;
