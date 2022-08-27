import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji切: KanjiIconType = (props) => (
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
      <path d="M12 44.73c.88.3 2.51.44 3.39.3 8.69-1.36 18.61-5.29 24.36-6.79 1.42-.37 2.36-.36 3.09-.21" />
      <path d="M26 18.5c.81 1 1.63 1.67 1.9 3.01.27 1.34.1 42.08.1 46.24 0 2.75 1.5 3.75 2.75 3C35.47 67.92 44.5 62 49.25 58.5" />
      <path d="M52.75 30.5c1.75.75 3.96.66 5.48.4 12.48-2.08 26.35-4.64 33.27-5.4 4.5-.5 6.51 1.5 6.25 5-1 13.25-6 43.25-12.5 56.25-5.2 10.4-10.18.34-12-.75" />
      <path d="M67.94 37.18c.07 1.22.1 3.15-.14 4.9-2.3 17.17-9.32 32.6-24.3 45.92" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(4.5 45.5)">{"1"}</text>
      <text transform="translate(17.5 19.5)">{"2"}</text>
      <text transform="translate(45.75 29.5)">{"3"}</text>
      <text transform="translate(59.5 40.5)">{"4"}</text>
    </g>
  </svg>
);

export default Kanji切;
