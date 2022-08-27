import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji目: KanjiIconType = (props) => (
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
      <path d="M30 19.55c.76 1.7 1.86 2.96 1.86 5.22s-.5 67.21-.5 68.34" />
      <path d="M31.62 21.75c4.28-.28 38.43-4.4 42.33-4.74 3.25-.28 5.82 1.58 5.54 3.68-.35 2.66-.77 40.43-.76 65.32 0 2.56-.24 4-.49 6.5" />
      <path d="M33.05 43.14c7.74-.35 15.47-1.24 23.18-1.94l6.91-.62" />
      <path d="M33.4 65.95c7.43-.62 16.85-1.4 24.28-2.05 2.07-.18 4.14-.36 6.16-.52" />
      <path d="M32.25 90.5c9.75-.5 35.02-2.53 46.04-2.53" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(21.75 27.13)">{"1"}</text>
      <text transform="translate(39.75 16.63)">{"2"}</text>
      <text transform="translate(39.75 37.63)">{"3"}</text>
      <text transform="translate(38.25 60.13)">{"4"}</text>
      <text transform="translate(39.75 84.13)">{"5"}</text>
    </g>
  </svg>
);

export default Kanji目;
