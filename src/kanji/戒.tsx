import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji戒: KanjiIconType = (props) => (
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
      <path d="M16.75 34.2c3.62.68 8.01.24 11.41-.4 13.72-2.55 34.59-5.55 52.35-7.09 3.13-.27 6.16-.33 9.24.33" />
      <path d="M18.13 62.17c.91.32 2.57.38 3.48.32 9.43-.54 23.4-5.38 33.85-5.75 1.5-.05 2.42.05 3.17.1" />
      <path d="M30.02 46.9c.92.92 1.19 2.14 1.23 3.67.33 13.94-.49 31.18-11.96 40.9" />
      <path d="M45.51 40.8c1.09 1.09 1.67 2.45 1.67 4.19 0 2.2.08 30.77.11 43.51.01 3.22.01 5.42.01 5.94" />
      <path d="M55.25 12.75c1.62 1.78 2.14 3.26 2.38 7.09 1.87 29.78 13.27 62.97 32.1 73.88 6.41 3.72 5.47.76 4.66-7.11" />
      <path d="M83.48 43.39c0 1.23-.15 2.22-.66 3.65C78.62 58.75 71 74.62 54.56 87.72" />
      <path d="M70.25 11.38c3.59 1.73 9.33 5.67 11 8.62" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(9.5 35.5)">{"1"}</text>
      <text transform="translate(11.25 63.05)">{"2"}</text>
      <text transform="translate(21.5 48.5)">{"3"}</text>
      <text transform="translate(36.5 43.63)">{"4"}</text>
      <text transform="translate(45.75 14.5)">{"5"}</text>
      <text transform="translate(73.5 42.5)">{"6"}</text>
      <text transform="translate(63.5 10.5)">{"7"}</text>
    </g>
  </svg>
);

export default Kanji戒;
