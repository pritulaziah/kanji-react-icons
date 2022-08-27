import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji市: KanjiIconType = (props) => (
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
      <path d="M48.75 11.75c3.2 1.47 8.14 7.18 8.47 10.08" />
      <path d="M15.75 29.61c1.42.1 4.68.69 6.06.55C33 29 72.75 24.25 87.95 23.95c2.35-.05 3.55.05 5.3.7" />
      <path d="M26.31 45.5c.71.38 2.35 3.34 2.35 4.11 0 4.15-.09 29.36-.23 34.11" />
      <path d="M29.3 48.96c4.45-.27 46.03-4.92 49.35-5.09 3.9-.19 4.51 3.35 4.6 5.09.5 9.29.16 22.12-1.15 29.97-1.35 8.07-6.24.07-7.72-1.27" />
      <path d="M53.53 33.38c.71.38 2.21 2.85 2.35 3.61.14.76-1.09 55.38-1.23 60.14" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(44.25 9.13)">{"1"}</text>
      <text transform="translate(8.25 28.63)">{"2"}</text>
      <text transform="translate(18.75 49.63)">{"3"}</text>
      <text transform="translate(30 45)">{"4"}</text>
      <text transform="translate(57 36)">{"5"}</text>
    </g>
  </svg>
);

export default Kanji市;
