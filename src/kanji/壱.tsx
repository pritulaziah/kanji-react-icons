import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji壱: KanjiIconType = (props) => (
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
      <path d="M26.88 25.38c.99.49 2.8.58 3.79.49 10.28-.83 34.51-4.45 46.26-4.41 1.65 0 2.63.24 3.46.49" />
      <path d="M50.53 10.86c1.14.46 1.83 2.06 2.06 2.97.23.91.27 13.91.27 23.8" />
      <path d="M30.31 39.42c.87.34 2.47.37 3.34.34 11.52-.4 28.1-3.01 38.89-3.36 1.45-.05 2.32.16 3.05.33" />
      <path d="M17.41 51.13c0 3.48-3.03 14.55-4.41 16.87" />
      <path d="M19.24 52.74c1.08.03 2.54.1 4.27-.07 18.98-1.91 57.72-4.99 64.68-5.33 12.05-.59 2.55 7.16-.45 9.28" />
      <path d="M41.75 75c8.5-1.5 18.5-4.02 26.05-5.83 1.6-.38 3.17-.7 4.7-.92" />
      <path d="M39 57.75c.92 1.02.98 1.7 1.29 3.06.31 1.36.31 21.47.31 25.73 0 10.94 12.31 9.23 22.79 9.23 8.13 0 18.4-1.08 21.47-4.14" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(20.5 26.5)">{"1"}</text>
      <text transform="translate(43.5 12.5)">{"2"}</text>
      <text transform="translate(23.5 38.5)">{"3"}</text>
      <text transform="translate(10.5 52.5)">{"4"}</text>
      <text transform="translate(21.5 49.5)">{"5"}</text>
      <text transform="translate(43 72)">{"6"}</text>
      <text transform="translate(31.5 65.5)">{"7"}</text>
    </g>
  </svg>
);

export default Kanji壱;
