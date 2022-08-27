import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji姓: KanjiIconType = (props) => (
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
      <path d="M28.81 18.62c.4 1 1.12 2.63.91 4.07-1.01 7.08-6.53 33.74-10.98 42.02-.91 1.7.41 2.36.91 2.52 9.68 3.09 16.93 8.25 22.35 15.56" />
      <path d="M41.25 38.39c.08 1.27.14 4.34-.16 6.18-2.41 14.84-9.36 35.89-26.59 46.93" />
      <path d="M11 49.72c.75.94 1.75 1.62 3.75 1.39 2.15-.24 21.34-4.35 30.25-6.73" />
      <path d="M57.52 29.49c.03.54.05 1.39-.05 2.17-.59 4.57-3.95 14.61-8.55 20.75" />
      <path d="M57.43 41.87c.61.37 1.74.44 2.35.37 4.42-.53 25.55-2.1 29.37-2.67 1.02-.15 1.44-.08 1.98-.02" />
      <path d="M54.43 64.8c.61.27 1.74.33 2.35.27 4.42-.39 27.71-2.34 31.52-2.76 1.02-.11 1.44-.06 1.98-.02" />
      <path d="M44.93 91.26c.96.29 2.71.35 3.67.29 6.9-.42 38.24-1.69 44.19-2.13 1.59-.12 2.93.24 4.4.95" />
      <path d="M69.15 16.13c.74.51 2.29 3.82 2.44 4.84s-.1 61.65-.24 68.02" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(20.25 21.13)">{"1"}</text>
      <text transform="translate(33.75 34.63)">{"2"}</text>
      <text transform="translate(3.75 52.63)">{"3"}</text>
      <text transform="translate(49.5 29.5)">{"4"}</text>
      <text transform="translate(62.25 39.05)">{"5"}</text>
      <text transform="translate(51.5 61.55)">{"6"}</text>
      <text transform="translate(46.5 88.5)">{"7"}</text>
      <text transform="translate(59.5 17.5)">{"8"}</text>
    </g>
  </svg>
);

export default Kanji姓;
