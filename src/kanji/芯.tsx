import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji芯: KanjiIconType = (props) => (
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
      <path d="M17.5 31.58c5.5.92 10.45.07 15.77-.66 13.4-1.85 31.58-3.82 44.09-4.39 4.29-.22 8.59-.08 12.88.41" />
      <path d="M36.5 18.25c1 1 1.35 2.11 1.5 3 1.62 9.38 2.75 18 3.25 21" />
      <path d="M68.94 13.75c.56 1.38.29 2.77-.03 4.31-1.66 8.07-3.16 14.57-4.84 22.69" />
      <path d="M23.64 68.82c.42 2.78-4.95 15.29-8.31 19.92" />
      <path d="M33.08 60.75C42.5 86.5 47.5 96.5 77.03 95.43c12.7-.46 14.03-3.06 3.44-11.7" />
      <path d="M56.91 60.25c2.17 5.25 6.82 13 9.13 4.96" />
      <path d="M83.63 57.23c7.24 4.64 11.37 8.02 13.6 12.86" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(10.5 32.5)">{"1"}</text>
      <text transform="translate(26.5 17.5)">{"2"}</text>
      <text transform="translate(58.5 13.5)">{"3"}</text>
      <text transform="translate(17.5 65.5)">{"4"}</text>
      <text transform="translate(26.5 57.5)">{"5"}</text>
      <text transform="translate(50.5 60.5)">{"6"}</text>
      <text transform="translate(77.5 58.5)">{"7"}</text>
    </g>
  </svg>
);

export default Kanji芯;
