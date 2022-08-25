import * as React from "react";
import { SVGProps } from "react";

const Kanji氾 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M21.13 17.25c4.45 1.47 11.5 6.05 12.62 8.34" />
      <path d="M17.25 41.5c3.97 1.23 10.26 5.08 11.25 7" />
      <path d="M16.5 87.94c1.78 1.33 3.91 1.38 5.03-.26C24.79 82.92 28.04 77.08 31 71" />
      <path d="M44.48 22.11c.99.21 2.92.76 4.93.58 7.84-.69 23.9-3.03 26.33-3.68 3.98-1.07 7.05 1.92 6.41 6.17-1.14 7.57-2.39 18.07-6.77 30.08-3.14 8.62-7.21 1.02-7.95.61" />
      <path d="M46.07 22.41c1.18 1.09 1 2.59 1 4 0 16.34.34 30.29.28 41.61C47.25 88 49 89.96 71.83 89.96c21.67 0 23.06-3.46 23.06-14.55" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(14.5 17.5)">{"1"}</text>
      <text transform="translate(10.25 41.5)">{"2"}</text>
      <text transform="translate(9.5 91.5)">{"3"}</text>
      <text transform="translate(46.5 19.5)">{"4"}</text>
      <text transform="translate(39.5 31.5)">{"5"}</text>
    </g>
  </svg>
);

export default Kanji氾;
