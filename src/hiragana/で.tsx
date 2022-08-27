import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Hiraganaで: KanjiIconType = (props) => (
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
      <path d="M20.5 26.38c1.87 1.62 4.42 1.97 8.12 1.37 21.75-3.5 33-5.12 50.12-8.38 12.34-2.34 13-.88.38 1.38-17.89 3.19-33.78 19.12-33.78 37.62 0 20.5 17.91 30.25 35.16 30.25" />
      <path d="M75 41.75c2.75 1.75 6 5.38 7.75 8.5" />
      <path d="M81.37 36.88c3.06 1.57 6.68 4.82 8.62 7.62" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(16.5 20.38)">{"1"}</text>
      <text transform="translate(67.37 40.75)">{"2"}</text>
      <text transform="translate(73.5 35.63)">{"3"}</text>
    </g>
  </svg>
);

export default Hiraganaで;
