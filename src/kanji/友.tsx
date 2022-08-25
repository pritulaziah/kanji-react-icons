import * as React from "react";
import { SVGProps } from "react";

const Kanji友 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M17.88 37.23c2.13.54 5.78.58 7.89.29 17.48-2.39 35.98-4.39 54.65-5.48 3.54-.21 5.68.01 7.46.28" />
      <path d="M48.22 14.14c.53 2.11.53 4.3.31 6.73C47 38 33 72.5 15.5 85.25" />
      <path d="M42.66 54.86c1.09.27 2.51.28 3.59.14 6.88-.88 16.62-3.25 22.43-4.88 3.45-.97 4.6 1.45 3.11 4.55C66.5 65.62 48.12 87.75 24 96.5" />
      <path d="M41.25 63.5c5.15.45 27.5 18.62 40.93 26.36 3.2 1.84 6.65 3.76 10.32 4.39" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(10.5 38.5)">{"1"}</text>
      <text transform="translate(38.5 14.5)">{"2"}</text>
      <text transform="translate(46.5 51.5)">{"3"}</text>
      <text transform="translate(38.5 71.5)">{"4"}</text>
    </g>
  </svg>
);

export default Kanji友;
