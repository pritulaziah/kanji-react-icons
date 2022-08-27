import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji染: KanjiIconType = (props) => (
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
      <path d="M26.38 13.5c2.78 1.1 7.17 4.5 7.87 6.21" />
      <path d="M17.5 27.93c3 1.17 7.75 4.82 8.5 6.64" />
      <path d="M19.25 56.23c1.5.93 3.31.97 4.25-.18 2.75-3.36 5.5-7.47 8-11.76" />
      <path d="M57.25 10.88c.4.37 1.33.89 1.28 1.56C57 31.75 50.25 45.75 39.6 54.59" />
      <path d="M42.92 27.06c1.58.69 2.99.63 3.65.5s23.19-7.48 23.78-7.5c1.31-.07 2.63.5 2.23 1.97-.59 2.16-2.92 11.73-3.67 17.06-.85 6.03-.33 8.35 3.79 9.17 2.96.59 11.67.73 14.56.37 3.02-.38 3.48-2.88 3.54-5.16" />
      <path d="M14.92 69.5c1.83.59 3.92.91 6 .59 7.82-1.19 47.58-5.1 63.39-6 1.19-.07 2.69.16 4.43.5" />
      <path d="M51.47 56.91c1.08.43 1.95 1.92 1.95 2.82 0 7.23-.22 34.4-.22 34.87 0 11.4-4.2 3.9-6.2 1.9" />
      <path d="M45.29 73.85c-2.78 7.27-10.25 18.39-16.04 22.5" />
      <path d="M62.41 75.59c6.07 3.68 13.77 13.08 17.76 19.01" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(20.25 12.13)">{"1"}</text>
      <text transform="translate(11.25 28.55)">{"2"}</text>
      <text transform="translate(11.25 56.98)">{"3"}</text>
      <text transform="translate(48.75 9.13)">{"4"}</text>
      <text transform="translate(44.25 24.05)">{"5"}</text>
      <text transform="translate(8.25 72.13)">{"6"}</text>
      <text transform="translate(42.75 61.63)">{"7"}</text>
      <text transform="translate(33.75 79.55)">{"8"}</text>
      <text transform="translate(72.75 78.13)">{"9"}</text>
    </g>
  </svg>
);

export default Kanji染;
