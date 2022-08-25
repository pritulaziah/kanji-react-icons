import * as React from "react";
import { SVGProps } from "react";

const Kanji忙 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M16.75 37.25c0 6.61-2.97 16.36-3.75 18.25" />
      <path d="M31.27 28.58c2.75 1.39 7.11 5.72 7.79 7.88" />
      <path d="M24.87 12.25c1.09.5 1.74 2.25 1.96 3.25.22 1 0 73.75-.22 80" />
      <path d="M60.16 18.86c4.35 2.03 10.19 8 12.77 13.78" />
      <path d="M40.13 43.96c1.1.12 3.6.83 4.67.66 8.62-1.38 37.05-6.01 47.99-6.37 1.81-.06 3.71 0 5.58.84" />
      <path d="M52.47 46.5c.67.92 1.51 3.57 1.51 4.85v26.53c0 4.8.43 10.17 8 10.87 8.2.76 21.85-.16 23.71-.25 3.21-.17 5.95-.67 7.59-1.26" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(11.5 36.13)">{"1"}</text>
      <text transform="translate(31.5 26.5)">{"2"}</text>
      <text transform="translate(15.75 12.5)">{"3"}</text>
      <text transform="translate(55.5 16)">{"4"}</text>
      <text transform="translate(43.5 41.5)">{"5"}</text>
      <text transform="translate(46.5 54.5)">{"6"}</text>
    </g>
  </svg>
);

export default Kanji忙;
