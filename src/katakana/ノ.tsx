import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Katakanaノ: KanjiIconType = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 109 109"
    {...props}
  >
    <path
      d="M72.37 25.25c.75 2 .92 4.89.25 7.25C65.5 57.5 47.24 77.25 29 89.38"
      style={{
        fill: "none",
        stroke: "#000",
        strokeWidth: 3,
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }}
    />
    <text
      transform="translate(63.5 24.25)"
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      {"1"}
    </text>
  </svg>
);

export default Katakanaノ;
