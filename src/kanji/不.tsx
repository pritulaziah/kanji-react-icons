import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji不: KanjiIconType = (props) => (
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
      <path d="M18.5 23.7c2.46.54 6.98.73 9.44.54 19.44-1.49 39.69-4.12 56.57-4.73 4.1-.15 6.57.26 8.62.53" />
      <path d="M60.25 24.88c.13 1.08-.07 2.6-.76 4.09-4.33 9.27-22.7 30.16-46.18 41.5" />
      <path d="M52.5 35.5c.75.75 1.46 1.5 1.46 3.5 0 .86.02 36.38.03 51.75V97" />
      <path d="M72.52 49.08c8.4 3.64 20.86 14.29 23.79 20.63" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(12.5 25.5)">{"1"}</text>
      <text transform="translate(49.5 31.5)">{"2"}</text>
      <text transform="translate(46.5 56.5)">{"3"}</text>
      <text transform="translate(68.25 57.13)">{"4"}</text>
    </g>
  </svg>
);

export default Kanji不;
