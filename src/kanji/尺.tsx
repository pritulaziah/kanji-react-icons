import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji尺: KanjiIconType = (props) => (
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
      <path d="M32.89 22.57c1.99.56 4.43.99 6.02.79 9.06-1.11 29.27-3.25 35.74-4.01 4.01-.47 5.75.92 4.89 5.03C78.57 29 77.5 32.12 75 40.75" />
      <path d="M37 45.5c3.45-.2 24.9-2.14 36-3.24 2.8-.28 4.9-.47 5.81-.52" />
      <path d="M36.09 23.62c.96.96 1.37 2.63 1.31 4.39-1.02 30.61-7.52 49.74-19.4 61.24" />
      <path d="M45.25 46c3.88 2.5 23.79 25.86 35.65 37.1 3.98 3.77 7.6 6.9 11.6 9.15" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(38.5 20.5)">{"1"}</text>
      <text transform="translate(42.5 41.5)">{"2"}</text>
      <text transform="translate(29.5 32.5)">{"3"}</text>
      <text transform="translate(55.5 53.5)">{"4"}</text>
    </g>
  </svg>
);

export default Kanji尺;
