import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji升: KanjiIconType = (props) => (
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
      <path d="M45.8 13.25c-.17 1.75-.64 2.71-1.91 3.87C38.25 22.25 29.75 28 19.75 32.29" />
      <path d="M39.61 26c1.01 1.01 1.51 2.17 1.59 4.43C42 53.25 40 77.5 21.5 92.5" />
      <path d="M12.88 52.73c4.12.77 8.17.52 11.65.02C43.75 50 65 46.25 85.51 44.35c4.36-.4 8.12-.35 11.37.22" />
      <path d="M67.12 12c1.44 1.44 1.71 3.5 1.71 5.5 0 8.66-.06 50.24-.08 74.5v8.25" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(37.5 12.5)">{"1"}</text>
      <text transform="translate(32.5 35.5)">{"2"}</text>
      <text transform="translate(4.5 54.5)">{"3"}</text>
      <text transform="translate(57.5 12.5)">{"4"}</text>
    </g>
  </svg>
);

export default Kanji升;
