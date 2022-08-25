import * as React from "react";
import { SVGProps } from "react";

const Kanji功 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M14 33.9c1.75.46 3.95.37 5.4.15 4.58-.7 12.28-2.56 18.23-3.11 1.31-.12 3.37-.06 4.49.17" />
      <path d="M28.57 35.52c1.02 1.02 1.48 1.86 1.48 3.48 0 5.95.1 23.88.1 28.82" />
      <path d="M15.25 74.25c1.38.88 2.25.62 4-.25 5.3-2.65 10.88-5.38 20-10.25" />
      <path d="M48.15 39.31c2.47.81 5.87.79 8.27.38 10.11-1.71 27.41-6.1 31.98-7 4.11-.82 5.01 1.96 4.87 5.41-.52 11.9-8.39 39.65-15.92 51.91-4.34 7.08-7.85 1.74-9.93-.49" />
      <path d="M70.89 14.13c.99 1.24 1.29 3.07.83 5.57-5.1 27.3-12.1 53.18-31.5 69.47" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(6.49 35.5)">{"1"}</text>
      <text transform="translate(22.5 44.5)">{"2"}</text>
      <text transform="translate(6.5 77.5)">{"3"}</text>
      <text transform="translate(48.49 36.5)">{"4"}</text>
      <text transform="translate(61.5 14.5)">{"5"}</text>
    </g>
  </svg>
);

export default Kanji功;
