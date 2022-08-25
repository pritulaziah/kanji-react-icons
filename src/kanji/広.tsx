import * as React from "react";
import { SVGProps } from "react";

const Kanji広 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M50.83 14.53c2.8 1.03 8.73 7.72 9.29 9.78" />
      <path d="M25.38 31.24c1.41.5 3.99.58 5.4.5 14.66-.84 35.53-3.73 53.92-3.92 2.35-.02 3.76.24 4.93.49" />
      <path d="M28.14 33.82c.05 1.27.1 3.27-.09 5.09C26.9 49.65 22.99 74.12 12 87.25" />
      <path d="M58.73 43.99c.61 1.02.6 4.02.02 5.26C53 61.5 45.5 74.75 37.33 87.97c-1.83 2.95-2.08 4.28 1.22 3.67 8.18-1.52 30.59-6.53 42.83-8.36" />
      <path d="M72.56 69.59C78.01 73.85 86.64 87.12 88 93.75" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(44 14.5)">{"1"}</text>
      <text transform="translate(30.75 27.13)">{"2"}</text>
      <text transform="translate(17.25 37.63)">{"3"}</text>
      <text transform="translate(51.5 43.5)">{"4"}</text>
      <text transform="translate(70 65)">{"5"}</text>
    </g>
  </svg>
);

export default Kanji広;
