import * as React from "react";
import { SVGProps } from "react";

const Kanji寸 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M11.38 40.67c3.62 1.08 8.48.79 11.88.4 21.24-2.45 43.24-4.7 63.24-6.1 3.86-.27 8.38-.1 11.63.59" />
      <path d="M66.27 11.83c1.08 1.08 1.76 2.42 1.76 4.52 0 20.4-.01 69.16-.01 74.12 0 13.28-7.52 1.78-9.71.25" />
      <path d="M40.38 51.62c3.65 2.87 9.42 11.78 10.33 16.24" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(3.75 42.13)">{"1"}</text>
      <text transform="translate(54.75 15.13)">{"2"}</text>
      <text transform="translate(32.25 55.63)">{"3"}</text>
    </g>
  </svg>
);

export default Kanji寸;
