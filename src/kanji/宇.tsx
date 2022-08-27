import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji宇: KanjiIconType = (props) => (
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
      <path d="M49.2 13.25c2.7 1.56 7.62 7.16 8.72 10.39" />
      <path d="M26.18 29.97c0 3.06-3.17 11.98-4.38 14.03" />
      <path d="M27.79 31.45c8.37-.87 49.03-4.99 55.82-5.32 10.61-.52 2.25 6.31-.4 8.17" />
      <path d="M35.67 44.75c.76.27 2.17.4 2.93.27 3.09-.53 20.91-3.03 29.28-3.64 1.27-.09 2.04.13 2.68.27" />
      <path d="M20.94 63.12c1.28.45 3.63.56 4.91.45 9.46-.84 46.9-4.49 60.72-4.44 2.13.01 3.41.21 4.48.44" />
      <path d="M53.08 45.83c.67.89 1.91 2.92 1.98 5.88.31 14.24-.2 35.86-.2 40.71 0 10.26-6.92 1.2-7.8.27" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(43.5 13.5)">{"1"}</text>
      <text transform="translate(18.5 33.05)">{"2"}</text>
      <text transform="translate(30.5 27.5)">{"3"}</text>
      <text transform="translate(33.5 41.5)">{"4"}</text>
      <text transform="translate(12.5 64.5)">{"5"}</text>
      <text transform="translate(46.5 53.5)">{"6"}</text>
    </g>
  </svg>
);

export default Kanji宇;
