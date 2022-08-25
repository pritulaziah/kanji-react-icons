import * as React from "react";
import { SVGProps } from "react";

const Kanji考 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M35 24.95c.77.33 2.19.37 2.96.33 8.79-.53 18.04-2.78 29.21-3.25 1.29-.05 2.06.16 2.71.32" />
      <path d="M51.92 10.87c.12.29 1.65 1.53 1.77 3.39.57 8.93.31 20.7.31 23.74" />
      <path d="M13.25 42.28c1.9.69 5.37.87 7.27.69 24.15-2.22 39.45-4.97 69.23-5.68 3.16-.08 5.05.33 6.63.68" />
      <path d="M81.09 13.98c.17 1.31.43 3.22-.84 4.77C63.84 38.73 51 51.5 20.31 69.47" />
      <path d="M50.5 58c6.25-.75 12.25-1.75 20.75-3.75 1.77-.42 3.5-.75 5-.75" />
      <path d="M53 50.5c.25 1.25.75 1.75-.98 4.08-.88 1.19-5.26 8.83-5.76 9.45-2.01 2.47-1.51 4.22 1.14 4.25 1.67.02 25.24-3.56 29.51-4.24 3.34-.53 4.84 2.47 3.93 5.1-2.3 6.72-8.04 20.83-12.33 25.88-2.51 2.98-5.26.73-7.52-2.57" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(27.75 25.5)">{"1"}</text>
      <text transform="translate(41.5 11.5)">{"2"}</text>
      <text transform="translate(5.25 43.5)">{"3"}</text>
      <text transform="translate(73.5 12.5)">{"4"}</text>
      <text transform="translate(55 55)">{"5"}</text>
      <text transform="translate(39.75 64.25)">{"6"}</text>
    </g>
  </svg>
);

export default Kanji考;
