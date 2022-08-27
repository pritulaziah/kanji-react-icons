import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji火: KanjiIconType = (props) => (
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
      <path d="M24.25 34c3.27 3.33 8.5 13 9.5 17.75" />
      <path d="M83 27.25c.5 1.38.22 2.74-.5 4.25-2.38 5-7.5 12.12-12.75 17.25" />
      <path d="M52.5 14.25c1 1.25 1.5 3.12 1.5 5C54 69 39.62 80 21 91.5" />
      <path d="M52.75 50c12.49 14.06 25.01 28.42 33.62 36.13 2.7 2.42 4.9 4.02 8.38 4.87" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(16.5 32.5)">{"1"}</text>
      <text transform="translate(74.5 26.5)">{"2"}</text>
      <text transform="translate(41.5 14.5)">{"3"}</text>
      <text transform="translate(55.25 67.13)">{"4"}</text>
    </g>
  </svg>
);

export default Kanji火;
