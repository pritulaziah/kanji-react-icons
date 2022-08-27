import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji元: KanjiIconType = (props) => (
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
      <path d="M28.59 21.36c1.78.33 5.04.48 6.82.33 10.84-.94 21.52-2.57 32.08-3.03 2.96-.13 4.75.16 6.23.32" />
      <path d="M16.13 44.06c2.16.47 5.88.62 8.04.47 18.08-1.27 36.71-3.9 56.39-4.5 3.6-.11 5.77.22 7.57.46" />
      <path d="M41.29 46.69c.59 1.18.74 2.97.36 4.44-2.9 11.36-8.78 27.99-25.4 41.36" />
      <path d="M56.7 44.12c1.53 1.53 2 3.11 2 5.66 0 9.59.01 19.49.01 27.97 0 14.38 1.03 15.62 18.28 15.62 14.88 0 16.14-1.12 16.14-12.69" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(20.25 21.13)">{"1"}</text>
      <text transform="translate(8.25 45.13)">{"2"}</text>
      <text transform="translate(32.25 54.13)">{"3"}</text>
      <text transform="translate(50.25 54.13)">{"4"}</text>
    </g>
  </svg>
);

export default Kanji元;
