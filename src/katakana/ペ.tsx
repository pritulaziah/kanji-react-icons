import * as React from "react";
import { SVGProps } from "react";

const Katakanaペ = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M15.5 49.25c2.75 1.5 5.33.62 6.88-.88 4-3.88 9.12-8.75 11.62-11.25C37.12 34 41.23 32.04 45.87 36 57 45.5 72.12 58 82.74 66.62c4.23 3.43 7.62 6.62 11.12 9.25" />
      <path d="M72.74 36.12c-9.62 0-9.25-14.25 0-14.25 9.76.01 9.5 14.25 0 14.25" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(11.5 43.63)">{"1"}</text>
      <text transform="translate(69.75 43.5)">{"2"}</text>
    </g>
  </svg>
);

export default Katakanaペ;
