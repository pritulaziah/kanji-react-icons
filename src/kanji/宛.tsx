import * as React from "react";
import { SVGProps } from "react";

const Kanji宛 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M49.41 13.77c3.4.9 8.26 5.33 8.18 7.94" />
      <path d="M26.91 28.38c0 3.2-2.86 11.99-4.16 14.12" />
      <path d="M27.89 29.5c7.5-.78 47.51-5.57 53.6-5.87 9.51-.46 1.01 7.15-1.35 8.82" />
      <path d="M36.5 37.89c.17.55.64 2.23.34 3.3-2.08 7.31-8.33 19.06-16.74 29.25" />
      <path d="M37.55 47.76c.27.04 1.4 0 2.16-.12 2.49-.39 6.29-1.38 9.44-1.58 2.61-.16 3.14.95 2.51 3.22C48.24 61.7 31 92.1 15.75 98.5" />
      <path d="M28.36 62.79c2.98 1.68 7.69 6.91 8.43 9.52" />
      <path d="M61 46.26c.62.12 1.89.21 3.1-.18 3.4-1.09 13.57-2.22 15.23-2.65 2.51-.64 4.13 1.13 4.03 3.72-.17 4.39-3.61 15.61-6.9 22.59-2.4 5.09-4.54.62-5 .37" />
      <path d="M59.99 44.2c.66 1.53 1.23 3.34 1.23 5.7 0 14.09-.3 22.29-.3 29.46 0 14.41 1.84 14.85 15.82 14.85 18.52 0 16.91-1.21 16.91-11.75" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(43 13.5)">{"1"}</text>
      <text transform="translate(20.5 27.5)">{"2"}</text>
      <text transform="translate(30.5 25.5)">{"3"}</text>
      <text transform="translate(29.5 39.5)">{"4"}</text>
      <text transform="translate(41.5 43.5)">{"5"}</text>
      <text transform="translate(32.5 64.5)">{"6"}</text>
      <text transform="translate(63.25 42.5)">{"7"}</text>
      <text transform="translate(53.25 58.5)">{"8"}</text>
    </g>
  </svg>
);

export default Kanji宛;
