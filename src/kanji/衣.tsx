import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji衣: KanjiIconType = (props) => (
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
      <path d="M47.36 12.25c3.97 1.84 9.23 7.55 10.51 12.58" />
      <path d="M13 33.11c1.42.1 4.67.65 6.06.55C34.5 32.5 69 27.75 84.2 27.45c2.35-.05 3.55.05 5.3.7" />
      <path d="M45.97 34.64c.09.83.36 2.22-.18 3.34-3.53 7.26-15.03 20.51-32.73 31.98" />
      <path d="M37.75 54.5c.48.54 1 1.06 1 2-.03 11.82-.32 32.19-.32 34.19s1.18 3.14 2.68 1.64 14.35-11.84 16.35-13.34" />
      <path d="M76.25 38.89c.05.43.57 2.05.25 2.61-2 3.5-8.25 8.5-18.44 15.47" />
      <path d="M48.75 51.75c2 1 5.2 3.83 5.75 4.25 8.17 6.3 28.04 22.39 33.56 26.1 2.08 1.4 3.86 2 5.94 2.4" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(40 12.13)">{"1"}</text>
      <text transform="translate(11.58 30.93)">{"2"}</text>
      <text transform="translate(37.16 40.68)">{"3"}</text>
      <text transform="translate(31.52 65.25)">{"4"}</text>
      <text transform="translate(79.15 41.44)">{"5"}</text>
      <text transform="translate(48.04 49.37)">{"6"}</text>
    </g>
  </svg>
);

export default Kanji衣;
