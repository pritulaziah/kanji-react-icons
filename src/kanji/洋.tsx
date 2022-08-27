import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji洋: KanjiIconType = (props) => (
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
      <path d="M20.47 16.1c4.27 1.65 10.89 6.3 11.84 8.45" />
      <path d="M14.75 38.62c4.55 1.68 11.64 6.24 12.69 8.29" />
      <path d="M12 90.11c1.27.32 2.51.04 3.35-1 3.92-4.86 11.37-15.58 15.04-21.9" />
      <path d="M47.88 14.25c2.78 1.94 7.19 7.96 7.89 10.97" />
      <path d="M83.37 11.75c.04.44.17 1.17-.08 1.78-1.64 3.97-4.83 8.6-10.59 14.04" />
      <path d="M43.07 32.89c2.31.49 5.31.2 7.39.01 8.75-.8 23.4-2.48 31.83-3.06 2.42-.17 5.21-.57 7.57.17" />
      <path d="M48.28 50.89c2.59.49 5.06.35 7.1.24 7.46-.44 16.67-1.75 23.87-2.56 2.14-.24 4.38-.64 6.52-.3" />
      <path d="M38 72.45c2.5.55 5.3.53 7.74.19 10.76-1.51 30.31-3.45 42.64-4.38 2.43-.18 5.71-.1 8.12.25" />
      <path d="M65.26 34.25c.93.93 1.46 2.23 1.46 3.25 0 2.83-.12 37.06-.17 53.5-.01 3.86-.02 6.74-.02 8" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(14.25 15.13)">{"1"}</text>
      <text transform="translate(8.25 40.63)">{"2"}</text>
      <text transform="translate(3.75 96.13)">{"3"}</text>
      <text transform="translate(41.25 12.13)">{"4"}</text>
      <text transform="translate(75.75 9.13)">{"5"}</text>
      <text transform="translate(39.75 28.63)">{"6"}</text>
      <text transform="translate(42.75 49.97)">{"7"}</text>
      <text transform="translate(41.25 69.77)">{"8"}</text>
      <text transform="translate(59.25 43.63)">{"9"}</text>
    </g>
  </svg>
);

export default Kanji洋;
