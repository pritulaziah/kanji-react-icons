import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji珍: KanjiIconType = (props) => (
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
      <path d="M10.75 28.42c.56.37 3.6.45 4.16.34 2.63-.5 15.34-1.59 21.66-2.14.86-.07 2.46-.26 3.18.04" />
      <path d="M11.5 52.67c.55.4 4.45.46 5.01.37 3.25-.53 13.24-2.62 17.73-3.19.69-.09 2.22-.16 3.25.19" />
      <path d="M11.75 81.02c2 1.23 3.68.81 4.5.4C21.5 78.85 28 75.61 36 71.17" />
      <path d="M24.57 30.19c.87.88 1.48 2.78 1.48 3.48 0 5.95.52 37.62.35 41.57" />
      <path d="M61.03 14.25c.05.73.3 1.96-.11 2.96-3.27 7.87-9.52 19.43-19.62 28.29" />
      <path d="M61.84 18.17c4.34 4.73 23.04 20.2 27.82 23.66 1.62 1.18 3.71 1.68 5.33 2.01" />
      <path d="M68.14 38.65c.06.45-.21 1.77-.62 2.3-3.27 4.3-8.69 9.89-19.81 16.08" />
      <path d="M73.84 55.74c.08.51-.16 1.43-.65 2.04-4.47 5.5-11.11 13.03-26.26 19.53" />
      <path d="M82.43 70.96c.12.63-.04 1.77-.73 2.52-5.72 6.35-19.2 17.77-40.48 24.12" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(4.5 28.5)">{"1"}</text>
      <text transform="translate(5.25 54.5)">{"2"}</text>
      <text transform="translate(3.75 85.4)">{"3"}</text>
      <text transform="translate(18.5 38.5)">{"4"}</text>
      <text transform="translate(52.5 16.5)">{"5"}</text>
      <text transform="translate(69.5 22.63)">{"6"}</text>
      <text transform="translate(60.75 39.05)">{"7"}</text>
      <text transform="translate(65.25 55.48)">{"8"}</text>
      <text transform="translate(74.25 70.4)">{"9"}</text>
    </g>
  </svg>
);

export default Kanji珍;
