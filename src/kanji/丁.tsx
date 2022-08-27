import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji丁: KanjiIconType = (props) => (
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
      <path d="M14 24.17c2.44.56 6.92.82 9.35.56 18.9-1.99 39.53-5.36 60.62-6.48 4.05-.21 6.5.27 8.53.55" />
      <path d="M55.77 23.08c1.07 1.07 1.75 2.92 1.75 5.06v59.55c0 11.31-8.46.51-9.96-.75" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(7.5 25.63)">{"1"}</text>
      <text transform="translate(49.5 35.5)">{"2"}</text>
    </g>
  </svg>
);

export default Kanji丁;
