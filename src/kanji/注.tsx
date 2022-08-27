import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji注: KanjiIconType = (props) => (
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
      <path d="M22.13 16.5c3.22 1.34 8.31 5.51 9.12 7.59" />
      <path d="M12 39.75c3.71 1.54 9.57 6.35 10.5 8.75" />
      <path d="M13.25 90.21c1.5 1.31 3.31 1.36 4.25-.25 2.75-4.7 5.5-10.45 8-16.45" />
      <path d="M57.77 14.58c4.43 1.81 10.94 6.91 12.04 9.74" />
      <path d="M42 40.02c.95.44 4.04.15 5 .03 10.5-1.29 27.25-3.08 38-3.53 1.46-.06 2.79.09 4 .46" />
      <path d="M46.75 62.65c.94.48 4.04.31 5 .21 11.5-1.2 16.08-2.54 29-3.34 1.17-.07 3.75-.2 5.5.23" />
      <path d="M32.75 89.02c.92.27 5.7.14 7.25 0 21.75-1.91 31.5-2.88 52.25-3.37 2.5-.06 5.5.45 6.75.88" />
      <path d="M64 39.79c1 1.06 2 3.09 2 3.94 0 5.95.5 35.46.25 41.41" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(14.25 13.63)">{"1"}</text>
      <text transform="translate(3.75 39.13)">{"2"}</text>
      <text transform="translate(5.25 97.63)">{"3"}</text>
      <text transform="translate(47.25 13.63)">{"4"}</text>
      <text transform="translate(35.25 36.13)">{"5"}</text>
      <text transform="translate(39.75 63.13)">{"6"}</text>
      <text transform="translate(32.25 84.77)">{"7"}</text>
      <text transform="translate(56.25 49.63)">{"8"}</text>
    </g>
  </svg>
);

export default Kanji注;
