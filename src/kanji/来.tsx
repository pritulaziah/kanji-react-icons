import * as React from "react";
import { SVGProps } from "react";

const Kanji来 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M26.79 28.33c.98.39 2.78.43 3.76.39 10.22-.44 36.19-4.21 46.34-4.42 1.64-.03 2.62.18 3.44.38" />
      <path d="M31 38.25c2.45 1.86 6.14 7.11 6.75 10" />
      <path d="M73.77 32.25c.03.34.05.88-.05 1.37-.63 2.89-4.26 9.24-9.22 13.13" />
      <path d="M18.37 57.25c.81.25 2.98.99 5.12.75 9.01-1 52.65-5.5 62.08-5 2.15.11 2.7-.25 4.04 0" />
      <path d="M51.42 11.5c1.35.5 2.16 2.25 2.43 3.25s-.27 77.72-.27 79c0 12.5-5.95 4.62-8.58 2" />
      <path d="M51.42 55.25C45.23 67.07 30.18 83.68 16.25 90.5" />
      <path d="M54.75 56.75c7.18 4.13 28.63 24.38 34.41 28.57 1.96 1.42 3.64 2.03 5.59 2.43" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(18.5 28.5)">{"1"}</text>
      <text transform="translate(23.5 40.63)">{"2"}</text>
      <text transform="translate(65.5 35.5)">{"3"}</text>
      <text transform="translate(9.5 58.5)">{"4"}</text>
      <text transform="translate(42.5 13.63)">{"5"}</text>
      <text transform="translate(35.5 67.5)">{"6"}</text>
      <text transform="translate(70.5 66.5)">{"7"}</text>
    </g>
  </svg>
);

export default Kanji来;
