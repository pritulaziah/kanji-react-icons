import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji呪: KanjiIconType = (props) => (
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
      <path d="M11.25 28.79c.76.95 1.19 2.02 1.3 3.23.81 5.79 1.57 10.81 2.23 15.98.32 2.52.61 5.06.88 7.75" />
      <path d="M13.33 30.22c8.11-1.41 15.1-1.98 19.67-2.59 3.55-.48 5.38.72 4.73 4.54-.96 5.68-2.12 11.67-3.37 18.94" />
      <path d="M16.82 53.55c4.98-.51 9.17-.84 14.18-1.26 1.7-.14 3.5-.29 5.45-.45" />
      <path d="M47.86 20.6a7.94 7.94 0 0 1 1.73 3.42c1.05 5.85 1.78 10.19 2.63 16.5.29 2.16.59 4.55.92 7.3" />
      <path d="M49.93 22.24c9.3-.99 24.1-2.06 32.19-2.76 4.61-.4 5.94.86 5.09 5.53-.84 4.6-2.02 9.31-3.81 17.17" />
      <path d="M54.02 45.09c7.97-.63 17.14-1.2 24.47-1.76 2.53-.19 4.85-.38 6.82-.58" />
      <path d="M63.47 48.51c0 1.24-.16 2.6-.65 3.97-3.69 10.27-11.19 25.27-26.7 37.27" />
      <path d="M72.24 46.75c.88.88 1.1 2.12 1.1 3.6 0 6.49-.08 21.89-.08 30.88 0 10.09 1.99 11.51 12.48 11.27 9.76-.22 11.03-2.08 11.03-11.5" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(5.5 37.5)">{"1"}</text>
      <text transform="translate(13.5 26.5)">{"2"}</text>
      <text transform="translate(19.5 49.85)">{"3"}</text>
      <text transform="translate(43.25 30.5)">{"4"}</text>
      <text transform="translate(52.5 18.5)">{"5"}</text>
      <text transform="translate(58.25 41.5)">{"6"}</text>
      <text transform="translate(54.5 55.5)">{"7"}</text>
      <text transform="translate(76.5 56.1)">{"8"}</text>
    </g>
  </svg>
);

export default Kanji呪;
