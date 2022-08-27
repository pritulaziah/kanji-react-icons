import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji攻: KanjiIconType = (props) => (
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
      <path d="M12.04 33.75c1.96.38 4.14.16 5.61-.08 4.32-.7 14.05-2.27 20.53-3.54 1.33-.26 3.19-.38 4.31-.13" />
      <path d="M28.35 35.27c.82.82 1.12 2.11 1.12 3.73 0 5.95-.09 23.43-.09 28.25" />
      <path d="M12.25 74.5c.75.88 2.12 1 3.81.25 5.8-2.58 11.81-5.75 22.1-11" />
      <path d="M61.39 13.14c.05.95.28 2.51-.09 3.82-2.39 8.39-8.27 24.93-16.55 36.54" />
      <path d="M57.99 35.67c1.42.08 2.74.03 4.13-.21 6.72-1.19 15.17-3.47 23.41-5.87 1.55-.45 3.72-.6 5.34-.35" />
      <path d="M76.83 36.18c.42 1.2.47 2.18-.19 4.78C70.67 64.52 60.75 82 37.17 93.25" />
      <path d="M51.71 51.51c1.79 0 22.16 23.87 34.75 35.77 2.47 2.33 4.29 3.73 7.29 5.48" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(5.5 34.63)">{"1"}</text>
      <text transform="translate(21.5 43.63)">{"2"}</text>
      <text transform="translate(4.5 78.5)">{"3"}</text>
      <text transform="translate(51.5 13.5)">{"4"}</text>
      <text transform="translate(62.5 31.5)">{"5"}</text>
      <text transform="translate(68.5 44.5)">{"6"}</text>
      <text transform="translate(55.5 51.13)">{"7"}</text>
    </g>
  </svg>
);

export default Kanji攻;
