import * as React from "react";
import { SVGProps } from "react";

const Kanji仲 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M35.25 18.38c.25 1.43.18 3.05-.63 4.86C29.44 34.77 23.88 46.25 11 59.62" />
      <path d="M27.28 42.75c.86.86 1.25 2.24 1.25 3.26 0 10.24-.02 29.97-.03 40.74V92" />
      <path d="M43.06 40.63c.78.78 1.31 1.72 1.57 3.04 1.04 5.2 1.68 9.97 2.76 16.83.21 1.33.44 2.74.69 4.25" />
      <path d="M45.2 42.03c14.67-2.66 37.93-5.42 46.63-5.8 3.39-.15 4.07 2.43 3.65 3.92-1.44 5.1-1.83 7.54-4.17 16.02" />
      <path d="M48.72 61.71c10.07-1.22 26.28-2.96 40.92-4.25 1.28-.11 2.51-.25 3.7-.37" />
      <path d="M67.76 15c1.12 1.12 1.73 2.75 1.73 4.16 0 4.65-.17 51.71-.21 69.59-.01 2.64-.01 5.14-.01 6.25" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(26.25 21.13)">{"1"}</text>
      <text transform="translate(21.75 58.63)">{"2"}</text>
      <text transform="translate(38.25 49.63)">{"3"}</text>
      <text transform="translate(47.25 37.63)">{"4"}</text>
      <text transform="translate(51.75 58.63)">{"5"}</text>
      <text transform="translate(60.49 20.76)">{"6"}</text>
    </g>
  </svg>
);

export default Kanji仲;
