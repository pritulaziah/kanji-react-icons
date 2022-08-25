import * as React from "react";
import { SVGProps } from "react";

const Kanji体 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M31.75 16.25c.23 2.15-.05 3.95-.8 5.78C26.88 32 21 45.88 9.12 60" />
      <path d="M23.78 42.75c1.11 1.11 1.23 2.89 1.31 4.49.46 10.12-.23 30.08-.5 41.01-.06 2.38-.09 4.36-.09 5.75" />
      <path d="M37.28 36.89c.95.24 3.21.59 5.72.36 11.97-1.12 30.25-4 42.78-4.7 2.52-.14 4.42.01 6 .25" />
      <path d="M61.88 12c1.06 1.06 1.6 2.75 1.6 4.38 0 .85.05 55.5-.12 74.13-.03 2.9-.05 4.93-.08 5.74" />
      <path d="M61.88 36.37c0 1.38-.51 2.64-.94 3.49C55.07 51.39 42.61 66.29 32.5 72.5" />
      <path d="M64.38 36.75c3.77 7.25 17.11 24.4 23.75 30.78 1.71 1.64 3.85 3.76 6.13 4.47" />
      <path d="M46.54 74.65c1.23.29 3.48.39 4.71.29 10.8-.93 17.26-2.18 24.7-2.46 2.05-.08 3.28.14 4.3.28" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(23.25 12.13)">{"1"}</text>
      <text transform="translate(17.25 63.13)">{"2"}</text>
      <text transform="translate(36.75 33.13)">{"3"}</text>
      <text transform="translate(56.25 7.63)">{"4"}</text>
      <text transform="translate(47.25 48.13)">{"5"}</text>
      <text transform="translate(75.75 46.63)">{"6"}</text>
      <text transform="translate(39.75 81.13)">{"7"}</text>
    </g>
  </svg>
);

export default Kanji体;
