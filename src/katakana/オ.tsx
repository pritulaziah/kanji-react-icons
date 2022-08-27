import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Katakanaオ: KanjiIconType = (props) => (
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
      <path d="M19.5 37.85c3.91 1.78 7.55 1.55 11.01 1.02 18.03-2.75 34.4-4.5 50.55-5.41 3.34-.19 6.35.17 10.46 1.38" />
      <path d="M60.38 16.38c1.32 1.49 1.65 3.97 1.65 6.12 0 8-.25 46.23-.25 58.63 0 20.38-5.88 7.5-9.25 5.5" />
      <path d="M60.29 36.38c0 1.62-1.64 3.61-3.62 6-7.88 9.5-21.12 22.75-34.62 33" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(15.41 33)">{"1"}</text>
      <text transform="translate(50.04 14.88)">{"2"}</text>
      <text transform="translate(45.41 46.13)">{"3"}</text>
    </g>
  </svg>
);

export default Katakanaオ;
