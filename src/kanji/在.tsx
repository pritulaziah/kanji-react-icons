import * as React from "react";
import { SVGProps } from "react";

const Kanji在 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M20.5 35.15c2.88.72 5.21.5 7.88.25 11.68-1.09 38.58-3.88 50.74-4.87 2.44-.2 5.88-.04 7.88.34" />
      <path d="M53.89 12.68c.73 1.57.52 3.29.03 5.39C50.26 33.6 38.95 58.41 14.89 74.4" />
      <path d="M27.46 53.75c.77.77 1.32 2.12 1.32 3.43 0 .55-.06 23.07-.06 35.33 0 2.83-.05 4.92-.08 5.74" />
      <path d="M43.44 67.81c1.62.6 4.13.38 5.81.2 8.73-.94 22.01-2.56 30.75-3.1 1.83-.12 3.93-.03 5.74.37" />
      <path d="M63.8 44.37c.98.98 2 2.69 2 4.45 0 11.34-.11 26.89-.11 41.89" />
      <path d="M37.24 92.9c3.01.47 5.55.53 8.13.32 11.8-.94 27.75-2.6 40.5-2.85 2.9-.06 5.78.04 8.64.63" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(13.5 35.5)">{"1"}</text>
      <text transform="translate(45.5 12.13)">{"2"}</text>
      <text transform="translate(18.75 55.5)">{"3"}</text>
      <text transform="translate(41.5 64.98)">{"4"}</text>
      <text transform="translate(53.5 45.5)">{"5"}</text>
      <text transform="translate(36.5 90.5)">{"6"}</text>
    </g>
  </svg>
);

export default Kanji在;
