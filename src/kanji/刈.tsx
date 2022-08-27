import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji刈: KanjiIconType = (props) => (
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
      <path d="M40.87 19.35c.42 1.56.52 2.74-.04 5.51C35.84 49.6 27.62 68.62 14.5 82" />
      <path d="M15.62 38c12.36 7.39 25.95 21.42 32.49 32.57" />
      <path d="M63.02 21.33c.98.92 1.76 2.67 1.76 5.02 0 7.04-.01 28.57-.02 40.15v7" />
      <path d="M87.02 14.33c1.26 1.26 1.76 2.79 1.76 5.02 0 14.56-.01 64.16-.01 69.12 0 13.14-7.21 1.5-8.71.25" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(33.75 18.13)">{"1"}</text>
      <text transform="translate(11.25 34.63)">{"2"}</text>
      <text transform="translate(54.5 21.5)">{"3"}</text>
      <text transform="translate(77.5 14.5)">{"4"}</text>
    </g>
  </svg>
);

export default Kanji刈;
