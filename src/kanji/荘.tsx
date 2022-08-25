import * as React from "react";
import { SVGProps } from "react";

const Kanji荘 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M22.5 24.22c3 .78 6.26.59 9 .37 12.92-1.04 36.88-3.11 50.13-3.5 2.8-.08 5.63-.24 8.38.44" />
      <path d="M36.36 13.1c.89.89 1.42 2.04 1.57 2.76 1.45 6.79 2.44 13.03 2.86 15.49" />
      <path d="M72.52 11.39c.37.96.36 1.92-.06 3.1-2.43 6.92-4.21 11.01-6.44 16.14" />
      <path d="M32.79 37.92c1.15 1.15 1.49 2.58 1.49 4.65 0 10.38.08 30.6.08 49.47 0 2.8-.12 4.22-.12 6.96" />
      <path d="M18.05 50.09c3.11 1.61 8.04 6.62 8.82 9.13" />
      <path d="M14 82.46c1.5.79 2.84.65 3.94-.13 2.56-1.83 6.31-4.7 9.97-7.24" />
      <path d="M44.1 62.28c2.65.84 5.56.84 7.77.62 9.86-1.01 25.15-2.03 35.01-2.65 2.38-.15 4.67-.24 7 .41" />
      <path d="M65.76 40.83c1.26 1.26 1.76 2.79 1.76 4.89 0 6.53-.02 25.34-.02 42.41" />
      <path d="M48.09 89.93c1.93.63 4.32.31 6.3.18 9.24-.6 18.36-1.23 27.49-1.87 2.04-.14 4.13-.14 6.15.25" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(15.75 25.5)">{"1"}</text>
      <text transform="translate(26.5 13.5)">{"2"}</text>
      <text transform="translate(63.75 12.5)">{"3"}</text>
      <text transform="translate(23.25 39.13)">{"4"}</text>
      <text transform="translate(10.5 51.5)">{"5"}</text>
      <text transform="translate(6.5 87.5)">{"6"}</text>
      <text transform="translate(41.5 59.5)">{"7"}</text>
      <text transform="translate(56.25 41.5)">{"8"}</text>
      <text transform="translate(44.25 86.5)">{"9"}</text>
    </g>
  </svg>
);

export default Kanji荘;
