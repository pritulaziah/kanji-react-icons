import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji典: KanjiIconType = (props) => (
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
      <path d="M26.47 32.59c.41.97.83 1.46.83 2.75 0 1.3 2.88 36.81 2.88 37.46" />
      <path d="M27.98 34.41c3.8-.61 48.78-5.84 52.12-6.2 1.9-.21 4.15.79 3.92 3.16-.35 3.65-2.93 21.58-3.92 36.91" />
      <path d="M42.72 16.98c.86.41 1.52 1.85 1.55 2.69.53 18.24 1.12 42.73 1.71 50.4" />
      <path d="M64.81 13.25c.86.42 1.6 1.85 1.54 2.69-1.64 25.07-2.82 35.68-4.01 53.09" />
      <path d="M28.59 52.34c12.66-1.34 21.66-2.09 35.15-2.72 1.46-.07 2.87-.23 4.23-.34" />
      <path d="M15.75 73.2c1.52.54 4.31.73 5.82.54 11.68-1.49 51.18-4.99 69.11-5.23 2.53-.03 4.05.26 5.31.53" />
      <path d="M41.25 77.14c.06.46.12 1.19-.11 1.85-1.36 3.91-9.16 12.48-19.83 17.72" />
      <path d="M66.25 79.37c7.78 2.85 20.1 11.71 22.04 16.13" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(19.25 41.5)">{"1"}</text>
      <text transform="translate(29.25 29.5)">{"2"}</text>
      <text transform="translate(33.5 16.5)">{"3"}</text>
      <text transform="translate(55.5 13.5)">{"4"}</text>
      <text transform="translate(33.75 48.13)">{"5"}</text>
      <text transform="translate(17.5 69.5)">{"6"}</text>
      <text transform="translate(31.5 82.5)">{"7"}</text>
      <text transform="translate(56.25 82.5)">{"8"}</text>
    </g>
  </svg>
);

export default Kanji典;
