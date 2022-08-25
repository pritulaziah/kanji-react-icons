import * as React from "react";
import { SVGProps } from "react";

const Kanji依 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M31.76 17.5c.22 2.1.44 3.84-.26 5.64-4.44 11.46-10.57 23.21-20.75 37.15" />
      <path d="M25.03 42.5c.59.61.7 1.97.76 3.23.56 11.77-1.02 40.79-.54 48.02" />
      <path d="M56.6 13.75c3.58 2.12 6.61 5.45 9.03 10.08" />
      <path d="M37 32.61c1.08.1 3.53.69 4.58.55 8.45-1.16 32.22-5.41 43.7-5.7 1.77-.05 2.68.05 4 .7" />
      <path d="M55.79 34.64c.06.79.25 2.09-.13 3.15-2.44 6.85-10.39 19.35-22.61 30.17" />
      <path d="M47.47 59.5c.7.87 1.46 1.71 1.45 3.21-.04 19-.39 22.47-.39 24.47s.7 2.86 2.22 1.64C55.5 85 64.12 77.98 65.77 76.48" />
      <path d="M79.61 40.89c.04.36.41 1.73.18 2.21-1.47 2.97-6.04 7.21-13.51 13.11" />
      <path d="M58.57 50.75c2.43.25 4.18 1.75 6.38 4.3 6.5 7.52 23.31 25.3 28 29.49 1.76 1.58 3.28 2.26 5.04 2.71" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(23.25 18.13)">{"1"}</text>
      <text transform="translate(18.75 63.05)">{"2"}</text>
      <text transform="translate(50.5 15.5)">{"3"}</text>
      <text transform="translate(36.5 29.5)">{"4"}</text>
      <text transform="translate(47.5 41.5)">{"5"}</text>
      <text transform="translate(41.5 70.5)">{"6"}</text>
      <text transform="translate(72.5 40.63)">{"7"}</text>
      <text transform="translate(60.5 48.5)">{"8"}</text>
    </g>
  </svg>
);

export default Kanji依;
