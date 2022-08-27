import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Hiraganaも: KanjiIconType = (props) => (
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
      <path d="M49.17 14.75c1.88 1.88 1.86 4.52 1.12 8-3 14.25-5 26.62-7 42.12-2.55 19.73-.75 29.88 17 29.86C80.54 94.71 88.92 81.62 80.3 59" />
      <path d="M26.54 34.62c1.12.88 2.87 2.21 6 2 11.12-.75 20-2.12 27.74-3.46 3.88-.67 5.88-1.17 8.88-1.04" />
      <path d="M26.42 53.38c-1.5 4 1 6.75 7.75 6.75 8.75 0 17.62-1 22.88-1.88 2.01-.33 5.38-1 7.5-1.75" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(40.55 14.38)">{"1"}</text>
      <text transform="translate(21.3 29.63)">{"2"}</text>
      <text transform="translate(21.8 50.88)">{"3"}</text>
    </g>
  </svg>
);

export default Hiraganaも;
