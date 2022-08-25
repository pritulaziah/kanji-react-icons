import * as React from "react";
import { SVGProps } from "react";

const Katakanaパ = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M39.08 36.62c.38 1.14.38 2.84-.12 4.14C33.5 54.75 25.88 64.88 17 73.25" />
      <path d="M65.5 36.38c13 9.12 23.12 22.62 28 33.38" />
      <path d="M86 30.12c-9.62 0-9.25-14.25 0-14.25 9.76.01 9.5 14.25 0 14.25" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(27.76 35)">{"1"}</text>
      <text transform="translate(58.51 33.75)">{"2"}</text>
      <text transform="translate(83.01 37.5)">{"3"}</text>
    </g>
  </svg>
);

export default Katakanaパ;
