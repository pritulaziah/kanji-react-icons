import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji伺: KanjiIconType = (props) => (
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
      <path d="M32.25 13.14c.13 1.23.22 2.78-.11 4.29C30 27 23 45.12 13.06 59.72" />
      <path d="M26.53 40.75c.98.98 1.26 2.25 1.26 3.98 0 10.23-.01 30.65-.01 44.52 0 3.57-.03 6.5-.03 8.37" />
      <path d="M40 22.74c2.55.46 5.19.6 7.76.19C63 20.5 74.88 18.38 85.31 16.99c4.18-.55 6.01 1.88 6.01 6.07 0 2.36-.03 59.12-.03 64.54 0 14.15-5.91 5.9-8.72 2.82" />
      <path d="M40 39.64c2.5.49 5.07.21 7.15-.11 6.36-.97 16.64-3.03 22.98-3.84 2.06-.26 4.36-.42 6.37.07" />
      <path d="M44.75 54.91c.86.86 1 1.97 1.21 3.45.45 3.23 1.29 8.45 1.83 13.17.18 1.58.35 3.1.52 4.46" />
      <path d="M46.74 56.35c7.76-1.72 15.41-2.81 22.28-3.6 2.56-.29 5.11 1.12 4.14 4.26-1.66 5.37-2.56 7.4-4.31 13.26" />
      <path d="M49.13 73.44c5.73-.56 10.72-1.31 17.64-1.95 1.68-.15 3.44-.3 5.31-.43" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(23.5 12.13)">{"1"}</text>
      <text transform="translate(20.5 60.5)">{"2"}</text>
      <text transform="translate(41.5 20.5)">{"3"}</text>
      <text transform="translate(41.25 36.5)">{"4"}</text>
      <text transform="translate(38.5 62.5)">{"5"}</text>
      <text transform="translate(48.75 52.5)">{"6"}</text>
      <text transform="translate(51.75 69.05)">{"7"}</text>
    </g>
  </svg>
);

export default Kanji伺;
