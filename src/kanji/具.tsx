import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji具: KanjiIconType = (props) => (
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
      <path d="M33.59 18.13c.63 1.02 1.55 1.79 1.55 3.15s-.42 37.5-.42 38.18c0 .68.21.68.42 2.04" />
      <path d="M36.2 19.55c5.55-.8 30.83-3.35 34.09-3.56 2.72-.17 4.86.95 4.63 2.22-.29 1.6-1.06 25.37-1.05 40.37" />
      <path d="M36.14 32.74c6.58-.79 13.19-1.42 19.79-2.03 1.77-.16 3.51-.32 5.18-.47" />
      <path d="M36 46.5c6.7-.59 13.39-1.25 20.09-1.89 1.55-.15 3.08-.29 4.56-.42" />
      <path d="M35.75 59c8-.75 25.75-2.25 36.75-3.25" />
      <path d="M15.75 72.7c1.52.54 4.32.8 5.82.54 6.15-1.05 50.18-5.99 66.11-5.23 2.53.12 4.05.26 5.31.53" />
      <path d="M40.75 77.14c.06.44.12 1.13-.12 1.76-1.43 3.71-9.62 11.84-20.82 16.82" />
      <path d="M69.52 79.58c5.4 2.58 13.94 10.62 15.29 14.63" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(27.75 27.13)">{"1"}</text>
      <text transform="translate(38.25 16.5)">{"2"}</text>
      <text transform="translate(38.5 30.13)">{"3"}</text>
      <text transform="translate(38.5 43.63)">{"4"}</text>
      <text transform="translate(38.5 55.63)">{"5"}</text>
      <text transform="translate(8.25 73.66)">{"6"}</text>
      <text transform="translate(32.5 81.5)">{"7"}</text>
      <text transform="translate(59.5 80.5)">{"8"}</text>
    </g>
  </svg>
);

export default Kanji具;
