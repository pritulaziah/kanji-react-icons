import * as React from "react";
import { SVGProps } from "react";

const Kanji示 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M29.53 20.89c2.34.49 4.67.27 6.74.09 7.65-.7 24.51-2.27 32.6-2.73 2.32-.13 4.84-.29 7.12.27" />
      <path d="M17.53 44.97c2.95 1.05 6.46.68 9.49.39 12.45-1.17 38.73-3.73 54.23-4.52 2.86-.15 5.89-.05 8.72.56" />
      <path d="M53.52 46.83c1.2 1.2 2.01 2.79 2.01 5.02 0 14.56-.01 33.66-.01 38.62 0 10.53-4.52 3.78-8.71.25" />
      <path d="M32.26 62.39c.04.6.24 1.58-.09 2.4C30 70.25 23.62 78.75 15.5 86.5" />
      <path d="M82.25 63.5c4.16 3.38 10.96 13.5 12 18.75" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(23.25 21.13)">{"1"}</text>
      <text transform="translate(9.75 46.55)">{"2"}</text>
      <text transform="translate(47.5 55.48)">{"3"}</text>
      <text transform="translate(24.5 64.4)">{"4"}</text>
      <text transform="translate(75 65)">{"5"}</text>
    </g>
  </svg>
);

export default Kanji示;
