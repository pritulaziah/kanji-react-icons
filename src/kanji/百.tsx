import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji百: KanjiIconType = (props) => (
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
      <path d="M16.63 20.73c1.39.54 3.93.69 5.32.54 16.3-1.77 44.8-4.77 64.07-5.23 2.31-.06 3.7.26 4.86.53" />
      <path d="M52.06 21.25c.4.7.47 1.57.37 2.18-.57 3.63-5.46 12.31-9.91 17.18" />
      <path d="M30.25 42.32c.73 1.3 1.26 1.96 1.47 3.69C33 56.5 33.2 86.7 33.5 95.25" />
      <path d="M32.16 45.39c4.14-.22 36.64-5.68 40.42-5.94 3.15-.22 5.17 1.45 4.92 2.74-.49 2.6-1.14 37.44-1.53 51.29" />
      <path d="M33.89 66.7c6.7 0 13.56-.76 20.19-1.54 2.18-.25 4.38-.51 6.48-.75" />
      <path d="M34.72 92.87c8.28 0 28.34-2.64 39.06-2.64" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(8.25 21.5)">{"1"}</text>
      <text transform="translate(42.5 28.63)">{"2"}</text>
      <text transform="translate(23.5 51.5)">{"3"}</text>
      <text transform="translate(33.5 41.5)">{"4"}</text>
      <text transform="translate(37.5 63.1)">{"5"}</text>
      <text transform="translate(37.5 89.5)">{"6"}</text>
    </g>
  </svg>
);

export default Kanji百;
