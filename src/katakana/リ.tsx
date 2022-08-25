import * as React from "react";
import { SVGProps } from "react";

const Katakanaリ = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M35 18.38c1.12 1.5 1.62 3 1.62 4.88v34.75" />
      <path d="M71 15.38c1.5 1.25 2.38 3.12 2.38 5.38s-.12 28.88-.12 32.88c0 19.62-9.5 32.25-21.75 40.38" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(28.62 15.88)">{"1"}</text>
      <text transform="translate(62 13.5)">{"2"}</text>
    </g>
  </svg>
);

export default Katakanaリ;
