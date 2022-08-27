import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Katakanaダ: KanjiIconType = (props) => (
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
      <path d="M48.83 19.75c.43 1.72.39 4-.58 5.89-4.77 9.34-9.1 17.82-18.63 27.73" />
      <path d="M49.75 30.38c2.5.62 5.67-.14 7.62-.62 6-1.5 10.5-2.62 15.88-4.12 5.79-1.62 8.22.31 5.88 5.62C68.25 55.88 57 75.25 29 91.25" />
      <path d="M43.38 45.62c6.75 3.5 10.62 7.88 14.75 15.25" />
      <path d="M83.62 14.19c2.95 1.81 6.43 5.57 8.3 8.81" />
      <path d="M90.12 9.38c3.02 1.63 6.58 5 8.5 7.9" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(41.38 17.25)">{"1"}</text>
      <text transform="translate(54.75 26)">{"2"}</text>
      <text transform="translate(45.13 43.5)">{"3"}</text>
      <text transform="translate(76.5 13)">{"4"}</text>
      <text transform="translate(82.63 8.13)">{"5"}</text>
    </g>
  </svg>
);

export default Katakanaダ;
