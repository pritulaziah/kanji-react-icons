import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji形: KanjiIconType = (props) => (
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
      <path d="M19.63 23.42c1.2.38 3.39.46 4.59.38 4.66-.3 16.61-2.55 25.33-3.88 1.96-.3 3.83-.32 4.83-.13" />
      <path d="M10.88 51.92c1.82.38 4.24.39 6.04.13 13.24-1.92 31.41-5.55 39.38-6.3 3.01-.28 4.85-.07 6.36.12" />
      <path d="M28.52 36.64c.98.98 1.19 2.31 1.19 4.02C29.71 57 30.38 74.5 19 88" />
      <path d="M45.87 27.25c1 1 1.46 2.38 1.46 3.5 0 .87-.12 43.25-.12 58.26 0 2.92-.06 5.04-.1 5.99" />
      <path d="M85.5 17.5c.13 1.15-.23 2.18-.89 3.13-3.36 4.83-8.61 11.12-17.23 16.12" />
      <path d="M90.51 41.5c.15 1.2-.03 2.02-.64 3.07C86.63 50.11 78.28 57.44 66.88 64" />
      <path d="M96.8 64.71c.2 1.4-.39 2.9-1.21 4.04-4.76 6.62-15.5 17.3-31.85 24.38" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(12.75 25.5)">{"1"}</text>
      <text transform="translate(3.5 52.63)">{"2"}</text>
      <text transform="translate(18.75 37.63)">{"3"}</text>
      <text transform="translate(38.5 33.13)">{"4"}</text>
      <text transform="translate(75.5 19.5)">{"5"}</text>
      <text transform="translate(81.5 45.5)">{"6"}</text>
      <text transform="translate(88.5 66.5)">{"7"}</text>
    </g>
  </svg>
);

export default Kanji形;
