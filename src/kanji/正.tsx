import * as React from "react";
import { SVGProps } from "react";

const Kanji正 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M26.63 24.79c1.08.4 3.07.45 4.16.4 10.87-.59 34.82-4.31 50.05-4.54 1.81-.03 2.89.19 3.79.39" />
      <path d="M58.63 53.57c.43.16 1.22.24 1.65.16 1.74-.31 11.62-1.79 19.85-1.84.72 0 1.15.08 1.5.16" />
      <path d="M53.71 24.37c.09.48 1.17 2.5 1.26 5.54.4 14.61-.26 52.87-.26 57.84" />
      <path d="M28.29 56.87c.09.25 1.25 1.32 1.33 2.92.43 7.7.23 27.85.23 30.47" />
      <path d="M15.75 90.5c1.5.5 4.74 1.23 6.16 1.11 5.84-.48 37.94-3.3 65.59-3.36 2.41-.01 4.5.75 5.75 1.5" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(19.5 24.5)">{"1"}</text>
      <text transform="translate(59.5 50.5)">{"2"}</text>
      <text transform="translate(47.5 36.13)">{"3"}</text>
      <text transform="translate(17.5 56.5)">{"4"}</text>
      <text transform="translate(7.5 89.5)">{"5"}</text>
    </g>
  </svg>
);

export default Kanji正;
