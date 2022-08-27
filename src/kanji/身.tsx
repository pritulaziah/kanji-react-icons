import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji身: KanjiIconType = (props) => (
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
      <path d="M52.53 9.14c.03.34.55 1.89.45 2.38-.61 2.91-4.62 8.29-9.42 12.19" />
      <path d="M34.37 24.25c1.09.5 1.74 2.25 1.96 3.25.22 1 .5 30.75.28 37" />
      <path d="M37.07 25.84c5.22-.84 25.7-3.92 29.96-4.36 4.72-.48 4.47 1.02 4.47 7.02 0 12.39-.66 53.56-.66 64.68 0 10.33-7.72 1.06-8.61.32" />
      <path d="M37.5 37.25c5.87-.78 11.75-1.54 17.62-2.28 1.67-.21 3.31-.42 4.86-.61" />
      <path d="M38.25 49.75c5.31-.79 10.62-1.64 15.93-2.41 1.56-.23 3.12-.45 4.63-.65" />
      <path d="M16.5 66.75c1.75 2.75 4 3.5 10 1.75 9.41-2.75 38-11 43-13" />
      <path d="M89.25 37.25c.5 1.25 1.37 3.44 0 5.5C79.75 57 46.5 82 26.25 89.25" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(44.75 8.5)">{"1"}</text>
      <text transform="translate(27.75 34.63)">{"2"}</text>
      <text transform="translate(36.75 22.63)">{"3"}</text>
      <text transform="translate(41.5 34.5)">{"4"}</text>
      <text transform="translate(42.5 46.5)">{"5"}</text>
      <text transform="translate(8.25 67.5)">{"6"}</text>
      <text transform="translate(82.5 37.63)">{"7"}</text>
    </g>
  </svg>
);

export default Kanji身;
