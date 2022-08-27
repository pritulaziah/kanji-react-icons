import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji丙: KanjiIconType = (props) => (
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
      <path d="M21.88 21.64c3.04 1.11 6.87.73 10 .4 10.7-1.16 35.17-3.56 47.87-3.96 2.85-.09 5.72.06 8.53.67" />
      <path d="M21.43 43.31c.71.79 1.34 2.44 1.44 3.88.38 5.27 1.1 25.35 1.44 36.17.12 3.7.19 6.31.19 6.88" />
      <path d="M23.48 45.54C36.12 44 70.12 40 83.62 39.1c4.01-.27 6.38 1.9 6.2 6.9-.43 11.51-3.06 30.75-6.03 40.71-2.23 7.49-4.79 4.04-7.47.32" />
      <path d="M51.81 22.04c1.26 1.26 1.59 2.59 1.7 4.47C54.62 45.62 50.5 63 32.25 72.75" />
      <path d="M56.42 52.83C62.88 56.62 71 63.38 75.14 69.78" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(15.75 22.5)">{"1"}</text>
      <text transform="translate(15.5 53.5)">{"2"}</text>
      <text transform="translate(24.75 41.5)">{"3"}</text>
      <text transform="translate(45.5 30.5)">{"4"}</text>
      <text transform="translate(58.5 51.5)">{"5"}</text>
    </g>
  </svg>
);

export default Kanji丙;
