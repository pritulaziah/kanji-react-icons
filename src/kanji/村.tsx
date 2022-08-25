import * as React from "react";
import { SVGProps } from "react";

const Kanji村 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M13.78 39.23c.42.18 2.94.3 4.07.23 4.84-.3 22.26-2.35 30.05-3.23 1.13-.13 1.42-.18 2.12 0" />
      <path d="M33.36 13.5c.91.48 2.86 3.63 3.04 4.59.18.97-.3 69.34-.3 70.41 0 13-5.72 3.88-7.35 2.25" />
      <path d="M35.19 41.07c-6.14 13.14-10.35 19.01-19.08 30.19" />
      <path d="M40.72 48.72c2.53 1.53 6.03 6.78 8.16 9.76" />
      <path d="M54 41.93c.83.49 4.34.6 5.19.49 12.56-1.67 20.56-3.42 36.4-4.69 1.38-.11 2.22.23 2.91.48" />
      <path d="M80.39 14.5c.86 1 2.17 2.49 2.26 5.52.4 14.55-1.02 64.66-1.26 69.62-.15 3.03-1.71 4.25-3.96 4-2.45-.27-2.56-2.22-4.75-3.75" />
      <path d="M59.58 56.78c2.74 2.07 7.07 8.52 7.75 11.75" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(5.5 37.63)">{"1"}</text>
      <text transform="translate(27 10.5)">{"2"}</text>
      <text transform="translate(23.25 49.63)">{"3"}</text>
      <text transform="translate(44.25 48.13)">{"4"}</text>
      <text transform="translate(54.5 38.5)">{"5"}</text>
      <text transform="translate(71.5 11.5)">{"6"}</text>
      <text transform="translate(60.75 54.5)">{"7"}</text>
    </g>
  </svg>
);

export default Kanji村;
