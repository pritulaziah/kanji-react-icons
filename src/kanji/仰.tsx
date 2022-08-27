import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji仰: KanjiIconType = (props) => (
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
      <path d="M30.77 17.5c.2 2.09-.05 3.57-.69 5.35-4.02 11.39-9.62 23.33-18.83 37.19" />
      <path d="M23.78 42.75c1.05 1.05 1.26 2.38 1.26 3.98 0 13.4.13 32.05 0 43.27-.02 2.33-.04 4.29-.04 5.75" />
      <path d="M59.84 14.44c.12.9-.06 1.73-.71 2.41-3.13 3.28-5.75 5.53-12 8.78" />
      <path d="M43.37 24.35c.71.71 1.07 2.03 1.07 3.34 0 2.96-.07 36.81-.07 40.94 0 1.8.61 2.14 2.38.75s9-6.38 17.57-12.15" />
      <path d="M70.5 25.58c1.25.3 2.73.34 4.05.15 1.32-.19 16.26-3.41 17.91-3.6 1.65-.19 4.08-.38 4.29 3.64C97 30.5 95.25 52 91.7 62.39c-2.77 8.12-6.27.96-6.76.57" />
      <path d="M71.66 26.62c.86.86 1.31 2.25 1.31 3.87v68.35" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(22.5 16.5)">{"1"}</text>
      <text transform="translate(17.5 62.5)">{"2"}</text>
      <text transform="translate(51.5 13.5)">{"3"}</text>
      <text transform="translate(37.5 31.5)">{"4"}</text>
      <text transform="translate(73.5 22.5)">{"5"}</text>
      <text transform="translate(65.25 34.5)">{"6"}</text>
    </g>
  </svg>
);

export default Kanji仰;
