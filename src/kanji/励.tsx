import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji励: KanjiIconType = (props) => (
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
      <path d="M16.87 21.34c2.5.66 5.39.27 7.13.06 8.15-.98 17.26-2.07 25.9-3.2 1.89-.25 4.65-.54 6.48.12" />
      <path d="M20.65 22.78c1.04 1.04 1.19 2.35 1.19 3.95 0 17.52-.34 46.27-10.53 59.49" />
      <path d="M25.16 40.15c1.72.48 4.4.22 5.85 0 5.19-.78 13.36-2.31 18.86-2.89 1.88-.2 3.75-.4 5.58.16" />
      <path d="M38.27 51.59c4.48 1.16 7.98 1.66 11.77 1.84 2.37.11 3.25 1.53 2.88 3.31-2.41 11.51-5.16 19.39-9.74 29.24-3.27 7.03-5.83.18-6.79-.4" />
      <path d="M37.77 43.46c.48 1.17.46 2.65.15 4.09-1.67 7.7-6.8 26.45-18.44 38.62" />
      <path d="M61.49 38.75c2.01.88 4.44 1 6.26.77 7.37-.95 16.23-2.43 20.84-3.23 3.83-.67 5.69.28 5.29 4.35-1.23 12.68-5.51 35.61-11.51 47.11-3.66 7.02-6.15.34-7.25-.75" />
      <path d="M76.96 15.93c.66.95.87 2.46.6 4.44-2.69 20.26-7.82 53.76-26.18 71.54" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(19.25 19.25)">{"1"}</text>
      <text transform="translate(14.25 31.25)">{"2"}</text>
      <text transform="translate(26.25 37.25)">{"3"}</text>
      <text transform="translate(43.25 50.25)">{"4"}</text>
      <text transform="translate(30.25 49.25)">{"5"}</text>
      <text transform="translate(60.25 35.88)">{"6"}</text>
      <text transform="translate(68 16.25)">{"7"}</text>
    </g>
  </svg>
);

export default Kanji励;
