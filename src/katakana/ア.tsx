import * as React from "react";
import { SVGProps } from "react";

const Katakanaア = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M23.5 26.25c2.41 1.56 3.98 1.44 8.51.75 11.4-1.75 37.77-5.5 48.28-6.78 5.23-.64 7.99 2.06 2.62 6.04-6.75 5-13.12 9.5-23.25 16" />
      <path d="M53.12 41.12c.79 1.5 1.02 3.24.58 5.28-4.04 18.48-9.92 31.85-19.92 45.48" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(20.41 22.13)">{"1"}</text>
      <text transform="translate(44.79 41.75)">{"2"}</text>
    </g>
  </svg>
);

export default Katakanaア;
