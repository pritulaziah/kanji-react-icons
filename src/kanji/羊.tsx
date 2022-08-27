import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji羊: KanjiIconType = (props) => (
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
      <path d="M33.89 11.71c3.06 2.03 7.9 8.35 8.67 11.51" />
      <path d="M69.9 10.64c.03.38.12 1.25-.06 1.79C68.5 16.25 65 21 59.78 25.95" />
      <path d="M26.5 31.64c2.88.44 5.74.25 8.63.01 11-.9 27.5-3.4 39.36-3.89 2.52-.1 5.16-.34 7.64.25" />
      <path d="M28.25 49.64c2.38.61 4.96.67 7.14.34 11.36-1.73 26.36-3.23 36.74-3.73 2.43-.12 5.23-.07 7.62.51" />
      <path d="M13.75 68.95c3.96.68 8.72.42 12.73.13 15.53-1.16 37.11-3.35 55.58-3.77 4.08-.09 8.3-.28 12.32.49" />
      <path d="M52.75 32.75c1 1 1.5 2.5 1.5 3.5v64.24" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(27.75 12.13)">{"1"}</text>
      <text transform="translate(60.75 10.63)">{"2"}</text>
      <text transform="translate(18.75 31.5)">{"3"}</text>
      <text transform="translate(20.25 50.5)">{"4"}</text>
      <text transform="translate(6.75 69.5)">{"5"}</text>
      <text transform="translate(45.5 40.63)">{"6"}</text>
    </g>
  </svg>
);

export default Kanji羊;
