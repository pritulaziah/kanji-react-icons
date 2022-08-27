import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji使: KanjiIconType = (props) => (
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
      <path d="M32.51 18.25c.23 1.89-.06 4.11-.8 5.73C27.03 34.28 21.12 45 10.38 56.5" />
      <path d="M24.53 42.75c.92.92 1.75 2.5 1.74 3.75-.03 10.66-.2 32.7-.26 44.5 0 2.55-.01 4.62-.01 6" />
      <path d="M44 30.64c1.42.38 4.04.3 5.45.13 8.43-1.02 21.93-2.77 31.57-3.63 2.35-.21 3.79.18 4.98.37" />
      <path d="M42.5 43.19c1.12.56 1.99 1.94 2.17 2.75.79 3.66 1.69 8.6 2.48 13.44.17 1.04.33 2.08.49 3.09" />
      <path d="M45.57 44.79c8.26-1.22 27.06-3.54 36.45-4.38 4.37-.39 5.86 1.84 4.52 5.21-1.45 3.66-2.44 5.85-4.3 10.81" />
      <path d="M48.26 59.6c4.73-.44 22.73-1.85 32.87-2.44 1.7-.1 3.17-.18 4.33-.22" />
      <path d="M63.38 12.93c1.22 1.22 1.39 2.57 1.44 4.82C66 70 66.62 81.25 36.75 95" />
      <path d="M44 67.88c7.25.38 28.04 16.2 40.84 22.59 2.52 1.25 4.41 2.29 7.54 3.04" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(24.5 18.13)">{"1"}</text>
      <text transform="translate(18.5 58.5)">{"2"}</text>
      <text transform="translate(44.25 27.13)">{"3"}</text>
      <text transform="translate(37.5 51.5)">{"4"}</text>
      <text transform="translate(45.5 41.5)">{"5"}</text>
      <text transform="translate(51.5 56.5)">{"6"}</text>
      <text transform="translate(56.5 13.5)">{"7"}</text>
      <text transform="translate(36.75 69.13)">{"8"}</text>
    </g>
  </svg>
);

export default Kanji使;
