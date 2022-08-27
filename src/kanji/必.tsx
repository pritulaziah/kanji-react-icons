import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji必: KanjiIconType = (props) => (
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
      <path d="M68.68 24.89c.13 1.54.28 3.97-.26 6.18-3.22 13.04-18.67 45.18-45.86 60.15" />
      <path d="M31 44.5C40 66 51.71 87.55 77.5 87.69c10.25.06 7.75-3.89 3.5-9.35" />
      <path d="M40.5 24.5c1.76 4.45 6.4 14.4 7.5 8.11" />
      <path d="M17.5 51.31c.21 3.06-2.08 16.59-3.75 21.69" />
      <path d="M85.5 46.6c4 3.16 8.75 9.65 10.25 15.82" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(60.5 24.06)">{"1"}</text>
      <text transform="translate(24.5 43.5)">{"2"}</text>
      <text transform="translate(34.25 24)">{"3"}</text>
      <text transform="translate(11.25 49.63)">{"4"}</text>
      <text transform="translate(77.5 46.5)">{"5"}</text>
    </g>
  </svg>
);

export default Kanji必;
