import * as React from "react";
import { SVGProps } from "react";

const Kanji描 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M16 35.42c2.08.25 1.27.55 3.5.25C25 34.92 35 33.17 44.17 32" />
      <path d="M31.77 15c.48.92 1.76 2.49 1.76 5.52 0 15.23.24 52.96.24 64.4 0 14.25-6.32 3.53-7.77 2" />
      <path d="M14 66.18c1.25 1.78 3.83 1.61 6.5-.18 5-3.36 9-6 20.25-14.08" />
      <path d="M44.32 38.64c1.34.47 2.91.56 4.25.47C60.93 38.25 78 35 91.8 34.19c2.24-.13 3.59.22 4.7.46" />
      <path d="M57.12 20.6c1.03 1.82 1.36 2.37 1.47 3.5 1.03 10.49 1.9 20.78 2.2 24.59" />
      <path d="M83.11 17.25c.39 1.5.87 1.82.65 3.75-1.11 9.9-2.26 15.75-4.17 26.95" />
      <path d="M50.25 55.51c.28.62.79 2.03.94 2.79 1.26 6.27 2.39 22.95 3.12 34.53" />
      <path d="M52.1 57.94c12.1-1.69 29.86-3.5 37.38-4.26 2.76-.28 4.17 1.52 4.02 3.2-.56 6.19-2.16 22.4-4.15 33.25" />
      <path d="M70.41 57.78c.64.36.98 1.79 1 2.82.16 7.92-.06 22.66-.09 28.29" />
      <path d="M53.87 73.13c8.51-.93 17.01-1.93 25.51-2.84 1.03-.11 2.02-.22 2.98-.32" />
      <path d="M54.84 90.26c8.16-.75 24.45-2.24 34.47-2.6" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(9.75 35.5)">{"1"}</text>
      <text transform="translate(23.5 15.5)">{"2"}</text>
      <text transform="translate(6.5 70.5)">{"3"}</text>
      <text transform="translate(48.5 35.5)">{"4"}</text>
      <text transform="translate(47.5 20.5)">{"5"}</text>
      <text transform="translate(74.5 17.5)">{"6"}</text>
      <text transform="translate(44.25 64.63)">{"7"}</text>
      <text transform="translate(54.75 54.13)">{"8"}</text>
      <text transform="translate(64.5 64.5)">{"9"}</text>
      <text transform="translate(55.5 69.5)">{"10"}</text>
      <text transform="translate(57.5 86.5)">{"11"}</text>
    </g>
  </svg>
);

export default Kanji描;
