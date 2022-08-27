import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji共: KanjiIconType = (props) => (
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
      <path d="M24.5 39.15c2.5.6 4.91.49 7.21.13 9.36-1.44 35.65-5.22 47.54-6.09 2.49-.18 5.03-.36 7.49.18" />
      <path d="M39.12 18.5c.88.88 1.64 2.23 1.71 3.25.55 8.5 1.42 30 1.92 38.25" />
      <path d="M66.62 12.75c.88.88 1.5 2.23 1.46 3.25-.58 13.75-1.33 26.75-1.83 42" />
      <path d="M13.5 63.23c2.26.74 6.41.99 8.65.74 15.72-1.72 47.22-6.16 66.07-6.83 3.76-.13 6.02.35 7.9.73" />
      <path d="M42 72.14c.05.57.11 1.46-.1 2.28-1.27 4.8-9.65 13.33-18.59 21.05" />
      <path d="M68.5 72.62c6.99 4.25 18.06 17.48 19.81 24.09" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(17.5 40.48)">{"1"}</text>
      <text transform="translate(31.5 19.5)">{"2"}</text>
      <text transform="translate(57.5 13.5)">{"3"}</text>
      <text transform="translate(6.5 65.91)">{"4"}</text>
      <text transform="translate(34.5 73.5)">{"5"}</text>
      <text transform="translate(61.5 74.5)">{"6"}</text>
    </g>
  </svg>
);

export default Kanji共;
