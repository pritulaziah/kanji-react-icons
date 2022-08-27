import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji且: KanjiIconType = (props) => (
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
      <path d="M33.25 20.12c.75 1.05 1.25 2.08 1.5 3.11.25 1.02.55 62.44.46 64.71" />
      <path d="M36.22 21.78c2.97-.11 30.17-3.03 32.37-3.2 3.96-.31 5.46 3.56 4.97 5.05-.47 1.43-.23 40.27-.38 60.74" />
      <path d="M36.32 43.24c6.08-.61 12.17-1.16 18.26-1.66 1.63-.13 3.25-.26 4.83-.38" />
      <path d="M36.92 65c5.58-.26 11.14-.68 16.71-1.04 1.61-.1 3.24-.2 4.84-.29" />
      <path d="M15.54 90.06c1.49.44 4.22.51 5.71.44 15.51-.73 40.12-3.84 68.66-3.96 2.48-.01 3.97.21 5.22.43" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(27.5 28.5)">{"1"}</text>
      <text transform="translate(36.5 18.5)">{"2"}</text>
      <text transform="translate(38.5 39.5)">{"3"}</text>
      <text transform="translate(38.33 61.42)">{"4"}</text>
      <text transform="translate(13.5 86.5)">{"5"}</text>
    </g>
  </svg>
);

export default Kanji且;
