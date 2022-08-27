import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji単: KanjiIconType = (props) => (
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
      <path d="M29.25 15.75c3.39 3.23 7.02 8.88 7.5 10.5" />
      <path d="M49.25 11.5c1.78 2.24 6.04 8.11 6.75 11.75" />
      <path d="M76.45 11c.53.75 1.07 1.5.8 3s-6.13 8.5-8 10.75" />
      <path d="M28.59 34.42c.35.51.36.85.56 1.49 1.6 5.22 3.64 19.43 4.65 29.12" />
      <path d="M30.25 35.89c13.34-1.75 35.38-4.12 44.57-5.02 3.38-.33 5.41.71 5.31 2.9-.24 5.22-4.49 23.57-5.09 25.75" />
      <path d="M33.57 48.11c9.9-1.04 19.79-2.19 29.69-3.26 1.19-.13 2.35-.25 3.46-.37" />
      <path d="M34.41 61.54c11.61-1.66 28-2.56 40.71-3.58" />
      <path d="M12.75 77.2c1.52.54 4.32.8 5.82.54 6.15-1.05 54.18-4.49 73.11-5.23 2.53-.1 4.05.26 5.31.53" />
      <path d="M53.24 35.61c.67.38 1.09 1.44 1.1 2.73.04 6.56.2 58.54.22 60.68" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(21.5 13.5)">{"1"}</text>
      <text transform="translate(41.5 10.5)">{"2"}</text>
      <text transform="translate(69.5 10.5)">{"3"}</text>
      <text transform="translate(21.5 42.13)">{"4"}</text>
      <text transform="translate(28.5 32.5)">{"5"}</text>
      <text transform="translate(34.99 44.76)">{"6"}</text>
      <text transform="translate(38.25 57.13)">{"7"}</text>
      <text transform="translate(4.5 79.63)">{"8"}</text>
      <text transform="translate(46.5 42.5)">{"9"}</text>
    </g>
  </svg>
);

export default Kanji単;
