import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji日: KanjiIconType = (props) => (
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
      <path d="M31.75 24.75c.74 1.5 1.49 2.25 1.49 4.25s-.25 58 0 60" />
      <path d="M34.48 26c4.21-.25 36.19-3.2 40.02-3.5 3.19-.25 5.25 2.77 5 4.25-.5 3-.49 60.75-.49 62.25" />
      <path d="M33.72 55.5c7.4 0 14.88-.93 22.25-1.5 2.44-.19 4.88-.38 7.22-.55" />
      <path d="M33.98 86.75c8.77-.5 37.92-2.5 44.81-2.5" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(25.25 32.63)">{"1"}</text>
      <text transform="translate(34.5 22.5)">{"2"}</text>
      <text transform="translate(37.5 51.5)">{"3"}</text>
      <text transform="translate(37.5 83.5)">{"4"}</text>
    </g>
  </svg>
);

export default Kanji日;
