import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji母: KanjiIconType = (props) => (
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
      <path d="M34.82 19.37c1.14 1.02 1.72 3.42 1.41 6.09-1.46 12.62-8.22 32.3-13.04 44.1-1.47 3.6-.44 5.27 3.63 5.2 11.37-.18 27.52 2.13 40.68 7.24 4.98 1.93 9.54 4.26 13.25 7.01" />
      <path d="M37.32 22.07c4.81.56 13.81-1.32 39.18-6.07 4-.75 5.92.77 5.5 4.25-2.25 18.62-7 49-16.06 69.18-3.36 7.49-9.86 1.68-11.42 0" />
      <path d="M49 28.5c3.88 1.98 10.03 8.16 11 11.25" />
      <path d="M45.25 57.62c3.79 1.96 9.8 8.07 10.75 11.12" />
      <path d="M9.88 51.45c2.21.63 6.26.87 8.46.63C46.77 49 67.12 47 90.65 46.07c3.68-.15 5.89.3 7.72.61" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(27.5 26.5)">{"1"}</text>
      <text transform="translate(39.5 18.5)">{"2"}</text>
      <text transform="translate(41.5 32.5)">{"3"}</text>
      <text transform="translate(37.5 60.5)">{"4"}</text>
      <text transform="translate(2.5 54.13)">{"5"}</text>
    </g>
  </svg>
);

export default Kanji母;
