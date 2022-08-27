import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji省: KanjiIconType = (props) => (
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
      <path d="M56.1 12.5c.08.24 1.16 1.27 1.24 2.82.4 7.49.19 17.99.25 20.62.16 7.55-5.09 3.8-7.62 1.63" />
      <path d="M36.22 24.68c.05.38.19 1-.1 1.52-2.1 3.79-10.98 11.1-18.2 14.59" />
      <path d="M76.17 20.92c6.59 2.16 15.43 7.7 17.08 11.06" />
      <path d="M69.53 25.53c.14.95.42 2.46-.29 3.8-5.8 11.08-28.14 28.98-50.81 36.42" />
      <path d="M41.25 51.39c.62 1.03 1.53 2.79 1.53 4.17 0 1.37.08 39.7.08 40.39" />
      <path d="M43.82 53.31c5.68-.56 29.91-3.87 33.12-4.07 2.68-.17 3.56.76 3.56 3.23.01 4.28-.05 24.51-.04 39.59 0 1.55 0 2.24-.21 3.26" />
      <path d="M43.76 65.08c6.01-.2 12.02-.75 18.01-1.18 1.8-.13 3.58-.26 5.29-.37" />
      <path d="M44.05 78.91c5.76-.35 11.52-.84 17.27-1.24 1.57-.11 3.14-.22 4.68-.31" />
      <path d="M43.66 93.29c7.01 0 27.39-1.54 36.46-1.54" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(47.5 12.5)">{"1"}</text>
      <text transform="translate(27.75 23.5)">{"2"}</text>
      <text transform="translate(72.25 17.63)">{"3"}</text>
      <text transform="translate(62.25 24.13)">{"4"}</text>
      <text transform="translate(35.5 67.5)">{"5"}</text>
      <text transform="translate(61.5 48.5)">{"6"}</text>
      <text transform="translate(47.5 62.5)">{"7"}</text>
      <text transform="translate(47.46 75.13)">{"8"}</text>
      <text transform="translate(47.46 90.13)">{"9"}</text>
    </g>
  </svg>
);

export default Kanji省;
