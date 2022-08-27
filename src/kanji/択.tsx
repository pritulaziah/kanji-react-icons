import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji択: KanjiIconType = (props) => (
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
      <path d="M12.75 38.67c1.88.71 3.8.7 6.01.42 4.82-.63 12.76-1.97 19.49-2.81 1.38-.17 3.12-.27 4.41-.02" />
      <path d="M29.52 15.25c1.18 1.18 1.51 2.75 1.51 5.02 0 15.23.24 54.71.24 66.15 0 14.25-6.32 3.53-7.77 2" />
      <path d="M12.5 67.18c1.41 1.41 2.62 1.07 4.25.07 5.13-3.16 9.38-5.75 21.5-13.33" />
      <path d="M50.14 23.07c1.11.68 2.17 1.21 3.77 1.04 9.34-.99 21.44-2.5 24.88-2.97 2.96-.4 4.67 1.69 4.21 3.94-1 4.92-2.25 10.42-4 18.67" />
      <path d="M52.5 47.75c3.36-.2 16.14-1.91 24-2.78 2.25-.25 4.06-.18 5.06-.24" />
      <path d="M51.5 24.12c1 1 1.25 2 1.25 4 0 21.54-.38 50-15.5 65.62" />
      <path d="M61 47.5c6.02 12.71 15.96 29.35 23.68 38.58 2.53 3.02 4.94 5.55 7.57 7.67" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(6.75 40.5)">{"1"}</text>
      <text transform="translate(20.5 15.5)">{"2"}</text>
      <text transform="translate(4.5 71.5)">{"3"}</text>
      <text transform="translate(53.5 20.5)">{"4"}</text>
      <text transform="translate(57.75 43.55)">{"5"}</text>
      <text transform="translate(45.5 32.5)">{"6"}</text>
      <text transform="translate(68.5 56.5)">{"7"}</text>
    </g>
  </svg>
);

export default Kanji択;
