import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji星: KanjiIconType = (props) => (
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
      <path d="M28.53 16.58c.85.58 1.66 2.33 1.8 3.2.14.87 3.73 24.02 3.8 24.45.07.44.32.41.71 1.26" />
      <path d="M30.32 17.92c4.24-.53 39.95-4.03 43.81-4.55 3.22-.43 5.68.63 5.12 4.63-1 7.25-2.75 16.5-4.5 24.5" />
      <path d="M34.53 30.48c6.94-.69 13.88-1.39 20.83-2.09 2.25-.23 4.51-.45 6.69-.67" />
      <path d="M35.9 43.18c8.52-.85 26.82-2.58 37.85-3.68" />
      <path d="M37.26 51.38c.04.55.08 1.42-.08 2.21-.97 4.66-6.55 14.89-14.18 21.15" />
      <path d="M36.75 61.28c.9.21 2.55.25 3.46.21 6.5-.3 33.15-3.73 38.76-4.05 1.5-.09 2.12-.05 2.91-.01" />
      <path d="M53.81 46.75c.76.49 2.36 3.69 2.51 4.67.15.98-.1 33.54-.25 39.69" />
      <path d="M37.26 75.53c.93.22 2.63.26 3.56.22 6.71-.31 26.26-3.04 32.04-3.38 1.54-.09 2.19-.05 3-.01" />
      <path d="M22.88 93.31c1.47.25 4.15.3 5.62.25 10.56-.36 47.41-3.56 56.52-3.95 2.43-.1 4.48.21 6.73.82" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(23.25 25.63)">{"1"}</text>
      <text transform="translate(32.25 13.63)">{"2"}</text>
      <text transform="translate(36.75 27.13)">{"3"}</text>
      <text transform="translate(36.75 39.13)">{"4"}</text>
      <text transform="translate(27.75 54.13)">{"5"}</text>
      <text transform="translate(42.75 58.63)">{"6"}</text>
      <text transform="translate(44.75 51.5)">{"7"}</text>
      <text transform="translate(27.75 78.13)">{"8"}</text>
      <text transform="translate(14.25 96.13)">{"9"}</text>
    </g>
  </svg>
);

export default Kanji星;
