import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji伎: KanjiIconType = (props) => (
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
      <path d="M35.47 14.39c.16 1.27.04 2.61-.39 4.16-3.33 11.83-13.04 28.84-25.52 42.17" />
      <path d="M24.78 43.75c.98.98 1.26 2.12 1.26 3.98 0 10.43-.03 29.67-.04 41.51v7.14" />
      <path d="M39.35 33.03c2.77.85 5.78.66 8.28.27 12.58-1.96 23.12-3.42 34.86-4.36 2.71-.22 5.58-.2 8.22.49" />
      <path d="M60.97 11.38c1.07 1.07 1.34 2.49 1.34 4.33 0 5.29.04 26.29.04 32.67" />
      <path d="M45.08 51.54c2.56.76 4.26.42 6.92-.05 7.88-1.37 14.5-2.62 22.83-4.51 2.85-.65 4.17 1.04 3.15 3.3-8.74 19.46-22.61 35.58-43 45.46" />
      <path d="M44.33 56.89c4.46.83 23.8 19.73 39.98 31.95 3.35 2.53 6.53 4.31 10.42 5.88" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(26.25 14.25)">{"1"}</text>
      <text transform="translate(18.25 60.25)">{"2"}</text>
      <text transform="translate(39.25 30.25)">{"3"}</text>
      <text transform="translate(51 11.25)">{"4"}</text>
      <text transform="translate(43.25 48.25)">{"5"}</text>
      <text transform="translate(38.25 61.25)">{"6"}</text>
    </g>
  </svg>
);

export default Kanji伎;
