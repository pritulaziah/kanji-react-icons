import * as React from "react";
import { SVGProps } from "react";

const Kanji巾 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M25.06 33.88c.9.9 1.26 2.74 1.26 4v40.5" />
      <path d="M27.25 36.97c4.75-.31 51.04-5.04 54.59-5.24 4.16-.23 5.26 1.76 4.91 5.74-1 11.53-2.75 24.78-5.5 35.28-1.89 7.21-6.25 1.5-8.25-1" />
      <path d="M52.56 11.13c1.22 1.22 1.51 2.99 1.51 4.5v83.25" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(17.5 42.13)">{"1"}</text>
      <text transform="translate(31.5 32.5)">{"2"}</text>
      <text transform="translate(42.5 11.5)">{"3"}</text>
    </g>
  </svg>
);

export default Kanji巾;
