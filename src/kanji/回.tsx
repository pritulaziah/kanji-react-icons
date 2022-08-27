import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji回: KanjiIconType = (props) => (
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
      <path d="M17.5 26.25c1.06 1.06 1.9 3.09 2.11 4.98 1.27 11.64 2.42 29.54 4.16 51.27.17 2.12.34 2.78.53 5" />
      <path d="M20.54 28.66c20.23-2.59 57.72-6.91 68.71-6.91 2.75 0 3.82 2.51 3.5 5.5-1.35 12.85-3.11 34.06-5.64 51.98-.28 1.95-.56 2.88-.86 4.77" />
      <path d="M37.75 45.14c.8.64 1.29 1.45 1.47 2.45 1.2 3.61 2.35 10.46 3.54 16.12.28 1.32.53 2.1.74 3.3" />
      <path d="M40.03 46.4c7.97-1.53 22.18-3.48 26.41-3.91 1.8-.19 2.89 1.11 2.63 2.21-.88 3.74-3.13 11.37-4.34 16.3" />
      <path d="M44.25 64.5c5.23-.84 12.05-1.6 18.8-2.43 1.31-.16 2.62-.32 3.92-.46" />
      <path d="M25.25 84.76c15.54-1.45 41.13-3.14 60.75-4.51" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(9.75 36.13)">{"1"}</text>
      <text transform="translate(23.25 24.13)">{"2"}</text>
      <text transform="translate(30.75 54.13)">{"3"}</text>
      <text transform="translate(39.75 42.13)">{"4"}</text>
      <text transform="translate(47.25 60.13)">{"5"}</text>
      <text transform="translate(29.25 81.13)">{"6"}</text>
    </g>
  </svg>
);

export default Kanji回;
