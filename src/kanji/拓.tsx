import * as React from "react";
import { SVGProps } from "react";

const Kanji拓 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M15 38.42c1.89.23 3.68.46 5.61.23 4.75-.56 12.68-1.65 19.51-2.56 1.52-.2 3.01-.34 4.54-.34" />
      <path d="M31.52 15c1.18 1.18 1.51 3 1.51 5.52 0 15.23-.01 53.71-.01 65.15 0 14.25-6.32 3.53-7.77 2" />
      <path d="M14.75 66.93c1 .95 2.25 1.07 4.25-.18 5.11-3.19 7.75-4.75 21.25-13.08" />
      <path d="M48.66 32.76c2.59.49 4.81.29 6.97.09 11.02-.99 22.15-2.91 33.62-3.45 2.29-.11 4.61-.28 6.86.24" />
      <path d="M66.54 34.9c.07 1.04-.14 2.26-.64 3.69-2.78 8.03-12.15 28.15-24.63 40.91" />
      <path d="M56.6 62.62c.92.93 1 2.18 1.14 3.39.55 4.87 1.19 11.96 1.92 20.23.16 1.88.33 3.81.51 5.77" />
      <path d="M58.35 63.87c9.15-1.25 23.15-2.75 29.31-3.17 2.23-.15 3.57 1.76 3.23 3.47-1.39 7.07-2.39 14.07-3.47 21.06" />
      <path d="M60.84 88.73c5.04-.48 15.11-1.6 23.16-2.22 2.04-.16 3.93-.27 5.56-.3" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(8.5 39.13)">{"1"}</text>
      <text transform="translate(23.25 15.5)">{"2"}</text>
      <text transform="translate(6.5 70.5)">{"3"}</text>
      <text transform="translate(46.5 29.5)">{"4"}</text>
      <text transform="translate(56.5 42.5)">{"5"}</text>
      <text transform="translate(51.75 78.5)">{"6"}</text>
      <text transform="translate(64.5 59.5)">{"7"}</text>
      <text transform="translate(65.5 85.5)">{"8"}</text>
    </g>
  </svg>
);

export default Kanji拓;
