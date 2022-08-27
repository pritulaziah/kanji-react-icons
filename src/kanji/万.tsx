import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji万: KanjiIconType = (props) => (
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
      <path d="M14.38 24.73c2.3.54 6.52.78 8.81.54 21.57-2.27 44.44-5.64 64.9-5.98 3.83-.06 6.12.26 8.04.53" />
      <path d="M51 41.5c1.45.7 3.19 1.43 5.19 1.74 7.31 1.14 17.05 1.94 22.64 1.5 4.64-.37 6.38 1.08 5.17 4.73C77.88 68 72.75 78.75 63.87 90.4c-7.6 9.97-10.12 3.22-12.62.2" />
      <path d="M51.75 25.5c.5 2 .22 3.78-.21 5.89-2.59 12.41-16.79 41.99-37.98 56.58" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(7.5 26.5)">{"1"}</text>
      <text transform="translate(57.5 41.5)">{"2"}</text>
      <text transform="translate(43.5 33.5)">{"3"}</text>
    </g>
  </svg>
);

export default Kanji万;
