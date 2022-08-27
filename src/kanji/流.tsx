import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji流: KanjiIconType = (props) => (
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
      <path d="M18.38 18.25c3.31 1.38 8.54 5.69 9.37 7.84" />
      <path d="M12.75 40c3.18 1.46 8.21 5.99 9 8.25" />
      <path d="M11.75 88.71c1.5 1.31 3.31 1.36 4.25-.25C18.75 83.75 21.5 78 24 72" />
      <path d="M56.2 12.75c2 1.02 6.31 4.97 6.6 6.98" />
      <path d="M35.94 26.28c.98.07 3.22.48 4.17.38 7.7-.79 35.04-4.06 44.81-4.27 1.62-.03 2.44.03 3.64.48" />
      <path d="M55.19 27.5c.57.44.78 2.33.45 2.9-4.18 7.07-5.46 8.2-10.88 15.1-2.75 3.5-1.76 3.9 1.75 3 9.56-2.46 21.5-5 33-7.5" />
      <path d="M70.41 31.85c4.52 2.76 11.67 11.33 12.8 15.62" />
      <path d="M44.76 57.39c.24.61.43 2.2.42 3.44C45 77 41.25 87.75 31.31 93.22" />
      <path d="M57.77 54.37c.09.48 1.17 2.49 1.26 5.52.4 14.55-.26 26.16-.26 31.12" />
      <path d="M73.1 52.37c.74 1.19 1.33 2.59 1.38 4.43.2 8.19-.53 16.14-.53 21.7 0 11.75 4.56 11.53 10.17 11.53 4.39 0 9.5-.64 10.64-1.78 1.5-1.5 1-3.85 1.25-7.35" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(11.25 18.13)">{"1"}</text>
      <text transform="translate(5.25 40.63)">{"2"}</text>
      <text transform="translate(6.75 96.13)">{"3"}</text>
      <text transform="translate(49.5 12.5)">{"4"}</text>
      <text transform="translate(33.5 22.5)">{"5"}</text>
      <text transform="translate(44.25 36.13)">{"6"}</text>
      <text transform="translate(74.5 32.5)">{"7"}</text>
      <text transform="translate(37.5 63.13)">{"8"}</text>
      <text transform="translate(51.75 61.63)">{"9"}</text>
      <text transform="translate(63.75 58.63)">{"10"}</text>
    </g>
  </svg>
);

export default Kanji流;
