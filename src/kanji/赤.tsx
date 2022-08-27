import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji赤: KanjiIconType = (props) => (
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
      <path d="M30.13 29.42c2.55.64 5.18.48 7.76.15 9.53-1.23 23.14-3.87 31.61-4.52 2.51-.19 4.9-.13 7.38.25" />
      <path d="M52.24 12.45c1.53 1.53 2.01 3.55 2.01 5.05 0 3.33.04 25.2 0 26.25" />
      <path d="M14.38 49.17c2.64.58 4.98.91 10.12.13 18.5-2.8 40.29-6 58.24-7.47 3.33-.27 6.79-.66 10.13-.3" />
      <path d="M42.78 49.89c.97 1.23 1.22 3.09 1.2 4.53-.22 15.82.15 26.07-8.72 37.82" />
      <path d="M61.02 46.83c1.39 1.39 2.01 2.92 2.01 5.02 0 13.52-.06 30.44-.06 35.4 0 12.25-3.71 5.75-6.71 2.75" />
      <path d="M28.53 63.89c.35 1.23.25 2.31-.02 3.18C26.88 72.5 24.09 77 19.25 83" />
      <path d="M78.77 63.83c3.86 3.92 9.11 12.92 10.98 19.17" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(23.5 29.5)">{"1"}</text>
      <text transform="translate(42.5 12.5)">{"2"}</text>
      <text transform="translate(7.5 49.5)">{"3"}</text>
      <text transform="translate(35.5 57.5)">{"4"}</text>
      <text transform="translate(54.5 55.5)">{"5"}</text>
      <text transform="translate(19.5 64.5)">{"6"}</text>
      <text transform="translate(75.5 59.5)">{"7"}</text>
    </g>
  </svg>
);

export default Kanji赤;
