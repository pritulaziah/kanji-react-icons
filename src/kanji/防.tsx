import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji防: KanjiIconType = (props) => (
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
      <path d="M14.37 18.22c1.63.28 2.45.83 3.65.62 7.73-1.34 12.6-2.82 15.6-3.67 3.59-1.01 7.18 1.02 5.59 3.38-1.6 2.37-8.38 13.87-11.17 17.26" />
      <path d="M27.94 35.81c14.29 8.46 11.96 33.83-.9 29.44" />
      <path d="M16.54 19.03c.21 1.22.28 2.59.5 3.74.22 1.15 0 67.8-.22 74.99" />
      <path d="M63.63 11.25c3.95 1.8 9.11 7.75 10.46 12.33" />
      <path d="M42.5 32.59c1.14.08 3.73.55 4.83.44 8.92-.92 34.82-5.21 46.95-5.45 1.87-.04 2.83.04 4.22.56" />
      <path d="M66.75 44.5c7 3.25 12.5 4.5 17.99 7.11 3.1 1.48 3.68 3.56 3.01 6.14C86 64.5 77.76 86.66 72.87 91.83c-5.12 5.42-6.71-.74-8.09-1.57" />
      <path d="M68 32.25c.09 1.21.38 3.18-.19 4.87C63.5 50 55.25 70 34.25 84.75" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(17.5 15.5)">{"1"}</text>
      <text transform="translate(26.25 46.55)">{"2"}</text>
      <text transform="translate(9.5 27.13)">{"3"}</text>
      <text transform="translate(57.5 12.5)">{"4"}</text>
      <text transform="translate(43.5 29.05)">{"5"}</text>
      <text transform="translate(74.5 45.13)">{"6"}</text>
      <text transform="translate(59.5 41.5)">{"7"}</text>
    </g>
  </svg>
);

export default Kanji防;
