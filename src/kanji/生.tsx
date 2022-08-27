import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji生: KanjiIconType = (props) => (
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
      <path d="M31.02 27.14c.03.57.07 1.47-.07 2.28-.82 4.81-5.52 15.37-11.95 21.83" />
      <path d="M30.88 40.92c.94.38 2.66.46 3.6.38 6.77-.55 34.52-6.8 40.36-7.38 1.56-.16 2.21-.09 3.03-.02" />
      <path d="M30.88 64.53c.94.28 2.66.34 3.6.28 6.77-.4 35.52-4.99 41.36-5.42 1.56-.11 2.21-.06 3.03-.02" />
      <path d="M17.88 91.25c1.47.3 4.15.36 5.62.3 10.56-.43 52.41-5.34 61.52-5.8 2.43-.12 4.48.25 6.73.98" />
      <path d="M51.81 12.88c.76.52 2.36 3.93 2.51 4.98.15 1.05-.1 63.46-.25 70.02" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(22.75 25.63)">{"1"}</text>
      <text transform="translate(36 37.28)">{"2"}</text>
      <text transform="translate(21.5 66.13)">{"3"}</text>
      <text transform="translate(8.5 89.5)">{"4"}</text>
      <text transform="translate(42.5 10.5)">{"5"}</text>
    </g>
  </svg>
);

export default Kanji生;
