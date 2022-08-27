import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji孔: KanjiIconType = (props) => (
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
      <path d="M15.79 24.01c2.4.84 4.88.62 7.36.18 5.36-.94 12.98-2.7 17.37-3.88 3.49-.94 5.53.56 2.95 3.78-2.17 2.7-7.61 10.05-13.22 15.64" />
      <path d="M27.6 40.38c8.9 7.37 16.65 24.37 9.9 43.12-2.57 7.14-6 8-11.25.5" />
      <path d="M13.69 68.37c1.18 1 2.71.6 4.29-.47C28.5 60.75 35.25 56 47.25 47.5" />
      <path d="M61.99 15.62c.95.95 1.26 2 1.26 3.93 0 8.19.01 52.89.01 58.45 0 9.88 2.24 11.5 17.49 11.5C95 89.5 96.89 87 96.89 79.4" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(8.5 23.5)">{"1"}</text>
      <text transform="translate(23.5 48.5)">{"2"}</text>
      <text transform="translate(5.5 72.5)">{"3"}</text>
      <text transform="translate(52.5 13.5)">{"4"}</text>
    </g>
  </svg>
);

export default Kanji孔;
