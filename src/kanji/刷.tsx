import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji刷: KanjiIconType = (props) => (
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
      <path d="M19.52 18.18c1.07.61 3.15.87 4.29.79 7.69-.59 21.69-2.84 27.43-3.57 1.75-.22 3 1.1 2.75 3.36-.34 3.08-1.17 5.77-2.11 12.32" />
      <path d="M23.75 35.3c2.36-.16 16.89-1.88 24.99-2.76 2.47-.27 4.34-.46 5.09-.51" />
      <path d="M22.53 19.28c.85.85 1.26 1.73 1.22 2.6-1 25.75-4.12 40.88-13.25 53.88" />
      <path d="M23.81 52.78c.7.7 1.3 1.5 1.35 2.34.64 12.45.94 17.39 1.27 22.5.1 1.61.21 3.24.33 5.13" />
      <path d="M26.02 54.28c5.11-.91 20.73-3.28 26.86-3.55 2.23-.1 3.12 1.14 3.13 3.05.03 6.34-.25 17.72-1.2 24.95-.69 5.27-3.54.58-4.67-.58" />
      <path d="M38.8 39.13c.97.97 1.35 2.5 1.35 3.84 0 5.64-.06 33.62-.1 45.91-.01 3.31-.02 5.48-.03 5.76" />
      <path d="M71.27 26.33c1.26 1.26 1.76 3.04 1.76 5.02 0 11.4-.01 22.23-.02 28.77v4.38" />
      <path d="M91.27 12.83c1.08 1.08 1.76 2.79 1.76 5.02 0 16.27-.01 67.9-.01 73.12 0 11.03-5.64 3.16-9.46-.25" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(21.5 16.5)">{"1"}</text>
      <text transform="translate(29.25 31.63)">{"2"}</text>
      <text transform="translate(15.75 27.13)">{"3"}</text>
      <text transform="translate(18.75 70.63)">{"4"}</text>
      <text transform="translate(27.5 51.5)">{"5"}</text>
      <text transform="translate(43.5 43.63)">{"6"}</text>
      <text transform="translate(64.5 34.63)">{"7"}</text>
      <text transform="translate(80.25 15.5)">{"8"}</text>
    </g>
  </svg>
);

export default Kanji刷;
