import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji人: KanjiIconType = (props) => (
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
      <path d="M54.5 20c.37 2.12.23 4.03-.22 6.27-2.6 13.21-16.03 45.98-37.78 60.98" />
      <path d="M46 54.25c6.12 6 25.51 22.24 35.52 29.72 3.66 2.73 6.94 4.64 11.48 5.53" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(45.5 19.5)">{"1"}</text>
      <text transform="translate(52.5 55.63)">{"2"}</text>
    </g>
  </svg>
);

export default Kanji人;
