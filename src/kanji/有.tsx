import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji有: KanjiIconType = (props) => (
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
      <path d="M52.16 13.68c.09 1.16.23 3.01-.19 4.68-3.11 12.34-12.69 32.06-33.08 44.76" />
      <path d="M14.25 30.2c1.52.54 4.31.67 5.82.54C29 30 76 25.5 92.19 25.51c2.53 0 4.05.26 5.31.53" />
      <path d="M42.48 45.39c.6.77.99 1.55 1.19 2.32.2.77.28 50.52.2 52.26" />
      <path d="M44.86 47.17c2.38-.19 24.22-3.96 25.99-4.18 3.17-.39 4.36 2.51 3.97 3.68-.38 1.12-.59 30.61-.59 46.28 0 11.05-5.95 2.71-6.75 1.74" />
      <path d="M44.86 61.06c4.87-.7 9.26-1.22 14.16-1.71 1.31-.13 2.61-.26 3.88-.38" />
      <path d="M45.46 74.34c4.48-.41 8.95-.95 13.42-1.43 1.3-.14 2.6-.28 3.88-.41" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(45 14)">{"1"}</text>
      <text transform="translate(7.5 29.5)">{"2"}</text>
      <text transform="translate(36.5 58.5)">{"3"}</text>
      <text transform="translate(46.5 43.5)">{"4"}</text>
      <text transform="translate(48.64 56.5)">{"5"}</text>
      <text transform="translate(48.5 70.5)">{"6"}</text>
    </g>
  </svg>
);

export default Kanji有;
