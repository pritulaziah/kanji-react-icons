import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji一: KanjiIconType = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 109 109"
    {...props}
  >
    <path
      d="M11 54.25c3.19.62 6.25.75 9.73.5 20.64-1.5 50.39-5.12 68.58-5.24 3.6-.02 5.77.24 7.57.49"
      style={{
        fill: "none",
        stroke: "#000",
        strokeWidth: 3,
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }}
    />
    <text
      transform="translate(4.25 54.13)"
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      {"1"}
    </text>
  </svg>
);

export default Kanji一;
