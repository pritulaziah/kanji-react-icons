import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji斤: KanjiIconType = (props) => (
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
      <path d="M65.51 10.5c0 1.25-1.14 2.34-1.95 2.96C57.75 18 45.12 25.38 30.5 30.75" />
      <path d="M27.43 30.38c1.22 1.22 1.51 2.88 1.52 4.9.18 28.1-2.2 41.6-12.39 54.83" />
      <path d="M32.25 44.19c2.79.87 6.84.13 9.66-.3 10.42-1.56 28.97-4.39 39.59-5.48 3.06-.31 6.43-.64 9.5-.07" />
      <path d="M60.87 44.8c1.04 1.04 1.57 2.33 1.57 4.26 0 6.42-.05 28.89-.07 44.56v7.62" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(56.25 9.5)">{"1"}</text>
      <text transform="translate(20.5 37.63)">{"2"}</text>
      <text transform="translate(34.5 41.5)">{"3"}</text>
      <text transform="translate(53.5 54.5)">{"4"}</text>
    </g>
  </svg>
);

export default Kanji斤;
