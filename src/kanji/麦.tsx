import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji麦: KanjiIconType = (props) => (
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
      <path d="M29.63 27.39c.94.23 2.66.26 3.6.23 9.77-.26 34.77-3.3 43.36-3.64 1.56-.06 2.5.11 3.29.22" />
      <path d="M29.63 40.14c.94.23 2.66.26 3.6.23 9.77-.26 34.77-3.3 43.36-3.64 1.56-.06 2.5.11 3.29.22" />
      <path d="M21.88 54.89c.94.23 2.66.33 3.6.23 12.27-1.3 45.52-6.05 60.36-6.64 1.56-.06 2.5.11 3.29.22" />
      <path d="M52.25 11.82c1.25.5 2 2.25 2.25 3.25s-.25 24-.25 35" />
      <path d="M45.51 55.32c.07.6.14 1.55-.13 2.41-1.62 5.09-10.91 16.25-23.62 23.09" />
      <path d="M47.25 63.07c3.32-.3 14.43-2.43 19.18-3.36 3.04-.6 3.7 1.08 2.35 3.47-5.19 9.2-28.54 31.86-48.86 36.77" />
      <path d="M38.75 67.32c8.2 4.6 35.98 23.93 46.1 28.87 3.02 1.47 5.46 2.19 8.4 2.63" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(21.75 26.2)">{"1"}</text>
      <text transform="translate(21.75 39.7)">{"2"}</text>
      <text transform="translate(12.75 54.7)">{"3"}</text>
      <text transform="translate(45.75 6.7)">{"4"}</text>
      <text transform="translate(30.75 66.7)">{"5"}</text>
      <text transform="translate(53.25 62.2)">{"6"}</text>
      <text transform="translate(42.75 81.7)">{"7"}</text>
    </g>
  </svg>
);

export default Kanji麦;
