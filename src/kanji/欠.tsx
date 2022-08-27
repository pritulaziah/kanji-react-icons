import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji欠: KanjiIconType = (props) => (
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
      <path d="M40.75 14.62c.05.85.11 1.94-.11 3.17-1.33 7.21-8.7 22.78-19.14 32.46" />
      <path d="M36.97 34.99c1.28.36 3.69.65 5.62.36 7.41-1.1 26.66-5.1 32.96-6.04 7.61-1.14 4.94 4.44-5.06 13.44" />
      <path d="M51.37 45.88c.35 1.52.31 2.66.06 4.33C49.85 60.57 38.06 82.1 17.5 94" />
      <path d="M51.5 58.75c5.62 5.75 20.25 19.88 30.76 28.73 2.5 2.1 5.36 4.15 8.61 4.9" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(32.5 16.5)">{"1"}</text>
      <text transform="translate(42.5 32.5)">{"2"}</text>
      <text transform="translate(42.5 47.98)">{"3"}</text>
      <text transform="translate(56.5 59.5)">{"4"}</text>
    </g>
  </svg>
);

export default Kanji欠;
