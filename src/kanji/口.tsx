import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji口: KanjiIconType = (props) => (
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
      <path d="M22.25 33.25c1.25 1.25 2 2.88 2.26 4.43 1.16 7.03 3.15 23.61 4.68 37.85.27 2.56.54 5.07.81 7.47" />
      <path d="M25.29 35.67c17.46-2.17 41.59-5.04 55.49-5.93 3.94-.25 6.33 2.72 5.72 5.14-2.25 8.87-6.62 26.5-9 38.87" />
      <path d="M30.25 77.75c10.5-.5 30.53-2.3 44.99-3.04 2.05-.11 3.99-.18 5.76-.21" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(15.5 40.5)">{"1"}</text>
      <text transform="translate(28.5 30.5)">{"2"}</text>
      <text transform="translate(34.5 72.5)">{"3"}</text>
    </g>
  </svg>
);

export default Kanji口;
