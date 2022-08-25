import * as React from "react";
import { SVGProps } from "react";

const Kanji炎 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M30.25 21.6c3.3 2.36 8.1 9.03 9 11.38" />
      <path d="M77 17.44c.5.94.31 2.35-.5 3.17-1.75 1.77-6.62 5.9-11.25 8.68" />
      <path d="M53.75 11.75c.62 1 .79 1.88.75 2.98-1 25.52-13.12 33.77-31.5 40.52" />
      <path d="M54.5 32.81C69.75 37.5 79.75 45.88 87.25 54.5" />
      <path d="M31 62.38c3.45 2.2 8.46 8.44 9.4 10.64" />
      <path d="M74.42 57.12c.2 1.25-.17 2.25-.75 2.88-.87.95-8.28 8.27-12.04 10.72" />
      <path d="M54.27 52.25c.61.88.77 1.74.64 3.31C52.62 83.88 40.5 89.12 18.5 97" />
      <path d="M53.66 70.63c10.96 7.56 22.19 16.22 30.23 21.8 2.99 2.07 6.24 3.57 9.62 4.77" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(24.5 23.5)">{"1"}</text>
      <text transform="translate(68.5 17.5)">{"2"}</text>
      <text transform="translate(44.5 14.5)">{"3"}</text>
      <text transform="translate(57.75 31.5)">{"4"}</text>
      <text transform="translate(24.75 66.5)">{"5"}</text>
      <text transform="translate(66.5 59.5)">{"6"}</text>
      <text transform="translate(44.5 55.5)">{"7"}</text>
      <text transform="translate(67.5 77.5)">{"8"}</text>
    </g>
  </svg>
);

export default Kanji炎;
