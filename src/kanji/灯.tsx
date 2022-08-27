import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji灯: KanjiIconType = (props) => (
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
      <path d="M11.62 39.25c1.6 3.23 3.94 12.39 4.38 15.62" />
      <path d="M46.13 28.75c.17 1.05-.08 1.99-.82 3.02s-8.87 9.08-12.56 11.48" />
      <path d="M28.75 16.25c.76.75 1.02 2 1.03 3.25C30 67.12 27 77 11 93" />
      <path d="M30.62 63.75c5.2 2.73 11.76 11.38 13.12 15.25" />
      <path d="M52.5 26.42c1.82.56 5.15.53 6.96.31 9.17-1.11 23.42-3.11 31.56-3.48 3.02-.13 4.84.27 6.35.55" />
      <path d="M78.02 27.58c1.14 1.14 1.75 2.79 1.75 5.06v56.8c0 8.97-6.05 2.58-9.71-.5" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(3.49 36.13)">{"1"}</text>
      <text transform="translate(39.75 25.63)">{"2"}</text>
      <text transform="translate(21.49 11.98)">{"3"}</text>
      <text transform="translate(36.49 62.91)">{"4"}</text>
      <text transform="translate(53.25 22.63)">{"5"}</text>
      <text transform="translate(71.25 37.63)">{"6"}</text>
    </g>
  </svg>
);

export default Kanji灯;
