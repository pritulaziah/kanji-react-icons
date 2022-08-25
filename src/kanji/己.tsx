import * as React from "react";
import { SVGProps } from "react";

const Kanji己 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M27.75 19.89c2.38.99 5.17 1.14 8.67.68 7.1-.93 38.3-3.9 40.47-4.08 2.86-.23 5.11 1.52 4.09 5.1-.3 1.07-2.48 9.17-4.48 19.42" />
      <path d="M23.25 45.5c2 1.25 4.54 1.56 7 1.5 10.88-.25 28.07-2.72 41.88-4.33 1.99-.23 4.87-.54 7.62-.67" />
      <path d="M25.24 47.12c1.07 1.07 1.6 2.38 1.6 4.03 0 7.6-.1 14.71-.1 21.6 0 19 1.26 20 34.26 20 30.38 0 31.75-1.88 31.75-12.5" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(21.75 19.63)">{"1"}</text>
      <text transform="translate(31.5 43.5)">{"2"}</text>
      <text transform="translate(19.5 54.5)">{"3"}</text>
    </g>
  </svg>
);

export default Kanji己;
