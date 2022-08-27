import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji怪: KanjiIconType = (props) => (
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
      <path d="M15 40.25c0 6.61-2.97 16.36-3.75 18.25" />
      <path d="M29.62 33.75c3.24 1.94 8.37 7.96 9.18 10.97" />
      <path d="M24.62 13.75c1 1 1.21 2.38 1.21 4 0 .7.02 51.68.03 71.25v7.25" />
      <path d="M46.22 18.57c1.29.32 2.44.2 5.04-.18 3.61-.52 18.44-3.72 20.22-4.18 2.76-.71 3.89.29 2.68 3.56-7.76 20.98-22.78 34.55-37.34 42.48" />
      <path d="M46.72 26.73c5.44.69 22.34 14.79 36.44 23.16 3.34 1.98 7.09 3.86 9.77 4.72" />
      <path d="M45.13 72.17c2.12.33 4.75.32 6.76.09 7.49-.88 18.99-2 27.87-2.27 1.96-.06 3.96-.15 5.88.3" />
      <path d="M63.92 56.37c.86.86 1.26 2.27 1.27 4.14.06 11.5-.07 25.33-.07 28.37" />
      <path d="M36.88 91.23c2.35.84 5.07.65 7.5.43 14.68-1.33 26.97-2.55 42.75-2.83 2.7-.05 5.35-.08 8 .49" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(9.5 41.5)">{"1"}</text>
      <text transform="translate(30.5 31.13)">{"2"}</text>
      <text transform="translate(15.5 12.63)">{"3"}</text>
      <text transform="translate(45.5 15.5)">{"4"}</text>
      <text transform="translate(40.5 28.5)">{"5"}</text>
      <text transform="translate(37.5 73.63)">{"6"}</text>
      <text transform="translate(54.75 58.5)">{"7"}</text>
      <text transform="translate(36.5 88.5)">{"8"}</text>
    </g>
  </svg>
);

export default Kanji怪;
