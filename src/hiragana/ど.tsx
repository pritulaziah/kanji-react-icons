import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Hiraganaど: KanjiIconType = (props) => (
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
      <path d="M35.5 18.38c1.74.74 3.62 2.62 4.12 5.37s4.75 25 5.38 28.12" />
      <path d="M78.12 25.5c.25 1.88.04 4.09-2.25 5.75-6.37 4.63-13.21 8.49-22.75 15.25C40.24 55.62 31.5 64.88 31.5 74c0 10.12 8.5 13.88 26.88 13.88 6.25 0 14.75-.12 21.62-1.25" />
      <path d="M84.24 14.5c2.75 1.75 6 5.38 7.75 8.5" />
      <path d="M90.62 9.62c3.06 1.57 6.68 4.82 8.62 7.62" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(27.87 18.75)">{"1"}</text>
      <text transform="translate(69.25 22.25)">{"2"}</text>
      <text transform="translate(76.62 13.5)">{"3"}</text>
      <text transform="translate(82.75 8.38)">{"4"}</text>
    </g>
  </svg>
);

export default Hiraganaど;
