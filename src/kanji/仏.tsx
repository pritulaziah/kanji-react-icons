import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji仏: KanjiIconType = (props) => (
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
      <path d="M36.51 16.75c.24 1.62-.06 3.24-.79 5.09-4.65 11.79-11.3 24.86-21.97 39.2" />
      <path d="M28.28 41.75c1.05 1.05 1.51 2.12 1.51 3.98 0 12.28-.03 30.57-.04 42.52v7" />
      <path d="M67.45 23.14c.59 1.16.44 2.75-.02 4.22-4.81 15.14-12.68 36.26-19.93 50.8-2.19 4.38-.97 4.87 2.67 3.69 9.95-3.22 24.45-7.6 39.01-12.04" />
      <path d="M78.38 52.62c6.15 5.24 15.9 21.55 17.43 29.7" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(27.5 16.5)">{"1"}</text>
      <text transform="translate(22.5 62.5)">{"2"}</text>
      <text transform="translate(59.5 22.5)">{"3"}</text>
      <text transform="translate(72.5 50.5)">{"4"}</text>
    </g>
  </svg>
);

export default Kanji仏;
