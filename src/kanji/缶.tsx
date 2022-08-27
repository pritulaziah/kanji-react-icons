import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji缶: KanjiIconType = (props) => (
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
      <path d="M40.99 14.64c.06.77-.16 2.07-.62 3.11-2.87 6.5-11.1 19.94-22.87 28.75" />
      <path d="M36.63 30.42c2.12.46 4.21.31 6.01.15 8.99-.81 23-2.83 32.5-4.15 2.45-.34 4.58-.72 7-.13" />
      <path d="M15.38 54.98c3.2 1.14 7.68.81 10.99.42 20.88-2.52 40.38-4.89 58.75-5.77 3.19-.15 6.36-.23 9.5.44" />
      <path d="M53.06 31.63c1.09 1.09 1.26 2.62 1.26 4.5v51.75" />
      <path d="M27.06 66.38c.84.84 1.01 2.24 1.01 3.75 0 5.62-.07 7.37 0 18 .02 3.15.11 3.91 3.3 3.49 15.12-2 29.5-3.38 48.7-4.24" />
      <path d="M82.56 60.88c.69 1.12.94 2.49.76 4.5-.36 4.06-1.1 11.75-1.85 19.89-.27 2.95-.57 5.88-.9 8.61" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(32.5 14.5)">{"1"}</text>
      <text transform="translate(45.75 27.13)">{"2"}</text>
      <text transform="translate(7.5 57.13)">{"3"}</text>
      <text transform="translate(45.75 40.63)">{"4"}</text>
      <text transform="translate(18.75 68.5)">{"5"}</text>
      <text transform="translate(72.5 62.5)">{"6"}</text>
    </g>
  </svg>
);

export default Kanji缶;
