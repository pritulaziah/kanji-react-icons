import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji圧: KanjiIconType = (props) => (
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
      <path d="M23.63 24.73c2.87.65 5.61.54 8.35.27 13.89-1.38 34.02-4.12 47.27-5.05 2.71-.19 5.21-.2 7.87.37" />
      <path d="M26.99 25.75c1.01 1.01 1.4 2.5 1.4 4.26 0 13.26-2.14 46.11-17.58 63.21" />
      <path d="M37.9 58.27c2.22.48 4.54.48 6.63.26 10.33-1.08 24.4-2.57 34.72-3.05 2.05-.09 4.09-.25 6.11.23" />
      <path d="M59.07 32.87c.91.91 1.6 2.14 1.6 3.84 0 14.8-.08 38.05-.08 51.31" />
      <path d="M29.74 90.03c3.01 1.08 6.53.87 9.62.61 11.78-.97 33.47-2.11 47.02-2.53 2.99-.09 5.95 0 8.9.63" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(26.5 22.5)">{"1"}</text>
      <text transform="translate(20.5 34.56)">{"2"}</text>
      <text transform="translate(36.5 55.5)">{"3"}</text>
      <text transform="translate(49.5 33.5)">{"4"}</text>
      <text transform="translate(28.5 87.5)">{"5"}</text>
    </g>
  </svg>
);

export default Kanji圧;
