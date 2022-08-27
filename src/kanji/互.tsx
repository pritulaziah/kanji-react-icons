import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji互: KanjiIconType = (props) => (
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
      <path d="M23.5 21.34c2.61.95 5.82.56 8.5.31 11.48-1.08 32.06-3.69 43.25-4.27 2.58-.13 5.2-.27 7.75.29" />
      <path d="M43.5 23.5c.75 1.5.77 2.89.25 5.25-2.5 11.25-8.25 27-11.38 35.6-.87 2.4-.59 3.91 2.63 3.4 11-1.75 16.75-3 32.75-4.5" />
      <path d="M43.5 42.5c1.62.62 3.27 1.01 5.96.53 8.04-1.41 13.16-2.41 19.51-3.91 4.27-1.01 5.28.79 4.19 4.76-2.43 8.86-6.45 28.17-9.91 44.87" />
      <path d="M15.75 91.71c3.75.91 6.94.83 10.12.61 13.34-.94 38.88-2.45 55.97-3.08 3.74-.14 7.72.11 11.41.9" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(16.5 21.13)">{"1"}</text>
      <text transform="translate(35.5 32.5)">{"2"}</text>
      <text transform="translate(47.5 39.5)">{"3"}</text>
      <text transform="translate(13.5 88.63)">{"4"}</text>
    </g>
  </svg>
);

export default Kanji互;
