import * as React from "react";
import { SVGProps } from "react";

const Kanji丈 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M19.25 38.23c3.07 1.12 6.86.63 10.02.24 15.11-1.84 33.86-4.18 47.24-4.94 3.41-.2 6.88-.37 10.24.36" />
      <path d="M52.77 15.18c1.21 1.21 1.48 2.57 1.55 5.42C55.25 56.75 49.75 78 16.5 95" />
      <path d="M27.25 51.25c5.44 1.3 30.3 22.94 48.57 34.71 4.6 2.96 9.37 5.71 14.43 7.79" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(12.5 38.5)">{"1"}</text>
      <text transform="translate(42.75 16.63)">{"2"}</text>
      <text transform="translate(19.5 52.5)">{"3"}</text>
    </g>
  </svg>
);

export default Kanji丈;
