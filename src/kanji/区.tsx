import * as React from "react";
import { SVGProps } from "react";

const Kanji区 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M18.88 23.93c2.78.65 5.74.51 8.58.17 18.07-2.16 35.69-3.8 51.98-5.95 3.2-.42 5.17-.25 6.79.02" />
      <path d="M68.57 30.43c.25 1.37.29 2.74-.47 4.76C62 51.38 49.62 64.75 32.9 75.75" />
      <path d="M35.75 43.25C51.07 47.69 70.34 63.1 78 72.5" />
      <path d="M20.36 25.3c.73.73 1 2.18 1 3.7v57.34c0 4.4.77 5.33 5.02 4.74 16.58-2.31 44.87-3.94 59.2-3.66 3.34.07 6.17.23 8.23.68" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(23.5 20.5)">{"1"}</text>
      <text transform="translate(60.5 30.5)">{"2"}</text>
      <text transform="translate(31.5 40.5)">{"3"}</text>
      <text transform="translate(14.5 32.5)">{"4"}</text>
    </g>
  </svg>
);

export default Kanji区;
