import * as React from "react";
import { SVGProps } from "react";

const Kanji劣 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M55.37 9.67c.77.77 1.01 1.62 1.01 3.08 0 4.42.01 18.37.01 21.14 0 7.84-5.53.84-6.74.14" />
      <path d="M35.4 18.92c.05.39.19 1.02-.11 1.56-2.15 3.88-11.24 11.37-18.63 14.95" />
      <path d="M79.75 16.75c5.59 2.41 11.75 7.62 14.5 12.34" />
      <path d="M73.83 24.33c.16.87-.28 2.01-1.07 3.24C66.25 37.74 41.18 54.17 15.75 61" />
      <path d="M32.08 63.45c2.26.81 5.56.79 7.93.47 10.46-1.4 29.97-4.06 36.36-4.77 4.35-.49 5.78 1.04 5.02 5.27-1.77 9.92-6.84 22.31-13.9 29.92-4.8 5.18-7.55.21-8.9-.46" />
      <path d="M56.64 47.43c.36 1.07.29 2.4-.19 3.97-3.32 10.73-13.19 28.98-34.5 42.82" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(47 10.38)">{"1"}</text>
      <text transform="translate(27.25 18.25)">{"2"}</text>
      <text transform="translate(71.25 16.25)">{"3"}</text>
      <text transform="translate(64.25 23.88)">{"4"}</text>
      <text transform="translate(25.25 65.88)">{"5"}</text>
      <text transform="translate(48.25 55.25)">{"6"}</text>
    </g>
  </svg>
);

export default Kanji劣;
