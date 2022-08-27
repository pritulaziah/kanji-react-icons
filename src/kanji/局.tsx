import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji局: KanjiIconType = (props) => (
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
      <path d="M30.06 17.38c1.68.53 3.95.61 5.74.45 10.45-.95 38.05-4.25 41.94-4.51 2.75-.19 4.38 1.19 3.5 3.69-1.78 5.08-2.75 7.75-4.28 12.53" />
      <path d="M33.28 35.03c4.14-.39 30.13-3.15 41.72-4.23 1.94-.18 3.48-.31 4.44-.38" />
      <path d="M32.44 18.71c.79 1.31 1.11 2.69.95 4.14-.91 29.09-6.78 51.44-17.89 64.41" />
      <path d="M33.73 48.65c2.56.5 5.1.07 7.64-.28 12.3-1.67 28.72-3.87 43.62-5.63 7.02-.83 7.84 2.76 7.5 6.25-1.2 12.31-5.25 30.62-10 42.75-3.97 10.13-9.04 2.82-12-.75" />
      <path d="M38 63.47c.64.53 1.01 1.21 1.13 2.03.84 2.88 1.7 8.06 2.35 12.49.16 1.08.31 2.12.44 3.07" />
      <path d="M39.96 64.5c7.69-1.26 21.72-3.08 25.68-3.58 2.36-.3 3.36 1.2 2.87 3.22-.92 3.76-1.38 5.48-3.18 11.71" />
      <path d="M42.23 79.32c3.85-.4 14.39-1.68 21.28-2.38 1.45-.15 2.74-.27 3.77-.36" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(39.75 13.63)">{"1"}</text>
      <text transform="translate(38.5 31.5)">{"2"}</text>
      <text transform="translate(24.75 27.13)">{"3"}</text>
      <text transform="translate(37.5 46.5)">{"4"}</text>
      <text transform="translate(32.5 73.63)">{"5"}</text>
      <text transform="translate(40.5 61.5)">{"6"}</text>
      <text transform="translate(45.5 75.5)">{"7"}</text>
    </g>
  </svg>
);

export default Kanji局;
