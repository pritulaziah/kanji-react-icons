import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji含: KanjiIconType = (props) => (
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
      <path d="M53.17 11.25c.1 1.09.01 2.92-.71 4.39C47.5 25.75 35 43.64 14.5 57.86" />
      <path d="M54.16 17.65C60 23.62 73.5 36.25 84.31 45.7c3.28 2.87 7.31 5.3 11.69 7.05" />
      <path d="M40.48 41.84c.38.18 2.71.19 3.1.18 3.97-.2 14.8-2.04 18.71-2.02.63 0 3.29.08 3.61.17" />
      <path d="M30.5 55.24c1.5.51 4.06.73 6.5.5C45 55 58.25 53 67.24 51.88c4.02-.5 5.04.73 2.26 3.87-5.75 6.5-8.75 9.12-18 18.75" />
      <path d="M33.68 75.7c.98.97 1.6 1.87 1.88 3.17 1.07 5.01 2.24 9.46 3.06 14.87.31 2.01.59 3.97.83 5.73" />
      <path d="M36.31 77.37c9.36-1.42 25.15-3.24 32.44-4.07 4.69-.53 6.02 1.16 4.59 5.6-1.47 4.59-2.29 8.11-4.14 14.74" />
      <path d="M40.37 97.48c5-.53 17.06-1.66 25.89-2.43 2.26-.2 4.28-.37 5.91-.51" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(42.75 16.63)">{"1"}</text>
      <text transform="translate(65.25 21.13)">{"2"}</text>
      <text transform="translate(47.25 37.55)">{"3"}</text>
      <text transform="translate(35.25 52.48)">{"4"}</text>
      <text transform="translate(27.75 83.9)">{"5"}</text>
      <text transform="translate(39.75 72.13)">{"6"}</text>
      <text transform="translate(44.25 94.55)">{"7"}</text>
    </g>
  </svg>
);

export default Kanji含;
