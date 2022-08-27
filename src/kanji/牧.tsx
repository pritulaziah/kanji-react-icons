import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji牧: KanjiIconType = (props) => (
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
      <path d="M21.77 26.14c.1 1.18.02 2.34-.21 3.49-1.11 5.7-5.61 15.69-11.25 24.08" />
      <path d="M21.75 40.25c7.5 0 16.25-3.5 20.75-4.5 1.22-.27 2.5-.5 3.75-.25" />
      <path d="M33.87 12.75c1.13 1.13 1.46 2.5 1.46 4 0 1.02.03 70 .03 76.25 0 13.5-6.49 2.88-7.61 1.75" />
      <path d="M13 70.58c2.43 1.29 4.49 1.28 6.2-.04C22.33 68.42 37.28 58.21 41.5 55" />
      <path d="M64.66 13.89c.05.96.04 2.29-.34 3.62C61.89 26 57.75 39.75 49.5 53" />
      <path d="M59.65 40.17c1.72.06 3.42-.06 5.11-.34 6.11-.92 15.38-3.48 22.09-5.04 2.09-.53 4.22-.79 6.4-.79" />
      <path d="M80.26 46.18c.37 1.45.34 2.62-.23 4.88-5.18 20.51-15.9 37.32-34.27 45.2" />
      <path d="M55.5 57.26c4.36.94 19.77 20.74 30.82 31.3 2.68 2.67 5.82 4.74 9.43 6.2" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(12.75 24.13)">{"1"}</text>
      <text transform="translate(26.25 36.13)">{"2"}</text>
      <text transform="translate(30.75 7.63)">{"3"}</text>
      <text transform="translate(5.25 78.13)">{"4"}</text>
      <text transform="translate(66.75 10.63)">{"5"}</text>
      <text transform="translate(63.75 36.13)">{"6"}</text>
      <text transform="translate(86.25 46.63)">{"7"}</text>
      <text transform="translate(59.25 55.63)">{"8"}</text>
    </g>
  </svg>
);

export default Kanji牧;
