import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji造: KanjiIconType = (props) => (
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
      <path d="M50.95 21.59c.06 1.27.01 2.33-.4 3.55-1.8 5.36-4.01 10.8-8.32 17.29" />
      <path d="M51.55 32.24c1.45.14 2.94 0 4.07-.13 7.05-.82 16.44-3.22 23.39-4.4 1.87-.32 3.74-.58 5.4-.21" />
      <path d="M64.79 12.74c.8.8 1.55 2.51 1.55 3.79 0 6.22-.18 25.47-.18 30.41" />
      <path d="M39.38 50.25c2.13.76 5.18.64 7.38.31 12.12-1.81 29.73-4.1 40.5-5.1 2.59-.24 5.06-.45 7.62.09" />
      <path d="M49.21 59.72c.79.79 1.5 2.12 1.61 2.57.93 3.83 1.92 9.82 2.67 15.67.16 1.27.32 2.5.47 3.64" />
      <path d="M50.94 60.67c8.89-1.52 20.81-3.1 28.69-4.13 3.42-.45 4.87 1.33 4.35 4.07-.77 4.05-1.62 7.94-2.81 13.4" />
      <path d="M54.65 78.56c6.72-.81 17.7-2.13 24.4-3.01 1.37-.18 2.58-.34 3.57-.48" />
      <path d="M21.21 19.25c3.63 1.74 9.38 7.17 10.29 9.88" />
      <path d="M13 50.75c2.25 1 3.76.53 4.75.25 3.5-1 8.25-2.88 11-4 2.13-.87 3.38.5 2.25 2.75-7.25 14.51-7.75 9.5.25 19 1.08 1.28.75 2.75-.75 4S21.5 81 20 81.5" />
      <path d="M15.5 83.75c3-.5 8.91-1.16 13.5-.75 8.38.75 30.32 6.96 34.75 8.25 12 3.5 19.5 4.5 26.25 4.75" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(44.5 22.63)">{"1"}</text>
      <text transform="translate(56.25 28.55)">{"2"}</text>
      <text transform="translate(55.5 12.5)">{"3"}</text>
      <text transform="translate(46.5 47.5)">{"4"}</text>
      <text transform="translate(42.5 66.5)">{"5"}</text>
      <text transform="translate(52.5 57.5)">{"6"}</text>
      <text transform="translate(57.5 75.5)">{"7"}</text>
      <text transform="translate(12.5 19.63)">{"8"}</text>
      <text transform="translate(5.25 51.05)">{"9"}</text>
      <text transform="translate(5.5 84.5)">{"10"}</text>
    </g>
  </svg>
);

export default Kanji造;
