import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji放: KanjiIconType = (props) => (
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
      <path d="M27.96 14.75c4.09 1.76 9.44 7.67 10.82 12.08" />
      <path d="M12.5 33.12c1.29.09 2.75.63 4.01.5 10.17-1.05 23.31-2.61 31.24-4.12 2.1-.4 3.16-.22 4.75.37" />
      <path d="M33.75 45.5c6.5 1 2.25.5 8.99 1.11 3.42.31 4.32 3.24 4.01 5.89-1 8.5-8.74 29.43-13.38 34.83-4.87 5.67-7.72.26-9.09-.57" />
      <path d="M34.03 34.25c.07 1.02.17 2.64-.14 4.09C31.55 49.14 24.34 66.39 9 77.5" />
      <path d="M68 15.39c.04.87.27 2.28-.08 3.48-2.26 7.63-7.34 22.69-15.16 33.25" />
      <path d="M62.76 39.82c.66.4 1.87.45 2.53.4 7.88-.53 17.69-3.95 27.2-4.62 1.18-.08 1.9-.02 2.21.08" />
      <path d="M80.48 42.63c.55 1.25.85 2.14.27 4.42-5.22 20.73-17.03 37.74-34.27 46.45" />
      <path d="M59.65 54.03c3.1.72 23.31 27.99 33.35 35.37 1.93 1.42 3.16 1.66 4.75 1.81" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(22.5 14.5)">{"1"}</text>
      <text transform="translate(5.5 34.63)">{"2"}</text>
      <text transform="translate(38.5 43.63)">{"3"}</text>
      <text transform="translate(24.5 42.5)">{"4"}</text>
      <text transform="translate(58.5 15.5)">{"5"}</text>
      <text transform="translate(68.25 36.5)">{"6"}</text>
      <text transform="translate(71.5 48.5)">{"7"}</text>
      <text transform="translate(65.5 57.5)">{"8"}</text>
    </g>
  </svg>
);

export default Kanji放;
