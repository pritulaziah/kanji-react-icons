import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Katakanaケ: KanjiIconType = (props) => (
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
      <path d="M40.96 17.88c.44 1.9.39 4.42-.59 6.5C35.55 34.69 31.16 44.05 21.5 55" />
      <path d="M37.88 37.62c2.12.88 4.15 1.04 6.62.5 12.62-2.75 25.5-4.88 35.75-6.5 3.61-.57 6.25-.75 9.25-.5" />
      <path d="M64.46 38.88c.44 1.9.5 4.27-.08 6.5-3.63 13.75-9.25 31.25-24.63 43.87" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(32.5 17.38)">{"1"}</text>
      <text transform="translate(41.5 34.75)">{"2"}</text>
      <text transform="translate(56.25 44)">{"3"}</text>
    </g>
  </svg>
);

export default Katakanaケ;
