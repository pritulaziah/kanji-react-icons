import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji封: KanjiIconType = (props) => (
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
      <path d="M18.33 33.3c1.8.32 3.45.46 4.92.19 7.63-1.37 15.03-2.53 21.87-3.11 1.72-.15 3.47-.35 5.15.16" />
      <path d="M33.35 17c1.14 1.14 1.45 2.35 1.45 4.01 0 6.11-.05 18.49-.05 25.24" />
      <path d="M15.15 49.69c2.47.44 4.51.18 6.45-.13 6.86-1.12 15.36-2.7 25.27-3.67 1.95-.19 4.42-.76 6.31-.02" />
      <path d="M18.31 68.62c1.57.5 3.58.29 4.8.04 8.01-1.66 15.76-2.79 23.04-3.93 1.25-.2 3.37-.52 4.56-.02" />
      <path d="M33.48 50.93c.73.73 1.13 1.69 1.13 3.01 0 10.65-.11 17.35-.11 31.43" />
      <path d="M16.58 90.74c1.05 1.01 2.32.86 3.21.56 12.47-4.1 18.38-6.14 30.14-9.92" />
      <path d="M57.64 42.75c2.23.3 4.65.16 6.86-.21 7.79-1.3 18.82-2.68 26.99-3.54 1.87-.2 4.12-.38 6.14.05" />
      <path d="M80.15 14.58c1.14 1.14 1.44 2.79 1.44 4.96l.01 69.25c0 9.96-4.59 3.58-6.41 1.74" />
      <path d="M61.25 57.62c2.73 2.04 7.06 8.4 7.75 11.58" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(11.5 34.5)">{"1"}</text>
      <text transform="translate(22.5 18.13)">{"2"}</text>
      <text transform="translate(7.5 50.5)">{"3"}</text>
      <text transform="translate(10.5 69.05)">{"4"}</text>
      <text transform="translate(26.5 59.5)">{"5"}</text>
      <text transform="translate(8.5 94.5)">{"6"}</text>
      <text transform="translate(56.5 39.5)">{"7"}</text>
      <text transform="translate(71.5 15.5)">{"8"}</text>
      <text transform="translate(56.5 65.5)">{"9"}</text>
    </g>
  </svg>
);

export default Kanji封;
