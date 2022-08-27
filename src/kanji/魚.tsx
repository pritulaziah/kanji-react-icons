import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji魚: KanjiIconType = (props) => (
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
      <path d="M48 13c.06.54.13 1.4-.12 2.18C46.4 19.77 37.9 29.84 26.25 36" />
      <path d="M49 19.38c2.84 0 14.95-1.87 17.94-2.15 2.56-.23 3.88 2.58 2.81 3.77-4.5 5-9.5 10.5-14.25 17.25" />
      <path d="M27.99 41.48c.4.5.41.85.63 1.48 1.8 5.19 3.5 18.31 4.61 28" />
      <path d="M29.86 42.17c13.96-1.31 37.88-3.53 48.3-4.63 3.83-.4 5.79 1.02 5.59 2.45-.72 5.24-2.5 19.5-4.25 28.25" />
      <path d="M55 40.75c.5 6.75.25 21.5.25 26" />
      <path d="M32.47 55.61c10.82-1.23 21.68-2.1 32.52-3.1 1.3-.12 2.57-.23 3.78-.34" />
      <path d="M33.95 69.54c10.05-.55 31.67-2.88 45.55-3.79" />
      <path d="M26.25 81c0 5.25-5.75 13-7.25 14.5" />
      <path d="M42.52 79.08c3.15 2.76 6.15 10.34 6.94 14.63" />
      <path d="M62.37 77.83c3.15 2.76 8.15 11.34 8.93 15.63" />
      <path d="M84.27 78.58c4.16 2.63 10.75 10.8 11.79 14.88" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(39.5 13.5)">{"1"}</text>
      <text transform="translate(53.5 15.13)">{"2"}</text>
      <text transform="translate(21.75 49.5)">{"3"}</text>
      <text transform="translate(34.5 39.13)">{"4"}</text>
      <text transform="translate(47.5 49.5)">{"5"}</text>
      <text transform="translate(34 52.63)">{"6"}</text>
      <text transform="translate(35.5 66.13)">{"7"}</text>
      <text transform="translate(20.25 79.5)">{"8"}</text>
      <text transform="translate(35.5 79.5)">{"9"}</text>
      <text transform="translate(52.5 79.5)">{"10"}</text>
      <text transform="translate(74.5 79.5)">{"11"}</text>
    </g>
  </svg>
);

export default Kanji魚;
