import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji気: KanjiIconType = (props) => (
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
      <path d="M37.75 9.25c.25 1.62-.25 2.75-1 4.25C35.63 15.74 28 25.25 24 29" />
      <path d="M36.5 21.25c1.33-.03 3.29-.05 4.8-.32 9.2-1.68 18.17-3.46 26.98-5.27 1.63-.33 3.71-.64 5.21-.91" />
      <path d="M31.25 32.75c1.5.38 3.3.26 4.96.08 7.67-.83 19.54-2.58 29.14-4.39 1.94-.37 3.64-.41 4.91-.45" />
      <path d="M18.5 47c1.88.75 4 .88 6.25.5 15.08-2.51 35-5.62 48.25-8 4.73-.85 5.6.47 4.5 6.25-4 21 .71 40.32 11.5 50 7.25 6.5 6.5.75 6-5.25" />
      <path d="M57 51.75c.12 1.62-.17 3.03-1 4.75C49.5 70 40.25 82.75 25.75 93.25" />
      <path d="M30 63.75C41.5 68 54.5 78 62.25 90.5" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(29.5 10.5)">{"1"}</text>
      <text transform="translate(43.5 17.5)">{"2"}</text>
      <text transform="translate(35.25 30.13)">{"3"}</text>
      <text transform="translate(10.5 48.13)">{"4"}</text>
      <text transform="translate(48.5 53.5)">{"5"}</text>
      <text transform="translate(20.5 63.13)">{"6"}</text>
    </g>
  </svg>
);

export default Kanji気;
