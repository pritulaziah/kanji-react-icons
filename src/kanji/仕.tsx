import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji仕: KanjiIconType = (props) => (
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
      <path d="M34.5 14.25c.13 1.25-.16 2.46-.89 4.35C28.88 31 22.05 43.75 10.12 58.12" />
      <path d="M24.03 41.5c.92.92 1.75 2.38 1.75 4.12 0 9.46-.02 33.3-.03 46.12v6.75" />
      <path d="M34.88 47.47c2.1.67 5.94.8 8.04.67 18.7-1.25 31.09-2.8 48.25-3.22 3.49-.08 5.59.32 7.34.65" />
      <path d="M65.75 15.75c1.19 1.19 1.75 2.38 1.75 3.75v65" />
      <path d="M37 86.17c3.05.71 5.58.68 7.56.56 13.82-.86 31.07-1.98 44.74-2.32 3.29-.08 5.56.13 7.21.54" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(25.5 15.13)">{"1"}</text>
      <text transform="translate(18.5 58.5)">{"2"}</text>
      <text transform="translate(35.25 44.5)">{"3"}</text>
      <text transform="translate(56.5 16.5)">{"4"}</text>
      <text transform="translate(35.25 82.63)">{"5"}</text>
    </g>
  </svg>
);

export default Kanji仕;
