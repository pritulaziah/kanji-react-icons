import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji卒: KanjiIconType = (props) => (
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
      <path d="M50.18 11.25c2.48 1.22 6.1 5.99 6.56 8.38" />
      <path d="M24.45 26.81c1.13.08 3.7.55 4.8.44 8.86-.92 40.35-4.68 51.6-4.91 1.86-.04 2.81.04 4.2.55" />
      <path d="M38.75 31.99c0 .51.04.92-.13 1.53-.92 3.2-9.66 13.87-17.15 18.6" />
      <path d="M36.89 38.46C41 40.25 46.25 45 48.25 49.5" />
      <path d="M70.75 30.49c0 .49.04.87-.11 1.46-.76 3.04-7.99 13.18-14.17 17.68" />
      <path d="M69.89 38.46c7 2.15 15.95 7.87 19.36 13.29" />
      <path d="M14.88 67.84c1.52.54 4.31.68 5.82.54 19.3-1.77 55.8-4.52 69.11-4.73 2.53-.04 4.05.26 5.31.53" />
      <path d="M52.84 54.75c.52.6 1.62 4.52 1.73 5.73.1 1.21-.07 30.48-.17 38.02" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(44.5 12.5)">{"1"}</text>
      <text transform="translate(21.75 23.5)">{"2"}</text>
      <text transform="translate(30.5 36.5)">{"3"}</text>
      <text transform="translate(43.5 41.5)">{"4"}</text>
      <text transform="translate(61.5 34.5)">{"5"}</text>
      <text transform="translate(76.5 39.13)">{"6"}</text>
      <text transform="translate(8.25 68.5)">{"7"}</text>
      <text transform="translate(44.5 59.6)">{"8"}</text>
    </g>
  </svg>
);

export default Kanji卒;
