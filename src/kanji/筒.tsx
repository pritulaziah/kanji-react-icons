import * as React from "react";
import { SVGProps } from "react";

const Kanji筒 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M29.25 13c.25.88-.01 1.76-.32 2.52-2.05 4.98-6.3 12.6-12.68 20.48" />
      <path d="M27.23 26.12c3.38 0 13.35-1.4 19.52-2.12 1.72-.2 3.2-.33 4.25-.33" />
      <path d="M32.77 28.33c2.57 1.61 6.65 6.63 7.29 9.13" />
      <path d="M61.75 12.25c.05.84.1 1.63-.21 2.42C59.5 20 56.73 26.21 52.25 32" />
      <path d="M61.48 22.66c6.51-.29 16.64-1.91 24.8-3.2 1.93-.31 3.54-.37 4.6-.37" />
      <path d="M73.28 25c.08.59-.01 1.14-.3 1.66-.93 2.42-2.02 4.81-4.98 8.34" />
      <path d="M23.67 44.32c.68 1.22 1.13 2.21.9 4.4-.18 1.71.02 27.56 0 40.78 0 3.77-.01 6.5-.01 7.31" />
      <path d="M25.39 45.75c9.36-.75 42.23-3.62 56.11-4.61 3.74-.27 4.97 1.76 4.97 4.44 0 2.44-.02 39.75-.02 45.35 0 10.82-4.63 4.33-6.62 1.96" />
      <path d="M36.99 56.54c1.67.68 3.67.6 5.39.5 8.5-.5 16.2-1.61 23.01-2.4 1.49-.17 2.65-.08 3.4.11" />
      <path d="M37.14 69.01c.61.61 1.28 1.9 1.48 2.91.89 3.95 1.12 5.97 1.68 9.86.25 1.71.51 3.36.81 4.78" />
      <path d="M39.37 70.33C49.75 69 60.46 67.94 66.1 67.52c2.67-.2 3.21 1.07 2.54 3.27-.96 3.14-1.76 5.83-2.75 9.58" />
      <path d="M42.11 83.87c5.44-.39 13.25-1.1 20.9-1.65 1.66-.12 3.32-.25 4.94-.38" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(21.75 13.63)">{"1"}</text>
      <text transform="translate(33.5 22.63)">{"2"}</text>
      <text transform="translate(27.5 34.5)">{"3"}</text>
      <text transform="translate(53.25 12.5)">{"4"}</text>
      <text transform="translate(68.25 19.63)">{"5"}</text>
      <text transform="translate(64.5 31.55)">{"6"}</text>
      <text transform="translate(16.5 52.63)">{"7"}</text>
      <text transform="translate(26.5 42.5)">{"8"}</text>
      <text transform="translate(35.5 53.5)">{"9"}</text>
      <text transform="translate(28.5 77.5)">{"10"}</text>
      <text transform="translate(39.5 67.63)">{"11"}</text>
      <text transform="translate(43.25 80.5)">{"12"}</text>
    </g>
  </svg>
);

export default Kanji筒;
