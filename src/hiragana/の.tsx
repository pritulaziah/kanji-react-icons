import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Hiraganaの: KanjiIconType = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 109 109"
    {...props}
  >
    <path
      d="M53.82 28.62c1 1.5 1.34 4.12.88 6.62-1.75 9.5-6.89 25-10.75 33.12-9.63 20.26-16.55 14.74-24.38-1.98C10.44 46.88 43.07 17.5 70.2 26c32.38 10.15 28 54.62-4.75 60.88"
      style={{
        fill: "none",
        stroke: "#000",
        strokeWidth: 3,
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }}
    />
    <text
      transform="translate(46.45 34.88)"
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      {"1"}
    </text>
  </svg>
);

export default Hiraganaの;
