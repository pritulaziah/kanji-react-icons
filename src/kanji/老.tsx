import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji老: KanjiIconType = (props) => (
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
      <path d="M31 30.45c.77.33 2.19.37 2.96.33 8.79-.53 25.79-3.53 33.21-4.25 1.28-.12 2.06.16 2.71.32" />
      <path d="M49.42 12.37c.12.29 1.65 1.53 1.77 3.39.57 8.93.31 26.2.31 29.25" />
      <path d="M17.25 49.28c1.57.69 4.47 1.02 6.01.69 6.35-1.35 45.49-5.97 65.37-7.18 2.61-.16 4.18.33 5.49.68" />
      <path d="M78.59 15.98c.18 1.61.95 4.55-.35 6.45C61.56 46.85 44.5 65.5 16.81 84.22" />
      <path d="M52.25 76c3.5-.5 17.25-4 23-5 1.09-.19 2.5-.5 4.75-.5" />
      <path d="M50.6 62.25c.78.84.84 1.39 1.1 2.51s.26 19.71.26 23.21c0 8.97 10.5 7.57 19.44 7.57 6.94 0 12.71-.47 15.33-2.98 2.61-2.51 2.29-5.42 2.56-7.93" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(24.5 32.5)">{"1"}</text>
      <text transform="translate(39.5 13.5)">{"2"}</text>
      <text transform="translate(9.5 50.5)">{"3"}</text>
      <text transform="translate(72.5 15.13)">{"4"}</text>
      <text transform="translate(55 72)">{"5"}</text>
      <text transform="translate(44.5 71)">{"6"}</text>
    </g>
  </svg>
);

export default Kanji老;
