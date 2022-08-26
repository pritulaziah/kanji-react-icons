import * as React from "react";
import { SVGProps } from "react";

const Hiraganaは = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M24.51 18c1.25 1.5 2.15 4 1.62 6.62-3.5 17.62-6.98 36.4-4 54.88 2.5 15.5 1.12 2 5.62-6.25" />
      <path d="M49.64 37.89c2.41 1.57 4.85 2.16 7.8 1.71 9.36-1.43 17.46-2.94 23.4-4.57 3.12-.86 5.96-1.29 7.8-1.29" />
      <path d="M69.77 16.5c2.25 2.12 2.88 4.12 2.88 6.5s1.5 38.62 1.5 48c0 22.5-30.62 19.62-30.62 10.5 0-9.75 23.88-5.62 29.5-2.88 5.62 2.74 11.98 8.26 13.36 9.38" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(16.89 17.63)">{"1"}</text>
      <text transform="translate(43.02 36.38)">{"2"}</text>
      <text transform="translate(59.89 16)">{"3"}</text>
    </g>
  </svg>
);

export default Hiraganaは;
