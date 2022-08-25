import * as React from "react";
import { SVGProps } from "react";

const Hariganaせ = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M16.5 49.93c2.88 2.42 6.86 1.57 12.75.53 19-3.34 33-5.72 47.12-7.64 6.99-.95 11.88-1.21 17.75-.36" />
      <path d="M69.74 17.75c2 1.5 2.75 3.25 2.75 5.88v23.5c0 25.62-5.75 23.25-11.88 19" />
      <path d="M35.62 26.25c2 1.5 2.75 3.25 2.75 5.88v34c0 14.5 6.38 19.55 20.14 19.55 10.24 0 13.74.07 22.61-1.68" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(10.12 48.5)">{"1"}</text>
      <text transform="translate(61.25 16.5)">{"2"}</text>
      <text transform="translate(27.75 25.25)">{"3"}</text>
    </g>
  </svg>
);

export default Hariganaせ;
