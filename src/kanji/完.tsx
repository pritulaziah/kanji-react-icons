import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji完: KanjiIconType = (props) => (
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
      <path d="M48.7 11.5c3.59 1.2 7.94 5.77 8.62 9.18" />
      <path d="M26.35 27.77c0 3.41-2.42 12.79-3.51 15.07" />
      <path d="M28.6 29.35c8.9-1.6 47.15-5.28 53.31-5.31 9.85-.04-.32 8.25-1.86 9.1" />
      <path d="M36.32 42.93c.91.23 2.59.32 3.49.23 6.69-.66 15.94-2.66 23.54-3.65 1.5-.2 2.43.11 3.19.23" />
      <path d="M22.83 59.17c1.48.39 4.21.57 5.67.39 14.74-1.81 31.05-4.06 47.48-4.46 2.47-.06 3.95.19 5.18.38" />
      <path d="M41.5 62c.07.89.14 2.29-.13 3.56C39.76 73.08 31.29 91 17.92 99.67" />
      <path d="M56.49 59.87c.74 1.19 1.33 2.59 1.38 4.43.2 8.19-.53 16.14-.53 21.7 0 9.75 3.42 12.03 18.17 12.03 15.25 0 18.39-2.03 18.39-12.62" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(43.5 12.5)">{"1"}</text>
      <text transform="translate(18.75 31.63)">{"2"}</text>
      <text transform="translate(31.5 25.48)">{"3"}</text>
      <text transform="translate(29.25 42.5)">{"4"}</text>
      <text transform="translate(15.49 59.5)">{"5"}</text>
      <text transform="translate(32.25 69.5)">{"6"}</text>
      <text transform="translate(49.5 67.5)">{"7"}</text>
    </g>
  </svg>
);

export default Kanji完;
