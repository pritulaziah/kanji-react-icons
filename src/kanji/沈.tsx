import * as React from "react";
import { SVGProps } from "react";

const Kanji沈 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M23.13 20.25c3.31 1.3 8.54 5.33 9.37 7.34" />
      <path d="M14.75 40.75c3.26 1.41 8.43 5.8 9.25 8" />
      <path d="M13.25 89.21c1.62.54 2.57-.13 3.5-1.75 3.12-5.45 5.12-9.08 9.75-17.95" />
      <path d="M41.79 33.51c0 4.13-1.75 15.49-2.54 18.24" />
      <path d="M42.74 36.49c12.51-2.74 29.01-5.61 40.95-6.65 12.02-1.05 3.8 7.41-.45 10.78" />
      <path d="M61.72 11c1.14 1.14 1.51 2.37 1.57 4.26.71 23.36-1.04 61.24-32.62 77.16" />
      <path d="M65.24 52.62c.74 1.19 1.12 2.59 1.12 4.43 0 7.83-.03 17.64-.03 23.2 0 9.88 2.17 11.78 15.67 11.78 11.87 0 12.89-2.28 12.89-10.12" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(17.25 21.13)">{"1"}</text>
      <text transform="translate(8.5 41.5)">{"2"}</text>
      <text transform="translate(3.75 91.63)">{"3"}</text>
      <text transform="translate(35.5 36.5)">{"4"}</text>
      <text transform="translate(44.5 32.5)">{"5"}</text>
      <text transform="translate(51.5 11.5)">{"6"}</text>
      <text transform="translate(72.75 60.13)">{"7"}</text>
    </g>
  </svg>
);

export default Kanji沈;
