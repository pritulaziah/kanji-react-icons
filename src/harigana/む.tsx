import * as React from "react";
import { SVGProps } from "react";

const Hariganaむ = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M19.59 31.65c2.1 1.55 4.24 1.66 6.81 1.21 8.17-1.41 15.33-2.98 23.19-4.96 2.76-.69 5.44-1.27 7.05-1.27" />
      <path d="M37.02 15.5c1.62 1.25 2.31 2.88 2.12 5.25-.88 11.12-1.5 20.75-4 34.88C31.53 76.07 15.89 72.62 16.52 63c.5-7.74 6.25-12.86 12.62-13.5 5-.5 14.28 1.93 5.88 15C22.4 84.12 23.6 89.01 40.13 90.04c10.98.68 19.26.72 28.49-.92 14.15-2.5 7.4-2.63 7.4-11.13" />
      <path d="M78.52 36.25c6.88 3.12 11.71 5.95 14.88 10.12 6.25 8.25-1.38 3.62-4.5 4.5" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(12.9 29)">{"1"}</text>
      <text transform="translate(26.65 13)">{"2"}</text>
      <text transform="translate(70.4 34.75)">{"3"}</text>
    </g>
  </svg>
);

export default Hariganaむ;
