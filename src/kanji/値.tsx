import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji値: KanjiIconType = (props) => (
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
      <path d="M34.75 15.25c.24 2.06-.07 4.76-.86 6.52C28.88 33.03 22.51 43.59 11 57.29" />
      <path d="M26.03 42.5c.59.61.7 1.97.76 3.23.56 11.77-.54 41.27-.54 49.52" />
      <path d="M46.9 30.46c1.03.29 2.91.23 3.93.15 13.57-1.02 20.65-3.28 40.3-4.28 1.71-.09 2.74.03 3.59.16" />
      <path d="M68.73 14.26c1.25.44 2.34 2.13 2.26 3.14-.74 9.6-.74 12.85-1.66 24.1" />
      <path d="M54.19 42.11c.51.85 1.25 2.34 1.25 3.5 0 1.16-.12 26.1-.34 36.9" />
      <path d="M56.58 43.76c3.03-.29 25.23-3.66 28.02-3.97 2.18-.24 3.91 1.51 3.72 2.59-.23 1.38-.35 24.92-.35 37.69" />
      <path d="M56.24 55.49c5.21-.42 10.4-1.1 15.58-1.69 1.57-.18 3.14-.36 4.63-.52" />
      <path d="M56.47 67.19c5-.54 10.49-1.16 15.49-1.72 1.39-.16 2.78-.31 4.14-.45" />
      <path d="M55.91 79.55c5.35-.68 27.66-2.76 31.52-2.94" />
      <path d="M41 53.25c1 1.25 1.5 1.75 1.5 4.25s.65 29.83 0 32c-.75 2.5.25 3.97 3.25 3.75 13.75-1 33-3 46.5-3.25 2.75-.05 5.25 0 7.25.5" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(26.25 15.5)">{"1"}</text>
      <text transform="translate(20.25 58.5)">{"2"}</text>
      <text transform="translate(44.5 27.5)">{"3"}</text>
      <text transform="translate(60.75 14.5)">{"4"}</text>
      <text transform="translate(47.5 51.5)">{"5"}</text>
      <text transform="translate(56.5 40.63)">{"6"}</text>
      <text transform="translate(60.75 52.5)">{"7"}</text>
      <text transform="translate(60.71 63.5)">{"8"}</text>
      <text transform="translate(60.71 75.5)">{"9"}</text>
      <text transform="translate(33.75 49.63)">{"10"}</text>
    </g>
  </svg>
);

export default Kanji値;
