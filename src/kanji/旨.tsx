import * as React from "react";
import { SVGProps } from "react";

const Kanji旨 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M73.05 13.56c.2 1.44.03 2.33-.83 2.92-8.97 6.26-24.71 12.21-43.47 15.8" />
      <path d="M24.73 12.25c1.17.51 1.64 2.25 1.64 3.04 0 3.71-.11 10.71-.11 18.11 0 11.59 4 12.66 28.91 12.66 27.09 0 27.59-3.31 27.59-10.81" />
      <path d="M31.27 61.05c.73.95 1.16 2.29 1.16 3.43 0 1.14-.39 32.92-.39 33.5" />
      <path d="M33.4 62.19c3.28-.14 36.43-3.47 39.42-3.64 2.49-.14 4.09 1.58 3.9 2.43-.39 1.72-.27 34.64-.27 35.5" />
      <path d="M33.97 77.67c6.48 0 13.06-.93 19.5-1.48 2.19-.19 4.41-.38 6.54-.55" />
      <path d="M33.77 94.98c9.04-.61 29.56-2.25 40.82-2.78" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(64.5 13.5)">{"1"}</text>
      <text transform="translate(16.5 13.5)">{"2"}</text>
      <text transform="translate(24.5 68.5)">{"3"}</text>
      <text transform="translate(33.5 58.5)">{"4"}</text>
      <text transform="translate(36.5 74.5)">{"5"}</text>
      <text transform="translate(36.5 91.5)">{"6"}</text>
    </g>
  </svg>
);

export default Kanji旨;
