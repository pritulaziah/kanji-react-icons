import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji令: KanjiIconType = (props) => (
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
      <path d="M49.62 13.25c.11.94.38 2.48-.22 3.77-4.15 8.86-15.15 25.23-36.65 37.08" />
      <path d="M50.54 16.55c6.13 4.35 24.99 20.22 33.98 27.33 3.22 2.54 5.6 4.12 9.73 5.37" />
      <path d="M38.59 42.91c1.76.72 3.84.36 5.65.14 5.4-.66 13.08-1.76 18.48-2.24 1.88-.17 3.54-.23 5.37.21" />
      <path d="M31.464 53.641c.61.15 3 1 4.21.87 10.33-.938 28.55-2.998 38.131-4.17 1.516-.185 4.279-.29 3.95 2.89-.431 4.17-2.68 16.92-6 23.84-1.89 3.94-3.18 3.45-6.23.46" />
      <path d="M44.77 53.81c.87.87 1.8 2 1.8 3.5 0 7.36-.04 24.53-.1 34.13-.02 3.3-.05 5.71-.08 6.51" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(42.5 15.13)">{"1"}</text>
      <text transform="translate(58.5 19.63)">{"2"}</text>
      <text transform="translate(43 40)">{"3"}</text>
      <text transform="translate(25.1 62.1)">{"4"}</text>
      <text transform="translate(36.4 65.5)">{"5"}</text>
    </g>
  </svg>
);

export default Kanji令;
