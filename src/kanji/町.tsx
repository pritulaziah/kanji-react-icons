import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji町: KanjiIconType = (props) => (
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
      <path d="M11.25 31.25c.47.7 1.61 2.08 1.65 3.01.3 7.17 1.33 25.61 1.87 39.49" />
      <path d="M13.55 33.25c7.09-1.34 19.94-3.3 24.78-3.51 2-.09 3.01 1.91 2.9 3.93-.4 7.4-1.82 26.99-2.23 38.58" />
      <path d="M26.81 32.3c-.1 4.38.1 33.6.1 37.25" />
      <path d="M14.43 51.84c5.61-.87 11.32-1.28 16.96-1.84.68-.07 1.34-.13 1.97-.19" />
      <path d="M15.15 71.79c5.24 0 16.57-1.68 23.81-1.88" />
      <path d="M49 27.93c.9.35 2.55.42 3.45.35 7.3-.53 27.05-3.03 40.9-3.52 1.5-.05 2.4.17 3.15.34" />
      <path d="M73.27 29.83c.08.48 1.17 2.51 1.25 5.56.4 14.66-1.02 51.06-1.25 56.05-.15 3.05-1.7 4.28-3.95 4.03-2.44-.27-4.52-3.52-6.01-4.78" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(5.25 37.63)">{"1"}</text>
      <text transform="translate(15.75 29.13)">{"2"}</text>
      <text transform="translate(29.5 39.5)">{"3"}</text>
      <text transform="translate(17.25 48.13)">{"4"}</text>
      <text transform="translate(17.5 67.63)">{"5"}</text>
      <text transform="translate(47.25 24.5)">{"6"}</text>
      <text transform="translate(65.5 38.5)">{"7"}</text>
    </g>
  </svg>
);

export default Kanji町;
