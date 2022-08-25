import * as React from "react";
import { SVGProps } from "react";

const Hariganaが = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M24.62 38.62c1.88 1.62 4.65 2.33 8.62 1 25.5-8.5 29.5-4.13 29.5 7.62 0 9.38-1.24 17.46-4.25 25.25-7.62 19.76-10.87 17.39-16.12 10.89" />
      <path d="M48.5 17.5c1 1.38 1.29 4.7.5 7.12-5 15.25-18.02 40.93-19.62 43.88C26.26 74.25 23 80.38 20 84.75" />
      <path d="M77.37 31.62c7.5 6.88 13.25 15.75 15 24.88" />
      <path d="M80.5 18.25c2.75 1.75 6 5.38 7.75 8.5" />
      <path d="M86.87 13.38c3.06 1.57 6.68 4.82 8.62 7.62" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(16.75 37.38)">{"1"}</text>
      <text transform="translate(39.75 16)">{"2"}</text>
      <text transform="translate(70 29.75)">{"3"}</text>
      <text transform="translate(72.87 17.25)">{"4"}</text>
      <text transform="translate(79 12.13)">{"5"}</text>
    </g>
  </svg>
);

export default Hariganaが;
