import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji押: KanjiIconType = (props) => (
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
      <path d="M13 39.92c2.08.25 1.27.55 3.5.25 5.5-.75 15.5-2.5 24.67-3.67" />
      <path d="M28.77 16c.48.92 1.76 2.49 1.76 5.52 0 15.23.24 51.96.24 63.4 0 14.25-6.32 3.53-7.77 2" />
      <path d="M12.5 65.68c1.25 1.78 3.83 1.61 6.5-.18 5-3.36 9.5-7.42 20.75-15.5" />
      <path d="M46.45 22.81c.31.66.83 2.1.99 2.91C49 34 51.09 49.45 51.91 61.75" />
      <path d="M48.42 25.25c12.02-1.52 31.07-4.61 39.34-5.27 3.04-.24 4.86 1.17 4.75 3.94-.26 6.59-2.77 30.58-3.97 34.63" />
      <path d="M50.9 41.45c9.04-.82 18.05-1.97 27.08-2.92 1.09-.11 2.14-.23 3.15-.33" />
      <path d="M52.49 58.63c10.46-1.5 25.22-2.92 36.66-3.55" />
      <path d="M67.61 24.94c.89.56 1.44 2.03 1.44 3.81-.03 8.98.3 65.54.3 68.47" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(6.75 39.13)">{"1"}</text>
      <text transform="translate(21.75 24.13)">{"2"}</text>
      <text transform="translate(5.5 71.5)">{"3"}</text>
      <text transform="translate(39.75 30.13)">{"4"}</text>
      <text transform="translate(49.5 21.5)">{"5"}</text>
      <text transform="translate(54.75 37.55)">{"6"}</text>
      <text transform="translate(54.75 54.5)">{"7"}</text>
      <text transform="translate(60.5 32.5)">{"8"}</text>
    </g>
  </svg>
);

export default Kanji押;
