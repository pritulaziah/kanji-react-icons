import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji実: KanjiIconType = (props) => (
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
      <path d="M48.39 11.25c4.08 1.2 8.84 6.14 9.81 9.5" />
      <path d="M26.63 26.78c0 2.82-3.96 13.59-5.08 15.47" />
      <path d="M28.93 27.68c1.24.07 4 0 5.6-.18 13.73-1.56 42.47-3.8 48.74-3.8 6.27 0 4.7 2.35 4.48 3.76-.22 1.41-3.27 3.06-4.84 3.76" />
      <path d="M35.25 43.05c.94.38 2.66.49 3.6.38 5.98-.66 24.15-2.93 30.11-3.38 1.56-.12 2.5.18 3.29.37" />
      <path d="M32.75 55.4c1.02.37 2.89.49 3.9.37C43 55 63 52.51 72.68 52.51c1.7 0 2.72.18 3.57.36" />
      <path d="M24 69.65c1.02.37 2.89.49 3.9.37 6.35-.77 44.35-4.26 54.03-4.26 1.7 0 2.72.18 3.57.36" />
      <path d="M53.02 32c.48 1 1.31 4.03 1.33 6.31.41 42.6-9.22 49.18-29.85 60.44" />
      <path d="M57.75 74.5c9.65 5.74 18.81 15.84 24.7 23.65" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(42.5 11.5)">{"1"}</text>
      <text transform="translate(18.75 31.63)">{"2"}</text>
      <text transform="translate(32.25 24.13)">{"3"}</text>
      <text transform="translate(30.5 40.5)">{"4"}</text>
      <text transform="translate(26.25 57.13)">{"5"}</text>
      <text transform="translate(15.75 72.13)">{"6"}</text>
      <text transform="translate(43.5 36.5)">{"7"}</text>
      <text transform="translate(66.75 78.77)">{"8"}</text>
    </g>
  </svg>
);

export default Kanji実;
