import * as React from "react";
import { SVGProps } from "react";

const Kanji並 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M34.77 17.84c3.56 2.48 9.2 9.7 10.09 13.56" />
      <path d="M69.52 14.01c.08 1.19-.03 1.87-.52 2.98-2.05 4.61-5.25 9.76-11.34 17.11" />
      <path d="M24.25 39.65c3 .6 5.46.3 8 0 10.37-1.23 34.22-4.13 44.25-4.9 2.37-.18 4.67-.32 6.99.25" />
      <path d="M43.37 41.25c.94.94 1.46 2.38 1.46 3.75 0 1.02-.08 38.62-.08 45.75" />
      <path d="M61.62 39.25c.88.88 1.21 2.38 1.21 3.75 0 1.02.03 39.75.03 46.25" />
      <path d="M24.52 59.09c3.03 3.01 7.83 12.37 8.59 17.05" />
      <path d="M84.75 51.26c.11 1.29-.18 2.5-.75 3.7-2.5 5.29-6.51 11.69-17.34 22.64" />
      <path d="M14.75 93.2c3.27 1.17 7.35.8 10.74.45C38.3 92.33 70.43 89.69 87 88.93c3.12-.14 6.45-.03 9.5.62" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(28.5 18.5)">{"1"}</text>
      <text transform="translate(61.5 13.5)">{"2"}</text>
      <text transform="translate(16.5 39.13)">{"3"}</text>
      <text transform="translate(37.5 49.63)">{"4"}</text>
      <text transform="translate(55.5 46.5)">{"5"}</text>
      <text transform="translate(17.25 57.5)">{"6"}</text>
      <text transform="translate(77.5 50.5)">{"7"}</text>
      <text transform="translate(12.5 90.13)">{"8"}</text>
    </g>
  </svg>
);

export default Kanji並;
