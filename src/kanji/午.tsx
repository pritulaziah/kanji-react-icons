import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji午: KanjiIconType = (props) => (
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
      <path d="M37.5 9.14c.06.7.22 1.85-.11 2.83C35.25 18.25 27 29.62 17.5 39" />
      <path d="M32.13 27.28c2.75.09 4.3-.07 5.82-.21 12.92-1.2 20.78-2.82 33.1-4.68 2.49-.38 4.69-.24 5.95.03" />
      <path d="M13.88 54.53c3 .72 7.23.71 9.74.46 19.64-1.99 42.64-4.99 63-6.16 4.22-.24 6.77.22 8.89.45" />
      <path d="M53.06 28.13c1.03 1.03 1.79 2.37 1.79 4.33 0 .88-.02 44.17-.13 61.04-.02 2.88-.03 4.96-.05 5.88" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(29.5 9.5)">{"1"}</text>
      <text transform="translate(40.5 23.5)">{"2"}</text>
      <text transform="translate(6.5 57.5)">{"3"}</text>
      <text transform="translate(46.5 35.5)">{"4"}</text>
    </g>
  </svg>
);

export default Kanji午;
