import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji団: KanjiIconType = (props) => (
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
      <path d="M17.5 17.32c.97.97 1.65 3.06 1.65 4.41 0 8.9.02 58.27.02 67.03 0 1.93-.09 4-.09 6.25" />
      <path d="M20.05 19.4c23.33-2.65 46.33-4.9 64.7-5.61C88.6 13.64 90 15.6 90 19.5c0 14.5.1 43.5.1 67 0 3.2-.12 6.62-.12 9.5" />
      <path d="M28.89 43.81c1.74.32 4.4.28 6.49.06 10.47-1.13 27.39-4.02 38.5-4.81 2.03-.14 3.99-.24 6 .17" />
      <path d="M62.37 24.33c.77.77 1.56 2.04 1.56 3.54 0 13.09.09 44.73.09 47.91 0 7.72-4.82 1.14-6.23.16" />
      <path d="M39.07 54.03c3.56 2.97 7.56 8.72 9.25 13.31" />
      <path d="M20.3 91.01c17.58-.89 50.27-1.85 68.69-2.26" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(12.5 27.13)">{"1"}</text>
      <text transform="translate(22.5 16.5)">{"2"}</text>
      <text transform="translate(29.25 41.5)">{"3"}</text>
      <text transform="translate(53.5 27.5)">{"4"}</text>
      <text transform="translate(32.25 56.5)">{"5"}</text>
      <text transform="translate(24.75 87.05)">{"6"}</text>
    </g>
  </svg>
);

export default Kanji団;
