import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji可: KanjiIconType = (props) => (
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
      <path d="M13.88 21.98c4.12.77 7.86.36 11.51.02 13.57-1.26 43.04-4.34 58.11-5.52 3.93-.31 7.74-.5 11.63.33" />
      <path d="M25 42.14c.87.87 1.5 1.99 1.79 3.21.74 3.14 1.96 9.62 2.94 15.63.28 1.74.55 3.45.77 5.02" />
      <path d="M27.38 44.28c7.5-1.77 16.49-3.18 21.87-4.27 3.75-.76 5.13 1.05 4.31 4.53a759.62 759.62 0 0 1-3.4 14.01" />
      <path d="M31.2 61.83c5.62-.7 11.39-1.52 17.83-2.29 1.21-.14 2.43-.29 3.69-.43" />
      <path d="M75.46 20.33c1.04 1.04 2.01 2.67 2.01 4.77 0 14.56-.01 60.44-.01 65.4 0 10.62-7.96 1.25-9.46 0" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(6.49 22.5)">{"1"}</text>
      <text transform="translate(18.75 51.5)">{"2"}</text>
      <text transform="translate(27.5 40.5)">{"3"}</text>
      <text transform="translate(33.5 58.41)">{"4"}</text>
      <text transform="translate(68.5 29.5)">{"5"}</text>
    </g>
  </svg>
);

export default Kanji可;
