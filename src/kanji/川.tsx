import * as React from "react";
import { SVGProps } from "react";

const Kanji川 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M27.22 25.68c.91 1.57 1.18 3.45 1.19 5.37.09 12.45.09 37.95-11.02 53.1" />
      <path d="M53.75 23.63c.94.94 1.41 2.37 1.41 3.9 0 .58-.01 28.48-.08 41.71-.02 3.31-.04 5.74-.06 6.63" />
      <path d="M85.56 15.63a6.038 6.038 0 0 1 1.76 4.25c0 .74.23 46.86.09 66.12-.03 4.31-.06 7.61-.09 8.63" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(18.5 25.5)">{"1"}</text>
      <text transform="translate(45.75 23.5)">{"2"}</text>
      <text transform="translate(75.5 16.5)">{"3"}</text>
    </g>
  </svg>
);

export default Kanji川;
