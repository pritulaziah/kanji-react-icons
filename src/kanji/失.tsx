import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji失: KanjiIconType = (props) => (
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
      <path d="M36.51 23.14c.04.57.21 1.5-.09 2.28-2.42 6.33-7.05 13.2-15.86 21.3" />
      <path d="M32.75 38.39c2.25.49 4.26.32 6.26.09 7.43-.87 24.34-3.05 33.49-3.51 2.23-.11 4.56-.25 6.75.29" />
      <path d="M19.75 60.14c2.71.97 6.7.53 9.49.13 13.14-1.9 38.25-4.73 50.51-5.47 2.81-.17 5.72-.13 8.5.46" />
      <path d="M53.62 14.25c.63 1.25.86 2.41.87 4.83C54.75 63.75 43.75 83 17.5 95.5" />
      <path d="M54.5 57.5c9.99 11.52 23.52 28.43 33.46 34.78 2.9 1.85 4.85 2.75 6.04 2.97" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(28.5 22.63)">{"1"}</text>
      <text transform="translate(39.5 35.5)">{"2"}</text>
      <text transform="translate(11.5 61.5)">{"3"}</text>
      <text transform="translate(43.5 14.5)">{"4"}</text>
      <text transform="translate(66.5 67.63)">{"5"}</text>
    </g>
  </svg>
);

export default Kanji失;
