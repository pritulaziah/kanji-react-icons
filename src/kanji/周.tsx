import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji周: KanjiIconType = (props) => (
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
      <path d="M25.25 16c1.12 1.12 1.46 2.74 1.5 5 .5 32 .5 59-13.5 73.75" />
      <path d="M27.25 17.75c8.39-.88 41.3-3.77 50.11-4.57 5.74-.52 7.62-.19 7.64 5.94.03 9.63 0 63.78 0 69.13 0 12.25-6.25 4-8.83 1.42" />
      <path d="M37.72 33.48c1.42.45 4.02.38 5.44.27 4.6-.35 18.83-2.53 24.51-2.75 2.36-.09 3.78.08 4.96.28" />
      <path d="M53.72 21.42c.81.81 1.25 2.2 1.25 3.49 0 4.34.07 16.84.07 22.62" />
      <path d="M35.32 49.5c2.06.38 4.63.25 6.7.07 8.03-.69 15.82-1.8 26.86-2.48 2.32-.14 4.74-.22 7.05.13" />
      <path d="M39.88 62.12c.81.74 1.43 2.17 1.62 3.26.84 4.98 1.5 9.36 2.34 14.6.17 1.07.35 2.17.54 3.32" />
      <path d="M42.35 64.25c5.96-.92 15.55-2.27 20.89-2.82 3.28-.34 4.88 1.2 4.39 3.86-.72 3.9-1.64 8.07-2.9 12.59" />
      <path d="M45.15 80.68c3.46-.46 11.71-1.14 17.85-1.52 1.35-.08 2.57-.14 3.58-.16" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(19.5 24.5)">{"1"}</text>
      <text transform="translate(30.75 14.5)">{"2"}</text>
      <text transform="translate(35.25 30.13)">{"3"}</text>
      <text transform="translate(59.5 25.63)">{"4"}</text>
      <text transform="translate(33.5 46.63)">{"5"}</text>
      <text transform="translate(34.5 71.5)">{"6"}</text>
      <text transform="translate(43.5 61.63)">{"7"}</text>
      <text transform="translate(47.5 77.5)">{"8"}</text>
    </g>
  </svg>
);

export default Kanji周;
