import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji幼: KanjiIconType = (props) => (
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
      <path d="M31.89 20.62c.38 1.43.58 2.48-.19 4.06-3.82 7.82-7.82 14.82-11.98 20.84-.61.88-.44 2.52.32 2.79 4.04 1.43 6.59 2.56 12.39 6.87" />
      <path d="M44.73 32.5c.4 1.5.27 2.88-.57 4.47C38.1 48.49 28.6 63.75 19.89 75.85 17.62 79 18.5 81 22.41 79.2 30.23 75.61 36.75 72 46.75 68" />
      <path d="M41.92 59.9c3.13 2.68 8.08 11.01 8.86 15.17" />
      <path d="M54.15 42.34c2.35 1.04 5.08.97 7.62.52 9.79-1.76 22.78-4.41 28.12-5.29 3.75-.62 5.17 1.33 4.97 5-.38 6.95-5.43 29.26-10.53 39.78-4.2 8.65-8.45 6.78-12.23 2.51" />
      <path d="M74.09 17.68c.66.95.91 2.2.84 4.29-.66 19.03-8.68 54.28-29.89 70.08" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(24.75 21.5)">{"1"}</text>
      <text transform="translate(36.5 32.5)">{"2"}</text>
      <text transform="translate(42.5 57.5)">{"3"}</text>
      <text transform="translate(53.5 39.5)">{"4"}</text>
      <text transform="translate(64.5 17.5)">{"5"}</text>
    </g>
  </svg>
);

export default Kanji幼;
