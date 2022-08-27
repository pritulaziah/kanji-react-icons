import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji均: KanjiIconType = (props) => (
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
      <path d="M14 43.64c1.5.11 3.24.46 4 .36 4.82-.66 13.75-2 19.5-4 1.19-.41 2.25-.5 3.75-.49" />
      <path d="M27.87 16.5c1.09.5 1.96 2.23 1.96 3.25 0 7.25.03 38.75.03 49.5" />
      <path d="M16.26 80.76c1.15.36 2.73.3 4.12-1.15 5.14-5.37 14.42-14.98 19.56-20.34" />
      <path d="M60.29 13.25c.05.86.1 2.21-.1 3.44-1.16 7.26-7.82 23.18-16.94 32.94" />
      <path d="M56.04 34.92c.9.7 2.16.93 3.6.46 1.44-.46 27.04-3.91 30.64-4.14 3.6-.23 5.12 1.8 4.78 6.69-.56 8.07-5.81 39.82-15.24 52.99-2.7 3.76-3.63 1.74-5.76-1.16" />
      <path d="M55.77 46.33c4.07 1.66 10.52 6.81 11.54 9.38" />
      <path d="M54.52 69.08c5.04 1.7 13.03 6.99 14.29 9.63" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(7.5 44.5)">{"1"}</text>
      <text transform="translate(18.5 16.5)">{"2"}</text>
      <text transform="translate(7.5 82.5)">{"3"}</text>
      <text transform="translate(51.5 14.5)">{"4"}</text>
      <text transform="translate(61.5 31.63)">{"5"}</text>
      <text transform="translate(53.5 44.5)">{"6"}</text>
      <text transform="translate(48 71)">{"7"}</text>
    </g>
  </svg>
);

export default Kanji均;
