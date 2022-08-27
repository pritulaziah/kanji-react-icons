import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji児: KanjiIconType = (props) => (
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
      <path d="M24.62 13.75c1.09.5 1.74 2.25 1.96 3.25.22 1 0 28.25-.22 34.5" />
      <path d="M45.74 16.8c.4.81 1.31 2.22 1.31 3.3 0 1.08-.27 29.74-.27 30.28" />
      <path d="M47.72 17.94c2.27-.14 26.26-3.28 28.33-3.44 1.73-.14 2.79 1.49 2.7 2.3C78 23.5 77 32 76.35 47.34c-.05 1.22-.13 1.76-.13 2.57" />
      <path d="M48.12 33.08c4.62 0 9.34-.76 13.93-1.2 1.55-.15 3.11-.3 4.6-.44" />
      <path d="M47.98 48.96c6.27-.58 19.49-1.13 27.29-1.63" />
      <path d="M39.25 60.25c.06.82.14 2.12-.13 3.3-1.59 6.97-9.97 23.58-23.2 31.61" />
      <path d="M56.24 56.62c.72 1.24 1.3 2.71 1.34 4.63.19 8.57-.51 16.89-.51 22.71 0 13.6 8.67 12.06 17.2 12.06 9 0 14.93-1.76 16.19-2.75 2.68-2.09 1.95-3.14 2.19-6.8" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(17.5 15.5)">{"1"}</text>
      <text transform="translate(38.5 22.5)">{"2"}</text>
      <text transform="translate(48.75 14.5)">{"3"}</text>
      <text transform="translate(51.75 29.5)">{"4"}</text>
      <text transform="translate(51.75 45.13)">{"5"}</text>
      <text transform="translate(30.5 60.5)">{"6"}</text>
      <text transform="translate(47.5 60.5)">{"7"}</text>
    </g>
  </svg>
);

export default Kanji児;
