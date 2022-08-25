import * as React from "react";
import { SVGProps } from "react";

const Kanji串 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M23.84 26.34c.79.79 1.16 1.79 1.37 2.86.66 3.41 1.22 6.63 2.17 11.69.29 1.52.61 3.2.98 5.1" />
      <path d="M25.78 27.97c17.76-1.8 44.33-3.88 55.34-3.98 3.85-.03 4.7 1.31 4.07 4-.75 3.2-1.7 6.64-3.2 11.51" />
      <path d="M29.14 43.54c18.61-1.17 36.36-2.29 54.98-3.37" />
      <path d="M21.14 56.37c.87.87 1.49 1.88 1.76 3.15.65 2.97 2.1 10.98 3.35 18.48" />
      <path d="M23.08 57.76c21.17-1.88 46.67-3.63 62.43-4.27 4.39-.18 4.87.89 3.87 4.17-1.1 3.6-1.74 5.72-3.49 12.97" />
      <path d="M26.99 75.09C43 74 67.75 72.75 87.75 71.75" />
      <path d="M53.5 10.75c1.25 1 1.5 2.5 1.5 3.81 0 2.44.09 49.77.03 73.57-.02 6.11-.03 10.56-.03 12.12" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(19 35.13)">{"1"}</text>
      <text transform="translate(28.5 24.8)">{"2"}</text>
      <text transform="translate(32.5 40.5)">{"3"}</text>
      <text transform="translate(16.5 65.15)">{"4"}</text>
      <text transform="translate(25.75 54.58)">{"5"}</text>
      <text transform="translate(30.5 71.5)">{"6"}</text>
      <text transform="translate(44.75 10.68)">{"7"}</text>
    </g>
  </svg>
);

export default Kanji串;
