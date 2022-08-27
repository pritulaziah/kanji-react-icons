import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji没: KanjiIconType = (props) => (
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
      <path d="M18.63 17.25c4.72 1.56 12.19 6.41 13.37 8.84" />
      <path d="M15.25 39.75c4.24 1.63 10.94 6.71 12 9.25" />
      <path d="M15 91.73c2 .64 3.28-.18 4.36-1.75 3.14-4.57 9.04-14.66 11.89-20.49" />
      <path d="M51.79 17.13c.84.84 1.05 2.12 1.05 3.56 0 10.77-.84 22.31-12.83 27.7" />
      <path d="M53.11 18c5.64-.62 14.52-2.25 17.5-2.85 2.7-.55 4.15.85 3.65 3.65-.69 3.88-.78 10-.78 13.91 0 7.42 1.15 8.8 7.91 8.8 7.37 0 8.91-1.51 8.91-9.21" />
      <path d="M49.63 54.5c1.67.4 3.13.74 6.48.15s15.72-4.24 18.07-4.58c3.83-.56 5.05 1.17 3.13 4.6-10.56 18.96-22.56 32.71-43.56 42.5" />
      <path d="M48.17 64.37c5.54.35 20.96 16.13 35.39 26.75 2.93 2.16 5.57 4.01 9.28 5.25" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(11.5 18.5)">{"1"}</text>
      <text transform="translate(8.25 41.5)">{"2"}</text>
      <text transform="translate(7.5 96.5)">{"3"}</text>
      <text transform="translate(44.25 25.63)">{"4"}</text>
      <text transform="translate(54.75 14.5)">{"5"}</text>
      <text transform="translate(50.5 52.5)">{"6"}</text>
      <text transform="translate(41.5 68.5)">{"7"}</text>
    </g>
  </svg>
);

export default Kanji没;
