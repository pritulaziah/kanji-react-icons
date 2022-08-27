import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji青: KanjiIconType = (props) => (
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
      <path d="M32.63 21.67c.94.38 2.66.46 3.6.38 6.77-.55 31.52-2.8 37.36-3.38 1.56-.16 2.21-.09 3.03-.02" />
      <path d="M51.56 8.38c.76.26 2.36 1.91 2.51 2.42.15.51.35 25.06.43 33.19" />
      <path d="M34.38 33.28c.94.28 2.66.34 3.6.28 6.77-.4 27.52-3.49 33.36-3.92 1.56-.11 2.71-.06 3.53-.02" />
      <path d="M15.63 47.5c1.47.3 4.15.36 5.62.3 10.56-.43 56.76-6.05 68.52-6.3 2.43-.05 5.98-.25 7.73.48" />
      <path d="M36.51 54.94c.67.59 1.34 2.14 1.34 2.77 0 5.8.65 27.55-.35 40.05" />
      <path d="M38.2 56.03c2.69-.15 28.34-2.63 30.33-2.8 3.58-.29 4.93 1.91 4.48 2.8-.43.85-.67 25.98-.67 37.9 0 10.58-6.72 2.06-7.61 1.32" />
      <path d="M39.2 67.86c4.98 0 10.04-.82 14.98-1.32 1.64-.17 3.3-.33 4.94-.49" />
      <path d="M39.87 78.98c4.88 0 9.79-.62 14.64-1.03 1.53-.13 3.08-.26 4.61-.38" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(25.5 23.5)">{"1"}</text>
      <text transform="translate(42.75 9.5)">{"2"}</text>
      <text transform="translate(25.5 35.5)">{"3"}</text>
      <text transform="translate(5.5 48.5)">{"4"}</text>
      <text transform="translate(29.5 61.5)">{"5"}</text>
      <text transform="translate(39.5 53.5)">{"6"}</text>
      <text transform="translate(41.5 65.5)">{"7"}</text>
      <text transform="translate(41.5 76.5)">{"8"}</text>
    </g>
  </svg>
);

export default Kanji青;
