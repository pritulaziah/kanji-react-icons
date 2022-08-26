import * as React from "react";
import { SVGProps } from "react";

const Hiraganaれ = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M34.48 13c1.5 1.38 2.83 3.74 2.5 6.38-.5 4-2.75 44.5-2.75 52.88 0 8.38.12 16.62.12 19.5" />
      <path d="M16.98 40.75c2.12 1.38 3.74 1.46 7.5 0 4.5-1.75 6.55-2.66 13-5.5 4.25-1.88 4.4.24 2.5 3.5-5.25 9-10.5 16.75-18.88 27.62-7.55 9.81-6.93 12.85 3.25 3.12 14-13.38 20.34-19.76 33.88-32.5 6.38-6 19.39-12.09 18.14.88C75.35 48.5 74.48 60 74.08 68.62c-1.02 21.71 11.53 18 20.15 8.63" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(27.36 12.88)">{"1"}</text>
      <text transform="translate(11.86 36.25)">{"2"}</text>
    </g>
  </svg>
);

export default Hiraganaれ;
