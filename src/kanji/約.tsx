import * as React from "react";
import { SVGProps } from "react";

const Kanji約 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M29.37 15.75c.32 1.42.4 2.5-.16 4.02-2.84 7.66-6.21 13.2-9.65 19.61-.46.86-.64 3.28 0 3.55 3.38 1.42 8.12 3.78 11.02 6.38" />
      <path d="M41.43 28.53c.3.64.39 2.75 0 3.43-5.73 10.06-14.28 24.07-22.15 33.25-1.81 2.1.45 3.31 1.62 2.88 4.93-1.79 15.15-4.99 21.48-6.7" />
      <path d="M38.29 53.11c2.56 2.58 6.61 10.59 7.25 14.59" />
      <path d="M14.46 81.14c3.89 3.22 6.87 10.7 7.77 13.61" />
      <path d="M25.6 76.98c4.4 2.79 7.78 9.27 8.81 11.8" />
      <path d="M36.74 72.04c4.27 2.24 7.55 7.43 8.55 9.46" />
      <path d="M63.1 13.5c.04.87.09 2.25-.09 3.5-1.08 7.39-6.51 20.75-14.76 32.03" />
      <path d="M59.96 37.97c.89.72 2.14.96 3.56.48s22.32-5.52 25.88-5.77c2.59-.18 4.09 2.82 4.1 6 .01 8.45-4.09 39.14-12.82 52.65-2.54 3.93-3.59 1.81-5.7-1.21" />
      <path d="M61.64 54.15c3.18 2.12 8.21 8.72 9.01 12.02" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(23.25 16.5)">{"1"}</text>
      <text transform="translate(37.5 26.5)">{"2"}</text>
      <text transform="translate(38.5 50.5)">{"3"}</text>
      <text transform="translate(8.5 82.5)">{"4"}</text>
      <text transform="translate(19.5 78.5)">{"5"}</text>
      <text transform="translate(31.5 74.5)">{"6"}</text>
      <text transform="translate(56.5 14.5)">{"7"}</text>
      <text transform="translate(62.5 34.5)">{"8"}</text>
    </g>
  </svg>
);

export default Kanji約;
