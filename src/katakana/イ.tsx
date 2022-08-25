import * as React from "react";
import { SVGProps } from "react";

const Katakanaイ = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M69.75 16.75c.12 1.75-.34 3.86-1.62 5.5C58 35.12 44.38 51.88 22.5 65.12" />
      <path d="M56.38 43.88c1 1.12 1.25 3 1.25 4.62v34.62c0 1.87-.13 9.13-.13 11.76" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(61.13 15.13)">{"1"}</text>
      <text transform="translate(50.75 53.63)">{"2"}</text>
    </g>
  </svg>
);

export default Katakanaイ;
