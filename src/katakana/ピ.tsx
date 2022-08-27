import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Katakanaピ: KanjiIconType = (props) => (
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
      <path d="M35.38 44.5c1.75 1.38 4.51 2.19 6.88 1.88C52.5 45 59.5 43.5 66.5 42.12c3.01-.59 7.12-1 9.38-.88" />
      <path d="M31 17.62c1.38 1.26 1.88 3.38 1.88 6.13S32 67.75 32 71c0 9.75 4 14.62 13.75 14.62 6 0 16.38.12 21.38 0s9.5-.62 13.5-1.5" />
      <path d="M83 32.88c-9.62 0-9.25-14.25 0-14.25 9.76-.01 9.5 14.25 0 14.25" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(36.88 41.88)">{"1"}</text>
      <text transform="translate(23.88 15.13)">{"2"}</text>
      <text transform="translate(80.01 40.25)">{"3"}</text>
    </g>
  </svg>
);

export default Katakanaピ;
