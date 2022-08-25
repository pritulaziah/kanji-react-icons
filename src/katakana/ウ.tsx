import * as React from "react";
import { SVGProps } from "react";

const Katakanaウ = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M53.25 14.62c1 1.12 1.25 3 1.25 4.62v12.64" />
      <path d="M26.5 31.25c1 1.12 1.22 3 1.25 4.62.09 4.45.29 10.95.45 16.37.07 2.5.14 4.77.18 6.5" />
      <path d="M29.12 35.88c19.38-2.25 40.25-4.25 49-5.5s8.28.84 6.25 6.88c-5 14.88-20.12 43.5-41 56.62" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(42.75 15.13)">{"1"}</text>
      <text transform="translate(18 27)">{"2"}</text>
      <text transform="translate(32.75 32.5)">{"3"}</text>
    </g>
  </svg>
);

export default Katakanaウ;
