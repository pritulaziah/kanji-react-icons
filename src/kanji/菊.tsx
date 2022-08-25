import * as React from "react";
import { SVGProps } from "react";

const Kanji菊 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M20 24.77c1.29.53 2.8.63 4.1.53 11.9-.97 49.9-4.97 63.62-5.04 2.16-.01 3.45.25 4.53.51" />
      <path d="M40.38 13.25c1.4 1.15 1.85.99 2 1.7 1.4 6.6 2.6 12.9 3 15.3" />
      <path d="M67.81 10c.23.97.53 1.69.27 2.89-1.5 7.01-2.19 10.51-3.83 17.11" />
      <path d="M39.69 30.75c.06.61.13 1.57-.12 2.44-1.5 5.14-10.07 16.41-21.81 23.31" />
      <path d="M37.8 39.66c1.11.69 2.67.92 4.44.46 1.78-.46 33.51-3.87 37.95-4.1 4.45-.23 5.71 1.78 5.17 6.63-1.12 9.85-4.12 37.1-13.11 53.54-2.36 4.31-4.49 1.73-7.11-1.15" />
      <path d="M29.5 55.25c2.11 1.45 5.29 5.56 5.82 7.82" />
      <path d="M63.5 50c.02.27.05.69-.05 1.08-.59 2.28-3.95 7.28-8.55 10.34" />
      <path d="M23.06 69.15c.51.17 1.89.45 3.26.52 3.77.17 33.13-4.46 39.13-4.12 1.37.08 1.72-.17 2.57 0" />
      <path d="M45.32 48.25c.74.3 1.19 1.33 1.33 1.93.15.59-.15 38.11-.15 41.82 0 12.5-5.63 2.88-6.5 2" />
      <path d="M45.32 68.25c-4.68 7.71-16.05 18.55-26.57 23" />
      <path d="M48.13 69.14C53.81 71.62 63.79 80.09 66 85.75" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(12.5 25.63)">{"1"}</text>
      <text transform="translate(32.25 14.5)">{"2"}</text>
      <text transform="translate(58.5 10.5)">{"3"}</text>
      <text transform="translate(31.5 35.5)">{"4"}</text>
      <text transform="translate(48.75 36.13)">{"5"}</text>
      <text transform="translate(23.25 62.5)">{"6"}</text>
      <text transform="translate(55.5 51.13)">{"7"}</text>
      <text transform="translate(15.5 70.5)">{"8"}</text>
      <text transform="translate(37.5 49.5)">{"9"}</text>
      <text transform="translate(25.5 79.5)">{"10"}</text>
      <text transform="translate(60.5 75.5)">{"11"}</text>
    </g>
  </svg>
);

export default Kanji菊;
