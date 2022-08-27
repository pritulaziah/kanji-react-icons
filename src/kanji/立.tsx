import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji立: KanjiIconType = (props) => (
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
      <path d="M44.45 14.75c5.44 2.73 11.79 8.94 13.62 15.88" />
      <path d="M22 38.2c2.25.3 4.53.38 5.68.33 6.57-.28 43.07-4.53 52.99-4.77 1.94-.05 4.6.16 5.57.32" />
      <path d="M32 49c5.5 11 9 24.25 9.5 31.5" />
      <path d="M74.5 39c.75 1.25.57 3.29.25 4.5C72.25 53 64.5 78 62 84.5" />
      <path d="M15.75 89.3c1.75.45 5.17.51 6.62.39 17.38-1.44 47.88-2.69 66.28-3.5 2.43-.11 5.35.05 7.1.88" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(40.5 12.5)">{"1"}</text>
      <text transform="translate(13.5 37.5)">{"2"}</text>
      <text transform="translate(24.25 49.5)">{"3"}</text>
      <text transform="translate(64.75 45.5)">{"4"}</text>
      <text transform="translate(7.5 91.5)">{"5"}</text>
    </g>
  </svg>
);

export default Kanji立;
