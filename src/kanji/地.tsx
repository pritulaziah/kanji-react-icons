import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji地: KanjiIconType = (props) => (
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
      <path d="M11.5 49.5c1.71.69 3.51.56 5.24.2 5.76-1.2 13.37-2.96 19.65-4.7 1.6-.44 3.08-.5 4.12-.25" />
      <path d="M25.37 26.25c1.09.5 1.74 2.25 1.96 3.25.18.82-.18 43.4-.22 44.5" />
      <path d="M11 82.02c1.25 1.23 3.36 1.32 6-.37 1.56-1 15.12-9.36 21.75-14.15" />
      <path d="M41 53.06c2.12.69 4.88.69 7.38-.04 11.34-3.34 29.47-9.63 37.12-12.26 3.51-1.21 5.25.75 4.76 3.61-.93 5.4-3.34 11.85-5.26 15.89-2.5 5.25-5.62 2.75-7.75 0" />
      <path d="M66.25 18c1.19 1.19 2 2.88 2 4.5 0 8.5.07 29.73-.12 43.25-.04 2.91-.09 4.64-.13 5.75" />
      <path d="M49.49 37.62c1.26 1.26 2.02 3.13 2.02 4.85 0 8.57-.38 20.78-.38 28.03 0 16.5.87 19 22.37 19 20 0 20.64-1.75 20.64-13.07" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(5.25 50.5)">{"1"}</text>
      <text transform="translate(16.5 26.5)">{"2"}</text>
      <text transform="translate(3.75 84.5)">{"3"}</text>
      <text transform="translate(35.25 60.5)">{"4"}</text>
      <text transform="translate(58.5 18.5)">{"5"}</text>
      <text transform="translate(43.5 35.5)">{"6"}</text>
    </g>
  </svg>
);

export default Kanji地;
