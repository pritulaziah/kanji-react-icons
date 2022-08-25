import * as React from "react";
import { SVGProps } from "react";

const Kanji紋 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M27.07 14.5c.35 1.42.43 2.5-.17 4.02-3.07 7.66-6.71 13.2-10.43 19.61-.5.86-.69 3.28 0 3.55 3.65 1.42 8.78 3.78 11.91 6.38" />
      <path d="M40.1 27.28c.32.64.42 2.75 0 3.43-6.19 10.06-15.43 24.07-23.94 33.25-1.95 2.1.48 3.31 1.76 2.88 5.32-1.79 16.37-4.99 23.21-6.7" />
      <path d="M36.71 51.86c2.77 2.58 7.15 10.59 7.84 14.59" />
      <path d="M10.96 79.89c4.2 3.22 7.42 10.7 8.4 13.61" />
      <path d="M22.99 75.73c4.76 2.79 8.41 9.27 9.52 11.8" />
      <path d="M35.03 70.79c4.62 2.24 8.16 7.43 9.24 9.46" />
      <path d="M62.89 16.7c3.32 2.3 8.07 8.8 9.36 12.09" />
      <path d="M45.75 35.46c.82.09 2.36.55 3.16.49 6.67-.46 35.22-3.77 43.96-4.04 1.35-.04 2.04.04 3.04.63" />
      <path d="M81.47 36.72c.46 1.21.82 2.05.23 4.3C76.25 62 64.5 83.25 44.81 91.3" />
      <path d="M52.57 49.51c1.18.24 3.51.92 4.69 2.27C67.5 63.5 77.25 77.75 89.55 87.83c2.28 1.87 3.8 1.93 5.7 2.11" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(21.25 14.88)">{"1"}</text>
      <text transform="translate(33.25 27.25)">{"2"}</text>
      <text transform="translate(36.25 50.25)">{"3"}</text>
      <text transform="translate(5.25 81.25)">{"4"}</text>
      <text transform="translate(17.25 77.25)">{"5"}</text>
      <text transform="translate(29.25 72.25)">{"6"}</text>
      <text transform="translate(59 14.88)">{"7"}</text>
      <text transform="translate(47.25 32.25)">{"8"}</text>
      <text transform="translate(73.25 43.38)">{"9"}</text>
    </g>
  </svg>
);

export default Kanji紋;
