import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji固: KanjiIconType = (props) => (
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
      <path d="M20 17.53c.86.86 1.61 2.63 1.61 4.44 0 12.55-.24 47.29-.3 66.16-.01 2.41-.01 4.56-.01 6.38" />
      <path d="M22.23 20.24c19.27-1.87 50.9-4.12 63.27-4.74 2.75-.14 4.75 2.37 4.75 5.23V93.63" />
      <path d="M29.75 39.56c2.5.44 4.44.3 6.77.04 8.12-.89 24.77-3.16 34.6-3.53 2.31-.09 4.71-.18 7 .2" />
      <path d="M53.11 23.49c.89.89 1.42 2.26 1.42 3.6 0 12.64.09 22.41.09 28.35" />
      <path d="M37.79 56.65c.63 1.45.88 2.42 1.1 3.96.55 3.7 1.23 9.52 1.91 14.64.16 1.22.32 2.41.48 3.51" />
      <path d="M39.23 58.96c8.64-1.33 22.4-3.59 27.83-3.71 2.25-.04 3.18.75 2.76 2.89-.83 4.17-1.93 9.51-3.15 15.06" />
      <path d="M42.21 76.4c6.54-.54 15.81-1.55 23.29-2.11 1.57-.12 3.05-.21 4.42-.28" />
      <path d="M22.75 90.66c14.38-.54 48.46-2.25 66.5-2.64" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(14.5 27.13)">{"1"}</text>
      <text transform="translate(25.5 16.5)">{"2"}</text>
      <text transform="translate(28.5 36.5)">{"3"}</text>
      <text transform="translate(45.5 29.91)">{"4"}</text>
      <text transform="translate(31.99 65.83)">{"5"}</text>
      <text transform="translate(40.5 55.26)">{"6"}</text>
      <text transform="translate(44.5 73.18)">{"7"}</text>
      <text transform="translate(27.5 87.5)">{"8"}</text>
    </g>
  </svg>
);

export default Kanji固;
