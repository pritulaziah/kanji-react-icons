import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji伐: KanjiIconType = (props) => (
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
      <path d="M32.99 15.39c.13 1.16.06 2.38-.37 3.78-3 9.83-11.27 26.62-21.81 38.8" />
      <path d="M25.53 40.5c1.05 1.05 1.26 2.38 1.26 4.23 0 10.25-.03 29.62-.04 41.77v7.88" />
      <path d="M37.75 41.76c2.75.49 4.25.5 6.73-.04 7.9-1.71 23.27-6.46 34.8-8.07 2.25-.31 4.97-.4 7.22.06" />
      <path d="M55 11.75c1.31 1.31 2.16 3.12 2.46 6.17C60.88 52.5 72 78.5 89.51 93.46c5.64 4.82 5.18 1.02 4.38-6.94" />
      <path d="M84.69 45.39c-.07 1.73-.54 3.07-1.5 4.95-4.57 8.91-18.32 25.41-39.63 35.88" />
      <path d="M81.75 14.12c3.18 2.08 8.27 6.82 9.75 10.38" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(24.5 15.5)">{"1"}</text>
      <text transform="translate(19.5 56.5)">{"2"}</text>
      <text transform="translate(39.75 37.63)">{"3"}</text>
      <text transform="translate(46.5 9.5)">{"4"}</text>
      <text transform="translate(75.5 45.13)">{"5"}</text>
      <text transform="translate(74.25 13.5)">{"6"}</text>
    </g>
  </svg>
);

export default Kanji伐;
