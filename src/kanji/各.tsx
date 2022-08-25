import * as React from "react";
import { SVGProps } from "react";

const Kanji各 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M43.71 11.5c.06.76.12 1.96-.12 3.05-1.44 6.43-9.72 20.54-21.06 29.17" />
      <path d="M42.74 23.42c.41.04 2.19.12 3.34-.12 5.16-1.05 12.62-2.82 18.14-4.01 3.79-.81 4.61 1.43 3.65 3.65C62.56 35.07 41.5 62.25 17.44 71.5" />
      <path d="M37.71 28.93c5.79 5.32 29.16 23.45 41.36 32.01 3.23 2.27 6.51 4.69 10.3 5.81" />
      <path d="M34 71.73c1.06 1.09 1.26 1.9 1.6 3.27 1.09 4.44 2 12.24 2.79 18.77.17 1.38.33 2.71.49 3.93" />
      <path d="M36.69 73.23c8.52-1.23 21.58-2.48 28.8-3.29 3.94-.44 6.92-.9 5.92 4.07-1 4.96-2.42 11.07-3.85 17.36" />
      <path d="M39.34 94.82c5.06-.56 16.66-1.39 25.8-2.16 1.6-.13 3.12-.27 4.52-.39" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(35.5 12.5)">{"1"}</text>
      <text transform="translate(50.5 19.5)">{"2"}</text>
      <text transform="translate(38.5 41.5)">{"3"}</text>
      <text transform="translate(28.5 80.91)">{"4"}</text>
      <text transform="translate(38.5 69.5)">{"5"}</text>
      <text transform="translate(42.5 91.5)">{"6"}</text>
    </g>
  </svg>
);

export default Kanji各;
