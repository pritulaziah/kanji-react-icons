import * as React from "react";
import { SVGProps } from "react";

const Kanji券 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M29.25 16.88c3.28 2.18 8.49 8.95 9.31 12.34" />
      <path d="M73.77 13.39c.09 1.19-.21 2.34-.77 3.41-3 5.69-5.88 10.07-11.94 16.16" />
      <path d="M27.75 37.89c2.5.49 4.43.29 6.5.08 8.35-.86 27.5-2.59 35.62-3.11 1.92-.12 4-.05 5.88.41" />
      <path d="M15.25 53.45c2.85 1.02 6.52.68 9.5.44 11.47-.91 39.7-2.45 55.75-3.17 3.39-.15 6.66-.15 10 .57" />
      <path d="M53.75 11.25c.5 1.25.91 2.54.53 4.22C50 34.25 41.75 61.88 14.5 77.25" />
      <path d="M50 34.25c6.15 6.29 24.79 23.54 33.79 31.35 2.93 2.54 5.83 5.08 9.21 7.03" />
      <path d="M35.62 68.13c1.5.5 2.88.62 4.59.45 8.19-.85 22.68-3.24 27.21-3.61 2.98-.25 4.35 1.06 3.94 3.93-.85 5.88-4.49 19.11-8.53 25.64-2.5 4.04-4.33 2.84-7.81-.63" />
      <path d="M50.2 71.47c.05 1.03-.22 1.86-.66 2.66-5.03 9-12.53 16.87-27.66 24" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(22.5 17.5)">{"1"}</text>
      <text transform="translate(64.5 12.13)">{"2"}</text>
      <text transform="translate(19.99 38.5)">{"3"}</text>
      <text transform="translate(8.5 54.13)">{"4"}</text>
      <text transform="translate(44.5 11.5)">{"5"}</text>
      <text transform="translate(65.5 45.13)">{"6"}</text>
      <text transform="translate(39.5 65.5)">{"7"}</text>
      <text transform="translate(38.5 79.5)">{"8"}</text>
    </g>
  </svg>
);

export default Kanji券;
