import * as React from "react";
import { SVGProps } from "react";

const Katakanaナ = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M18.5 44.12c2.62 1 4.77 1.17 9.12.5C47 41.62 65.37 39.87 80 39c3.75-.22 8.88-.25 11.88.12" />
      <path d="M53.26 14.5c1.75 1.25 2.75 3 2.75 6s.12 21.5.12 24.25c0 20-6 37.62-18.38 49.12" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(14.26 40.5)">{"1"}</text>
      <text transform="translate(45.01 13.75)">{"2"}</text>
    </g>
  </svg>
);

export default Katakanaナ;
