import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji昇: KanjiIconType = (props) => (
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
      <path d="M31.02 15.01c.52.62.84.95 1.04 1.75.94 3.75 4.65 25.6 4.65 26.01" />
      <path d="M33.42 16.11c2.94-.1 39.13-4.49 41.8-4.62 2.23-.1 3.04 2.12 2.99 2.75C78 17 74.25 33.75 71.7 38.96" />
      <path d="M34.44 28.74c7.39-.85 14.81-1.54 22.22-2.22 2.18-.2 4.33-.39 6.36-.57" />
      <path d="M38.26 40.19c8.09-.44 23.47-2.62 33.55-3" />
      <path d="M42.81 44c.06.38.24 1.09-.12 1.52-4.51 5.33-11.18 10.23-22.93 14.53" />
      <path d="M39.78 54.75c.71.96 1.47 1.97 1.42 3.38C40.75 71.25 36 90 20.25 96.25" />
      <path d="M14.13 69.41c1.46.37 4.14.49 5.6.37 16.28-1.28 51-6.17 70.29-6.49 2.43-.04 3.89.18 5.11.36" />
      <path d="M66.37 45.25c.94.94 1.46 2.23 1.46 3.25 0 6.75 0 43.25-.22 49.5" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(26.25 24.13)">{"1"}</text>
      <text transform="translate(35.25 12.5)">{"2"}</text>
      <text transform="translate(40.5 25.55)">{"3"}</text>
      <text transform="translate(40.5 37.48)">{"4"}</text>
      <text transform="translate(30.5 50.9)">{"5"}</text>
      <text transform="translate(33.75 62.83)">{"6"}</text>
      <text transform="translate(6.75 71.5)">{"7"}</text>
      <text transform="translate(56.5 48.5)">{"8"}</text>
    </g>
  </svg>
);

export default Kanji昇;
