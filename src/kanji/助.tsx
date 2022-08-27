import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji助: KanjiIconType = (props) => (
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
      <path d="M23.25 24.79c.42.88.71 1.75.85 2.6.14.86.31 51.89.26 53.79" />
      <path d="M24.93 25.76c1.68-.09 17.1-2.54 18.35-2.68 2.24-.26 3.1 2.98 2.82 4.23-.27 1.2-.13 28.16-.21 45.31" />
      <path d="M24.99 43.74c3.62-.57 6.74-1.14 10.37-1.66l2.17-.3" />
      <path d="M25.33 60.97c3.17-.63 6.36-1.18 9.56-1.67.83-.13 1.66-.25 2.51-.37" />
      <path d="M14.5 81.56c1.25 1.19 2.5 1.94 5.23 1.19 1.94-.54 21.38-6.56 29.52-9.5" />
      <path d="M55.33 45.41c1.07.67 2.44.55 3.41.36C67.5 44 86.03 39 90.37 38.31c2.83-.44 4.85 1.99 4.73 5.1-.35 8.59-9.74 40.56-14.17 46.23-4.18 5.36-5.68 1.86-9.46-1.67" />
      <path d="M74.5 19.17c.5.58.54 4.06.59 6.37.41 18.46-9.84 52.21-29.71 66.52" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(17.5 33.13)">{"1"}</text>
      <text transform="translate(24.5 22.63)">{"2"}</text>
      <text transform="translate(28.5 40.5)">{"3"}</text>
      <text transform="translate(28.5 56.55)">{"4"}</text>
      <text transform="translate(7.5 88.36)">{"5"}</text>
      <text transform="translate(54.5 42.5)">{"6"}</text>
      <text transform="translate(66.5 19.5)">{"7"}</text>
    </g>
  </svg>
);

export default Kanji助;
