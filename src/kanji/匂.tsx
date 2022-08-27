import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji匂: KanjiIconType = (props) => (
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
      <path d="M42.23 10c.08.98.38 2.6-.16 3.94C38 24 28.75 38.75 13.25 51.63" />
      <path d="M38 29.25c1.25.75 3 1 5 .5s39.25-4.25 44.25-4.5 5.6.46 5.25 5.75C92 38.5 87.75 74 78 94.25c-2.35 4.87-5.05 1.88-8-1.25" />
      <path d="M59.53 45.06c.19.28.32 1.1-.18 1.54-3.24 2.8-13.09 8.9-24.84 12.9" />
      <path d="M31 44.25c1.07 1.19 1.51 1.95 1.51 3.57 0 3.93.19 14.42.19 18.26 0 9.87 9.3 8.33 17.22 8.33 14.34 0 15.34-2.91 15.34-10.01" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(34.5 10.5)">{"1"}</text>
      <text transform="translate(45.5 25.5)">{"2"}</text>
      <text transform="translate(51.5 45.5)">{"3"}</text>
      <text transform="translate(25.5 51.5)">{"4"}</text>
    </g>
  </svg>
);

export default Kanji匂;
