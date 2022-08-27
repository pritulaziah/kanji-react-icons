import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji利: KanjiIconType = (props) => (
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
      <path d="M46.81 12.75c.08.43.18 1.11-.17 1.72-2.1 3.63-14.12 11.61-30.58 16.49" />
      <path d="M11.87 45.2c.44.25 1.6.64 2.77.73 3.2.24 30.14-5.66 38.15-6.88 1.16-.18 1.46-.24 2.18 0" />
      <path d="M35.93 25.88c.89.49 1.59 3.69 1.59 4.67 0 5.72-.17 60.34-.17 61.45 0 13.25-6.6 2-7.35 1.25" />
      <path d="M36.38 44.43c-4.46 11.71-11.91 26.16-22.02 35.73" />
      <path d="M40.46 50.84c4.87 2.35 9 7.05 11.62 10.08" />
      <path d="M66.77 27.33c.98.92 1.67 1.99 1.76 5.02.4 14.55-.02 30.19-.02 35.15" />
      <path d="M89.77 11.83c.98.92 1.67 1.99 1.76 5.02.4 14.55-.26 71.16-.26 76.12 0 11.78-6.71 1.5-8.21.25" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(39.5 13.5)">{"1"}</text>
      <text transform="translate(4.5 46.5)">{"2"}</text>
      <text transform="translate(30.5 35.5)">{"3"}</text>
      <text transform="translate(24.5 54.5)">{"4"}</text>
      <text transform="translate(45.5 50.5)">{"5"}</text>
      <text transform="translate(58.5 28.5)">{"6"}</text>
      <text transform="translate(80.5 13.5)">{"7"}</text>
    </g>
  </svg>
);

export default Kanji利;
