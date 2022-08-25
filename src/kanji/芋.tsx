import * as React from "react";
import { SVGProps } from "react";

const Kanji芋 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M22.59 25.34c2.78.41 5.58.37 8.03.14 12.12-1.15 34.64-3.71 47.76-4.31 2.92-.13 5.91-.33 8.78.37" />
      <path d="M37.1 12.37c1.19 1.28 1.58 2.42 1.7 3.21 1.19 7.38 1.71 13.98 2.05 16.67" />
      <path d="M70.07 11.5c.27.96.38 2.18.07 3.36-1.78 6.94-2.59 9.42-4.53 15.95" />
      <path d="M29.51 41.53c2.37.47 4.6.29 6.74.05 7.53-.83 22.83-2.52 32-3.31 2.47-.21 5.2-.3 7.62.3" />
      <path d="M15.75 59.49c2.93 1.13 6.94.7 10 .41 13.31-1.23 41.85-4.12 57.62-4.54 3.13-.08 6.3-.21 9.38.5" />
      <path d="M53.58 42.83c1.23 1.23 1.73 3.04 1.73 5.13 0 14.24.05 37.76.05 42.61 0 10.26-7.23.68-8.55-.73" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(15.75 25.63)">{"1"}</text>
      <text transform="translate(27.75 13.63)">{"2"}</text>
      <text transform="translate(60.75 13.63)">{"3"}</text>
      <text transform="translate(21.75 43.63)">{"4"}</text>
      <text transform="translate(7.5 61.5)">{"5"}</text>
      <text transform="translate(46.5 50.5)">{"6"}</text>
    </g>
  </svg>
);

export default Kanji芋;
