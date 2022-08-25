import * as React from "react";
import { SVGProps } from "react";

const Kanji背 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M22.42 27.07c1.51.3 1.88.45 3.39.45s13.11-3.91 14.43-3.91" />
      <path d="M39.86 10.68c1.13.9 2.07 2.96 2.07 3.56 0 3.26.19 22.04.19 24.08" />
      <path d="M19.54 44.52c2.26 1.35 3.99 1.43 5.65.75 9.98-4.06 20.68-8.26 25.95-10.52" />
      <path d="M89 13.31c.16.23.22.87-.15 1.25-3.59 3.64-12.47 8.98-20.25 10.88" />
      <path d="M65.14 8.5c.56.63 1.32 1.86 1.32 3.13 0 .85.27 18.59.27 21.17 0 6.62 7.71 6 13.98 6 3.19 0 9.43-.12 11.41-2.01 1.98-1.89 2.18-4.62 2.38-6.51" />
      <path d="M40.09 47.15c.63.83 1.05 1.65 1.25 2.47.21.82.03 45.65-.07 47.49" />
      <path d="M42.64 48.01c2.56-.16 26.02-3.19 27.92-3.38 3.41-.35 4.66 2.74 4.22 3.96-.42 1.17-.5 26.73-.64 43.28-.09 10.62-5.14 3.59-7.25 1.71" />
      <path d="M42.5 63.74c5.24-.64 10.49-1.24 15.75-1.79 1.41-.15 2.8-.29 4.17-.42" />
      <path d="M43 77.39c4.81-.35 9.61-.83 14.41-1.25l4.17-.36" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(16.5 27.5)">{"1"}</text>
      <text transform="translate(31.5 11.5)">{"2"}</text>
      <text transform="translate(11.5 49.5)">{"3"}</text>
      <text transform="translate(80.5 12.5)">{"4"}</text>
      <text transform="translate(57.5 8.5)">{"5"}</text>
      <text transform="translate(34.5 56.5)">{"6"}</text>
      <text transform="translate(48.5 44.5)">{"7"}</text>
      <text transform="translate(46.5 59.5)">{"8"}</text>
      <text transform="translate(46.5 73.48)">{"9"}</text>
    </g>
  </svg>
);

export default Kanji背;
