import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Katakanaポ: KanjiIconType = (props) => (
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
      <path d="M22.63 40.38c2.62 1 4.75 1.71 9.12 1.25C49.5 39.75 61 38.88 77.13 37.75c3.74-.26 7.38-.12 11.12.62" />
      <path d="M53.75 17.12c1.38 1.88 1.38 4.5 1.38 7.38s-.12 46.62-.12 51.88c0 23.12-6.25 11.25-9.75 9.62" />
      <path d="M27.38 59.38C27.88 68.63 26 76 21 81.26" />
      <path d="M73.51 53c10.87 9.62 15.5 17.62 16.62 24.88" />
      <path d="M79.75 25.62c-9.62 0-9.25-14.25 0-14.25 9.76.01 9.5 14.25 0 14.25" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(16.01 38.25)">{"1"}</text>
      <text transform="translate(44.76 15.75)">{"2"}</text>
      <text transform="translate(21.51 57.13)">{"3"}</text>
      <text transform="translate(65.51 51.13)">{"4"}</text>
      <text transform="translate(76.76 33)">{"5"}</text>
    </g>
  </svg>
);

export default Katakanaポ;
