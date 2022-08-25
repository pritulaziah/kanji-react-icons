import * as React from "react";
import { SVGProps } from "react";

const Kanji軌 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M12.68 29.36c1.24-.01 2-.04 2.71-.14 6.78-.93 20.4-3.27 30.43-4.23 1.18-.11 1.89.18 2.48.36" />
      <path d="M13.81 39.77c.46.44 1.56 1.77 1.64 2.35.63 4.18 2.87 13.98 3.75 21.89" />
      <path d="M16.37 41.09c7.53-.85 23.62-4.41 28.76-4.54 2.13-.06 2.56 1.16 2.47 2.49-.31 4.57-1.6 14.7-4.3 21.56" />
      <path d="M18.14 50.67c6.03-.74 12.03-1.75 18.07-2.43.61-.07 1.24-.14 1.87-.2" />
      <path d="M19.18 61.25c6.6-.88 15.47-2.39 25.11-3.53" />
      <path d="M11.03 74.96c1.04 0 3.61.11 4.54-.03 9.74-1.46 23.28-3.99 30.66-4.13 1.54-.03 2.47.23 3.24.47" />
      <path d="M28.8 13.13c.45.57 1.89 2.26 1.98 3.4.09 1.14-.06 72.75-.15 79.85" />
      <path d="M65.38 13.38c.62.62 1.48 1.49 1.5 2.62.62 40.12-2.62 60.5-23.12 75.75" />
      <path d="M52.5 47.25c1 .75 2.25.75 3.5.5s22.25-8.75 24.5-9.5c1.42-.47 3.01-.05 2.25 2.75-1.12 4.12-4.31 22.36-6 32.5C74.5 87 76.5 92 86.5 92c9.75 0 11.25-1.25 11.25-7.75" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(6.75 29.5)">{"1"}</text>
      <text transform="translate(7.5 47.5)">{"2"}</text>
      <text transform="translate(15.75 38.5)">{"3"}</text>
      <text transform="translate(21.75 48.5)">{"4"}</text>
      <text transform="translate(22.5 58.5)">{"5"}</text>
      <text transform="translate(3.5 75.5)">{"6"}</text>
      <text transform="translate(20.5 14.5)">{"7"}</text>
      <text transform="translate(55.5 14.5)">{"8"}</text>
      <text transform="translate(52.5 44.5)">{"9"}</text>
    </g>
  </svg>
);

export default Kanji軌;
