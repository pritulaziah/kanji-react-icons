import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji米: KanjiIconType = (props) => (
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
      <path d="M29.52 28.08c2.98 1.94 7.49 7.4 8.23 10.42" />
      <path d="M78.52 20.14c.03.37.07.95-.07 1.47-.82 3.11-5.49 9.93-11.9 14.1" />
      <path d="M18.75 49.25c.75.25 2.75.66 4.75.75 5.5.25 49.75-6.5 58.5-6 2 .11 2.5-.25 3.75 0" />
      <path d="M51.25 13.5c1.25.5 2 2.25 2.25 3.25s-.25 67.75-.25 74c0 14-5.62 2.38-6.75 1.25" />
      <path d="M51.25 47.25C44.69 60.25 28.75 78.5 14 86" />
      <path d="M56 48.75c5.02 4.8 27.02 27.53 32.47 32.25 1.85 1.6 3.43 2.29 5.28 2.75" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(20.5 26.5)">{"1"}</text>
      <text transform="translate(69.5 19.5)">{"2"}</text>
      <text transform="translate(10.5 49.5)">{"3"}</text>
      <text transform="translate(42.5 14.5)">{"4"}</text>
      <text transform="translate(36.5 59.5)">{"5"}</text>
      <text transform="translate(67.5 57.5)">{"6"}</text>
    </g>
  </svg>
);

export default Kanji米;
