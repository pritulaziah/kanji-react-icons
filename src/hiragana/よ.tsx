import * as React from "react";
import { SVGProps } from "react";

const Hiraganaよ = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M58.24 35.38c7.5-1.28 13.74-2.63 18.5-4.1 2.5-.77 4.77-1.15 6.25-1.15" />
      <path d="M54.62 13.88c2.25 2.12 2.98 4.13 2.88 6.5-.75 17-.12 34.88 1.39 53.5C60.77 96.95 24 94.76 24 85.38c0-12 26.25-8 35.98-4.12 8.1 3.23 11.52 4.88 18.52 10.38" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(61.62 28.88)">{"1"}</text>
      <text transform="translate(45.62 14.63)">{"2"}</text>
    </g>
  </svg>
);

export default Hiraganaよ;
