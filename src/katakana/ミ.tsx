import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Katakanaミ: KanjiIconType = (props) => (
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
      <path d="M41.87 20c10.4 2.57 20.5 6.3 25 10.38" />
      <path d="M42 46.88c10.72 2.69 21.11 6.6 25.75 10.88" />
      <path d="M36.5 75c15.71 4.49 30.95 11 37.75 18.12" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(34.63 19.25)">{"1"}</text>
      <text transform="translate(34.38 46.13)">{"2"}</text>
      <text transform="translate(31.88 71.5)">{"3"}</text>
    </g>
  </svg>
);

export default Katakanaミ;
