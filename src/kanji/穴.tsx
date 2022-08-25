import * as React from "react";
import { SVGProps } from "react";

const Kanji穴 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M47.1 14.25c3.65 2.25 7.39 6.92 8.99 9.78" />
      <path d="M20.5 30.5c0 4.25-3.09 15.92-4.5 18.75" />
      <path d="M20.5 33.75c5-.5 56.25-6.36 63.25-6.5 12.75-.25 2.5 8-.5 10" />
      <path d="M39.72 55.99c.03 1.01.01 2.98-.5 4.05C36.2 66.39 21.04 85.24 16 89.47" />
      <path d="M53 45.25C64.85 49.71 73.25 78 83.12 85.12c3.82 2.76 6.13 4.38 9.88 6.12" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(41.5 16.5)">{"1"}</text>
      <text transform="translate(12.75 36.13)">{"2"}</text>
      <text transform="translate(24.5 30.5)">{"3"}</text>
      <text transform="translate(30.5 52.5)">{"4"}</text>
      <text transform="translate(45.5 43.5)">{"5"}</text>
    </g>
  </svg>
);

export default Kanji穴;
