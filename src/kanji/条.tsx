import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji条: KanjiIconType = (props) => (
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
      <path d="M45.94 11.5c.06.57.13 1.47-.12 2.29-1.45 4.82-9.76 15.4-21.14 21.88" />
      <path d="M48.09 19.04c.32.03 1.68 0 2.6-.08 3.01-.25 11.87-2.17 16.16-2.94 2.94-.52 3.79 1.6 3.03 3.03C63.25 31.5 37.38 53.73 19 57.75" />
      <path d="M40.25 27c6.25 3.25 32.25 21.25 41.92 24.53 2.66.9 4.55 1.85 7 2.23" />
      <path d="M17.75 67c.75.25 2.76.41 4.75.25 9.5-.75 47.75-2.75 61.5-4 1.99-.18 2.5-.25 3.75 0" />
      <path d="M52.25 50.25c1.25.5 2 2.25 2.25 3.25s-.25 38.73-.25 40c0 12.75-5.62 1.88-6.5 1" />
      <path d="M43.75 74.45c-3.04 6.81-10.93 16.45-17.25 20.3" />
      <path d="M62.25 73c4.94 3.19 13.97 14.88 16.82 19.85" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(36.75 16.63)">{"1"}</text>
      <text transform="translate(53.25 15.05)">{"2"}</text>
      <text transform="translate(50.25 29.98)">{"3"}</text>
      <text transform="translate(9.75 67.4)">{"4"}</text>
      <text transform="translate(44.25 56.83)">{"5"}</text>
      <text transform="translate(32.25 77.75)">{"6"}</text>
      <text transform="translate(68 74.68)">{"7"}</text>
    </g>
  </svg>
);

export default Kanji条;
