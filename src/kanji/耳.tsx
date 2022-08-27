import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji耳: KanjiIconType = (props) => (
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
      <path d="M21 20.25c1.61.5 4.58.72 6.17.5 14.33-2 35.08-5 54.69-5.74 2.68-.1 4.29.24 5.64.49" />
      <path d="M36.68 22.5c1.07.75 1.64 2.71 1.64 4.73 0 2.02-.33 34.76-.33 42.02" />
      <path d="M40 35.5c4.85 0 9.78-.93 14.58-1.5 1.57-.19 3.17-.38 4.75-.55" />
      <path d="M39.5 51.25c4.9 0 9.86-.82 14.72-1.38 1.51-.17 3.04-.34 4.55-.5" />
      <path d="M17.5 71c.5.75 1.76 1.81 3.5 1.5 7-1.25 48-8.75 58.75-10.75" />
      <path d="M71.25 18.5c.5 1 1.25 2.25 1.25 3.5s.25 63.25.25 73.5" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(12.5 21.5)">{"1"}</text>
      <text transform="translate(29.5 30.5)">{"2"}</text>
      <text transform="translate(43.5 31.5)">{"3"}</text>
      <text transform="translate(43.5 48)">{"4"}</text>
      <text transform="translate(8.5 76.5)">{"5"}</text>
      <text transform="translate(64.5 25.5)">{"6"}</text>
    </g>
  </svg>
);

export default Kanji耳;
