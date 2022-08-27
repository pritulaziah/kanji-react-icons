import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji男: KanjiIconType = (props) => (
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
      <path d="M27.25 14c.75 1 1.06 2.24 1.23 3.23 1.02 5.77 2.09 18.79 3.14 29.52" />
      <path d="M29.25 15.45c13.82-1.04 38.88-3.55 48.31-3.71 3.9-.07 5.87 1.48 5.66 3.04C82.44 20.49 80 32 77.63 41.7" />
      <path d="M53.5 15.72c.5.78 1 1.66 1 2.54.03 8.9.2 20.68.2 23.25" />
      <path d="M30.98 30.82c10.81-.68 21.62-2.31 32.39-3.48 1.29-.14 2.55-.27 3.76-.4" />
      <path d="M32.37 45.24C45.75 43.25 62 41.5 77.76 40.78" />
      <path d="M20.48 61.48c1.44.45 3.24.35 4.5.24 12.02-.98 49.84-6.59 55.52-7.05 3.69-.3 4.72 1.35 4.51 3.45-.54 5.55-11.82 31.28-16.82 35.98-4.94 4.64-6.44 2.64-8.69-.36" />
      <path d="M53.47 46.43c.1 1.07.25 2.78-.2 4.32C49.9 62.13 39.5 80.33 17.39 92.06" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(18.75 19.5)">{"1"}</text>
      <text transform="translate(31.5 12.5)">{"2"}</text>
      <text transform="translate(47.5 24.13)">{"3"}</text>
      <text transform="translate(34 27.5)">{"4"}</text>
      <text transform="translate(34.5 41.5)">{"5"}</text>
      <text transform="translate(11.5 63.5)">{"6"}</text>
      <text transform="translate(45.5 52.5)">{"7"}</text>
    </g>
  </svg>
);

export default Kanji男;
