import * as React from "react";
import { SVGProps } from "react";

const Hariganaら = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M35.33 15c3.75 3 9.22 4.41 16.5 4.25 11.12-.25-.25 2.38-1.25 3.5" />
      <path d="M35.83 35.75c-2.14 4.34-2.79 8.67-3.11 13.24-.42 5.84-.31 12.05-2.14 19.13-3.16 12.27 1.49 4.77 3 3.5 11.88-10 21.7-12.67 32.61-12.49 9.21.15 16.85 5.19 16.76 13.88-.12 13.6-14.24 21.49-32.49 22.49" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(28.96 13.75)">{"1"}</text>
      <text transform="translate(27.21 35.25)">{"2"}</text>
    </g>
  </svg>
);

export default Hariganaら;
