import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji肖: KanjiIconType = (props) => (
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
      <path d="M54.44 9.87c.08.25 1.14 1.28 1.22 2.83.39 7.47-.25 25.12-.25 27.67" />
      <path d="M29.06 20.74c3.86 2.61 9.98 10.23 10.94 14.29" />
      <path d="M80.21 15.9c.03.43.06 1.1-.06 1.72C79.41 21.25 76 27 69.86 33.08" />
      <path d="M35.75 41.72c.75 1 1.25 2 1.5 3s.35 49.5.25 51.75" />
      <path d="M38.75 43.72c3-.25 30.02-3.97 32.25-4.25 4-.5 5 3.17 5 4.75 0 10.78-.75 25.25-.75 45.5 0 11.03-5.25 3.78-7.5 2.03" />
      <path d="M38.75 56.47c6.12-.9 11.3-1.34 17.47-1.78 1.65-.12 3.29-.23 4.89-.34" />
      <path d="M38 71.22c5.8-.54 11.6-1.09 17.41-1.59 1.7-.15 3.4-.29 5.08-.43" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(44.5 10.5)">{"1"}</text>
      <text transform="translate(21.75 20.5)">{"2"}</text>
      <text transform="translate(71.5 15.5)">{"3"}</text>
      <text transform="translate(29.5 49.63)">{"4"}</text>
      <text transform="translate(43.5 39.5)">{"5"}</text>
      <text transform="translate(43.5 52.55)">{"6"}</text>
      <text transform="translate(43.5 67.48)">{"7"}</text>
    </g>
  </svg>
);

export default Kanji肖;
