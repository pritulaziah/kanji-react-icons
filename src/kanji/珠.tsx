import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji珠: KanjiIconType = (props) => (
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
      <path d="M10.65 28.02c.52.33 3.35.41 3.88.31 2.45-.45 12.43-1.9 18.32-2.39.8-.07 2.29-.24 2.96.04" />
      <path d="M22.59 30.08c.81.8 1.38 2.51 1.38 3.15 0 5.39-.18 29.02-.18 39.66" />
      <path d="M10.98 50.35c.52.37 3.14.38 3.67.34 5.1-.44 12.6-2.69 17.38-3.3.64-.08 2-.15 2.96.17" />
      <path d="M10.75 76.9c.51.2 2.49 1.75 3.26 1.36 4.89-2.49 11.88-6.12 19.33-10.42" />
      <path d="M50.78 22.74c.03.51.11 1.48-.06 2.06-2.06 7.22-5.11 13.85-10.48 19.67" />
      <path d="M49.76 33.55c.6.23 1.69.26 2.3.23 6.23-.26 20.55-3.52 28.13-4.27 1-.1 1.6.11 2.1.22" />
      <path d="M39.93 52.22c.61.15 2.23.55 3.84.44 6.41-.44 30.64-3.07 41.75-3.8 1.61-.11 3.04.15 4.05.29" />
      <path d="M61.43 11.75c1.32 1.01 1.86 2.24 2.15 3.23s-.29 75.27-.29 76.52c0 12.5-4.91 3.12-6.54 1.5" />
      <path d="M62.04 53.01C56.76 64.06 43.09 79.82 32.1 86.08" />
      <path d="M64.78 52.28c3.86 5.68 20.15 21.9 25.9 26.65 1.43 1.19 2.58 1.79 3.98 2.15" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(5.25 28.63)">{"1"}</text>
      <text transform="translate(16.5 38.5)">{"2"}</text>
      <text transform="translate(3.75 51.13)">{"3"}</text>
      <text transform="translate(3.75 81.5)">{"4"}</text>
      <text transform="translate(41.5 24.5)">{"5"}</text>
      <text transform="translate(54.75 30.5)">{"6"}</text>
      <text transform="translate(43.5 49.48)">{"7"}</text>
      <text transform="translate(53.25 13.5)">{"8"}</text>
      <text transform="translate(49.5 61.5)">{"9"}</text>
      <text transform="translate(75.5 61.63)">{"10"}</text>
    </g>
  </svg>
);

export default Kanji珠;
