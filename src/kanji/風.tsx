import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji風: KanjiIconType = (props) => (
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
      <path d="M24.55 22.25c.95 1.25 1.37 3.05 1.37 5.36 0 22.76 1.59 50.26-10.66 62.39" />
      <path d="M26.75 23.5c1.48-.24 3.35-.52 5.49-.84C46.03 20.62 63 17.75 74 17.25c4-.18 6.09.97 5.5 4.75-3.25 20.75-2.25 49.75 12.5 65.75 6.95 7.54 5.75 1 6-5.5" />
      <path d="M63.5 24.75c-.25 1.25-.88 2.25-2.18 3.05-4.02 2.43-12.86 7.15-25.44 10.2" />
      <path d="M33.23 49.47c.71.71 1.46 1.63 1.56 2.1.6 2.87 1.22 5.5 2.01 10.42.15.93.3 1.91.47 2.94" />
      <path d="M35.85 50.73c11.9-1.98 23.66-3.81 29.48-4.1 2.56-.13 3.98.77 3.42 3.09-.81 3.38-1.49 4.52-2.56 8.52" />
      <path d="M38.3 62.81c5.71-.6 17.05-2.28 26.2-3.3 1.27-.14 2.47-.25 3.58-.33" />
      <path d="M50.07 36.5c1.09 1.09 1.35 2.25 1.35 3.64 0 3.86-.26 30.86-.26 37.81" />
      <path d="M32.92 82.16c1.2.71 2.64.8 3.36.59 6.59-1.88 24.47-7.13 30.34-8.88" />
      <path d="M63.75 67.85c3.5 3.52 7.62 10.15 9.36 15.31" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(18.5 30.5)">{"1"}</text>
      <text transform="translate(28.5 20.5)">{"2"}</text>
      <text transform="translate(52.5 28.5)">{"3"}</text>
      <text transform="translate(29.5 60.5)">{"4"}</text>
      <text transform="translate(35.5 47.5)">{"5"}</text>
      <text transform="translate(40.5 60.13)">{"6"}</text>
      <text transform="translate(44.5 44.5)">{"7"}</text>
      <text transform="translate(32.5 78.5)">{"8"}</text>
      <text transform="translate(56.5 71.5)">{"9"}</text>
    </g>
  </svg>
);

export default Kanji風;
