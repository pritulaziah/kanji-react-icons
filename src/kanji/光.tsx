import * as React from "react";
import { SVGProps } from "react";

const Kanji光 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M51.72 15.37c1.14 1.14 1.93 3.06 1.93 5.27 0 6.12.05 20.6-.03 26.62" />
      <path d="M26.5 26.25c4.01 2.63 10.36 10.84 11.37 14.94" />
      <path d="M77.5 20.5c.06.86.01 1.7-.21 2.54-1.08 4.25-5.38 12.46-11.17 17.59" />
      <path d="M16.13 51.48c2.19.54 5 .65 8.38.29 15.8-1.67 41.61-4.89 58.84-5.73 3.64-.18 5.83.26 7.65.53" />
      <path d="M45.5 53.5c.25 1.25.23 2.35-.13 3.62-2.99 10.5-7.62 24.13-23.37 34.63" />
      <path d="M58.74 51.37c.68 1.19 1.21 2.59 1.25 4.43.11 4.82-.02 13.81-.02 21.2 0 13 1.28 14.53 17.78 14.53 14.5 0 15.89-2.03 15.89-8.62" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(42.5 15.5)">{"1"}</text>
      <text transform="translate(20.25 24.5)">{"2"}</text>
      <text transform="translate(68.5 20.5)">{"3"}</text>
      <text transform="translate(8.5 53.5)">{"4"}</text>
      <text transform="translate(36.5 60.5)">{"5"}</text>
      <text transform="translate(52.5 59.5)">{"6"}</text>
    </g>
  </svg>
);

export default Kanji光;
