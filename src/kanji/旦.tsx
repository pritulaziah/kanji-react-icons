import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji旦: KanjiIconType = (props) => (
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
      <path d="M33.75 18.21c.65 1.25 1.3 1.88 1.3 3.55s-.43 46.9-.43 47.74.22.83.43 2.5" />
      <path d="M36.12 19.42c3.65-.21 31.45-2.67 34.78-2.92 2.78-.21 4.56 2.31 4.35 3.55-.43 2.5-.65 28.79-.64 47.16 0 1.89-.22 2.71-.22 3.96" />
      <path d="M36.77 43.62c5.93 0 11.91-.64 17.82-1.04a2052 2052 0 0 1 5.72-.38" />
      <path d="M36.12 69.71c7.31 0 26.88-1.67 36.34-1.67" />
      <path d="M15.5 91c1.5.5 4.25.53 5.75.5C34.5 91.25 73 88.75 88.5 88.76c2.5 0 4 .24 5.25.49" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(26 26.88)">{"1"}</text>
      <text transform="translate(36.5 15.03)">{"2"}</text>
      <text transform="translate(39.5 38.95)">{"3"}</text>
      <text transform="translate(39.5 65.88)">{"4"}</text>
      <text transform="translate(17 88.3)">{"5"}</text>
    </g>
  </svg>
);

export default Kanji旦;
