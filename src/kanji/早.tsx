import * as React from "react";
import { SVGProps } from "react";

const Kanji早 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M28.25 17c.85 1.5 1.27 2.26 2.25 4 1.4 2.5 3.75 25.75 5.1 28" />
      <path d="M31.01 17c4.8-.25 41.43-4.38 45.77-3.75 1.72.25 3.37 2.22 2.71 4.75-1.24 4.75-3.74 18.75-5.99 27.25" />
      <path d="M34.86 32c6.62 0 13.34-1.06 19.91-1.75 2.1-.22 4.2-.44 6.23-.64" />
      <path d="M37.01 46.25c9.6 0 29.99-3 35.99-3" />
      <path d="M16.63 66.91c1.47.48 4.18.61 5.64.48C35 66.26 78.25 62.76 90.23 62.8c2.45.01 3.92.23 5.15.47" />
      <path d="M53.23 46.5c.44.55 1.38 4.13 1.47 5.24.09 1.1-.06 38.62-.15 45.51" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(20.5 21.13)">{"1"}</text>
      <text transform="translate(32.5 13.5)">{"2"}</text>
      <text transform="translate(37 27.13)">{"3"}</text>
      <text transform="translate(38.5 42.13)">{"4"}</text>
      <text transform="translate(7.5 67.5)">{"5"}</text>
      <text transform="translate(46.5 55.5)">{"6"}</text>
    </g>
  </svg>
);

export default Kanji早;
