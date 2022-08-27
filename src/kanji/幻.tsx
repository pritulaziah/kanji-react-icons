import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji幻: KanjiIconType = (props) => (
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
      <path d="M30.91 20.87c.38 1.49.58 2.56-.19 4.21C27.38 32.25 24 39 19.35 45.37c-.64.88-.33 2.42.32 2.89 4.08 2.99 6.33 4.74 11.5 8.79" />
      <path d="M44.87 32.6c.38 1.28.38 3.03-.32 4.37-5.58 10.74-18.1 30.55-27.24 42.69-1.23 1.63-.06 3.13 1.44 2.59 12-4.25 19-6.75 29.16-10.48" />
      <path d="M42.34 60.66c3.62 3.51 9.36 14.45 10.26 19.92" />
      <path d="M55.25 32.25c2.74 1.17 5.54 1.08 8.38.55 9.62-1.8 17.24-3.68 25.33-5.7 5.2-1.3 7.05.28 6.45 5.38-2.07 17.45-5.95 36.36-11.91 50.26C79 93.25 73.82 84.09 72 83" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(23.5 20.5)">{"1"}</text>
      <text transform="translate(37.5 32.5)">{"2"}</text>
      <text transform="translate(35.5 63.5)">{"3"}</text>
      <text transform="translate(53.5 29.5)">{"4"}</text>
    </g>
  </svg>
);

export default Kanji幻;
