import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji汚: KanjiIconType = (props) => (
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
      <path d="M22 14.75c3.88 1.43 10.03 5.87 11 8.09" />
      <path d="M16.5 41.5c3.97 1.32 10.26 5.44 11.25 7.5" />
      <path d="M17.91 88.2c1.18.49 2.38-.03 3.09-1.24C23.75 82.25 27.5 74 30 68" />
      <path d="M46.92 16.87c1.5.57 4 .49 5.59.33 7.87-.82 17.92-2.29 25.51-2.64 1.68-.08 3.41-.17 5.06.21" />
      <path d="M37 39.41c2.31.76 5.73.59 8.14.28 10.84-1.4 32.11-3.42 43.24-3.82 2.46-.09 4.94-.19 7.37.29" />
      <path d="M63.18 18.05c.69 1.45.53 3.27 0 4.93C60.25 32 54.66 44.84 51.3 52.43c-.8 1.82-.24 3.99 3.07 3.43 5.13-.86 19.11-2.16 25.75-2.9 6.64-.73 5.03 4.91 4.54 6.67-2.49 9.05-7.05 23.81-12.49 31.42C66.5 99 62.39 90.89 60.5 89" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(14.25 14.5)">{"1"}</text>
      <text transform="translate(8.5 41.5)">{"2"}</text>
      <text transform="translate(8.5 90.5)">{"3"}</text>
      <text transform="translate(45.5 13.5)">{"4"}</text>
      <text transform="translate(36.5 36.05)">{"5"}</text>
      <text transform="translate(54.75 26.5)">{"6"}</text>
    </g>
  </svg>
);

export default Kanji汚;
