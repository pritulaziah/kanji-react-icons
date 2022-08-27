import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji干: KanjiIconType = (props) => (
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
      <path d="M28.63 21.62c2.62.63 5.47.36 7.75.15 9.37-.89 26.14-2.9 36.63-3.81 2.7-.23 5.47-.34 8.12.38" />
      <path d="M16.88 49.03c3.37.72 7.13.53 10.62.11 15.17-1.86 39.74-4.77 56.13-5.91 3.1-.22 6.18-.26 9.25.3" />
      <path d="M52.81 21.63c1.22 1.22 1.79 2.99 1.79 4.83 0 .85-.02 43.7-.12 61.54-.02 3.65-.04 6.3-.06 7.38" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(21.75 23.5)">{"1"}</text>
      <text transform="translate(9.5 51.13)">{"2"}</text>
      <text transform="translate(46.5 31.63)">{"3"}</text>
    </g>
  </svg>
);

export default Kanji干;
