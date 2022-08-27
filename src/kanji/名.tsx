import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji名: KanjiIconType = (props) => (
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
      <path d="M54.2 12.64c.3 1.61-.07 2.99-.69 4.24-3.49 7.13-13.28 19.29-25.96 27.54" />
      <path d="M53.25 24.16c.88.47 1.95.5 3.28.37 4.37-.43 11.99-2.47 17.81-4.1 4.18-1.17 5.46 1.02 4.41 3.51C72.25 39.38 43.88 69.62 16 77.5" />
      <path d="M43.62 40.88c3.62 2 8 6 9.68 9.58" />
      <path d="M42 67.81c.91.91 1.62 2.19 1.83 3.33.5 2.82 2.15 14.38 3.05 20.86.3 2.12.52 3.7.59 4.25" />
      <path d="M44.53 69.52c10.82-1.38 32.39-4.4 38.01-4.53 2.76-.06 4.08 1.63 3.25 4.64-1.13 4.06-3.52 14.04-4.64 20.36" />
      <path d="M47.99 93.99c7.26-.61 19.65-1.61 29.54-2.37 2.19-.17 4.24-.28 6.04-.31" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(46.5 12.5)">{"1"}</text>
      <text transform="translate(60.5 20.5)">{"2"}</text>
      <text transform="translate(38.5 48.5)">{"3"}</text>
      <text transform="translate(37.5 77.5)">{"4"}</text>
      <text transform="translate(54.5 64.5)">{"5"}</text>
      <text transform="translate(50.5 90.5)">{"6"}</text>
    </g>
  </svg>
);

export default Kanji名;
