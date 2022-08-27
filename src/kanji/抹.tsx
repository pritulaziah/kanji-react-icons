import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji抹: KanjiIconType = (props) => (
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
      <path d="M10.5 38.92c2.08.25 1.27.55 3.5.25 5.5-.75 15.5-2.5 24.67-3.67" />
      <path d="M26.77 13c.48.92 1.76 2.49 1.76 5.52 0 15.23.24 57.96.24 69.4 0 14.25-6.32 3.53-7.77 2" />
      <path d="M12 64.18c1.25 1.78 3.69 1.38 6.5-.18 6.75-3.75 9.75-6.25 19-12" />
      <path d="M44.43 33.74c.96.44 2.73.52 3.69.44 4.87-.4 34.54-3.45 40.2-3.64 1.61-.05 2.57.21 3.37.43" />
      <path d="M49.42 51.02c.56.24 2.06.29 3.56.24 7.77-.26 22.54-2.31 30.59-2.79 1.5-.09 1.87-.24 2.81 0" />
      <path d="M64.8 11.5c1.2.48 1.92 2.15 2.15 3.11s-.24 75.38-.24 76.39c0 11.25-5.84 2.62-6.96 1.5" />
      <path d="M66.16 50.8c-5.15 11.71-18.52 28.27-29.22 34.9" />
      <path d="M66.84 51.56c3.82 4.29 20.56 24.59 24.71 28.81 1.41 1.43 2.61 2.04 4.02 2.45" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(4.5 39.5)">{"1"}</text>
      <text transform="translate(18.5 13.63)">{"2"}</text>
      <text transform="translate(5.5 70.5)">{"3"}</text>
      <text transform="translate(42.5 31.5)">{"4"}</text>
      <text transform="translate(46.5 48.05)">{"5"}</text>
      <text transform="translate(56.25 12.5)">{"6"}</text>
      <text transform="translate(53.5 62.5)">{"7"}</text>
      <text transform="translate(78.5 61.63)">{"8"}</text>
    </g>
  </svg>
);

export default Kanji抹;
