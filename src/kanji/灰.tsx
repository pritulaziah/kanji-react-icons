import * as React from "react";
import { SVGProps } from "react";

const Kanji灰 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M23.12 26.9c2.96.95 6.23.55 9.27.27 13.63-1.25 32.76-4.23 44.87-4.97 2.98-.18 5.92-.28 8.87.29" />
      <path d="M24.93 27.73c.79.79 1.18 2.14 1.18 3.24 0 17.03.39 39.03-13.3 56.25" />
      <path d="M39 50.25c2.03 2.81 4.98 10.78 5.53 13.59" />
      <path d="M80.39 44.04c.11 1.09 0 1.99-.75 3.15s-6.14 8.31-11.5 12.47" />
      <path d="M57.13 35.75c.75.88 1.2 2.37 1.07 4.32C56.25 69.5 48 83.5 32.64 93.5" />
      <path d="M55.69 63.37C65.45 72.66 75.48 82.2 82.52 88c1.39 1.15 4.6 3.75 6.8 4.66" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(29.5 24.5)">{"1"}</text>
      <text transform="translate(18.75 37.55)">{"2"}</text>
      <text transform="translate(33.5 46.5)">{"3"}</text>
      <text transform="translate(71.5 42.13)">{"4"}</text>
      <text transform="translate(49.5 41.5)">{"5"}</text>
      <text transform="translate(57.75 77.98)">{"6"}</text>
    </g>
  </svg>
);

export default Kanji灰;
