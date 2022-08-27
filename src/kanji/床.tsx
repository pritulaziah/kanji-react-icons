import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji床: KanjiIconType = (props) => (
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
      <path d="M48.35 10.63c2.24.88 6.98 6.55 7.42 8.3" />
      <path d="M19.13 27.23c1.52.54 4.3.63 5.82.54 15.8-.91 34.3-5.52 54.11-5.73 2.53-.03 4.05.26 5.31.53" />
      <path d="M24 29c.04 1.36.09 3.5-.08 5.45-1.02 11.5-3.33 39.38-14.35 51.77" />
      <path d="M30.5 50.23c1.42.46 3.04.61 4.67.46 8.32-.76 29.98-4.4 42.57-5.29 1.62-.11 2.64.08 4.26.41" />
      <path d="M53.75 32.75C55 33.25 56 35.47 56 36.5c0 10.5-.25 48.75-.25 55 0 12-5.12 3.88-7.5 1.5" />
      <path d="M55.75 48C49.54 60.36 32.91 79.25 20 86.25" />
      <path d="M57 49c4.88 4.16 27.81 25.03 33.12 29.12 1.8 1.39 3.34 1.98 5.13 2.38" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(42.75 12.5)">{"1"}</text>
      <text transform="translate(21.75 24.13)">{"2"}</text>
      <text transform="translate(15.5 37.5)">{"3"}</text>
      <text transform="translate(30.5 47.5)">{"4"}</text>
      <text transform="translate(45.75 35.5)">{"5"}</text>
      <text transform="translate(40.5 60.5)">{"6"}</text>
      <text transform="translate(69.5 57.5)">{"7"}</text>
    </g>
  </svg>
);

export default Kanji床;
