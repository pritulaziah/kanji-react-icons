import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji朱: KanjiIconType = (props) => (
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
      <path d="M35.58 17.75c.04.67.17 1.92-.09 2.68-3.2 9.4-7.92 18.03-16.25 25.62" />
      <path d="M30.38 34.02c.88.28 2.49.31 3.37.28 9.16-.32 30-4.3 41.14-5.23 1.46-.12 2.35.13 3.08.27" />
      <path d="M17.19 54.5c.89.25 3.27.94 5.64.75 9.42-.75 43.58-5.75 59.91-7 2.37-.18 4.47.25 5.95.5" />
      <path d="M51.91 11.75c1.48.5 2.38 2.25 2.67 3.25s-.3 75.71-.3 77c0 12.75-5.53 3-7.03 1.5" />
      <path d="M52.25 52.5C45.5 63.45 28.04 80.05 14 86.25" />
      <path d="M55 51.75c5.13 6.46 26.81 24.91 34.46 30.31 1.91 1.35 3.44 2.04 5.29 2.44" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(27.5 18.5)">{"1"}</text>
      <text transform="translate(38.25 31.55)">{"2"}</text>
      <text transform="translate(10.5 57.5)">{"3"}</text>
      <text transform="translate(44.25 12.5)">{"4"}</text>
      <text transform="translate(35.5 64.63)">{"5"}</text>
      <text transform="translate(68.25 61.63)">{"6"}</text>
    </g>
  </svg>
);

export default Kanji朱;
