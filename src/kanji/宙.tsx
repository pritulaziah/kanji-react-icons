import * as React from "react";
import { SVGProps } from "react";

const Kanji宙 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M49.27 12.11c3.63 2.2 6.62 5.56 8.05 9.78" />
      <path d="M20.47 29.05c0 3.36-1.97 13.95-3.72 18.84" />
      <path d="M22.22 31.12c17.28-.37 53.04-5.75 63.49-6.23 13.79-.63 2.44 6.92-.43 8.96" />
      <path d="M25.95 58.2c.4.68.41 1.14.62 1.97 1.77 6.9 3.03 22.61 4.08 35.32" />
      <path d="M27.82 59.25c14.04-.7 38.61-3.89 49.1-4.56 3.85-.25 5.81 1.75 5.6 3.6-.77 6.78-3.77 26.24-6.52 35.03" />
      <path d="M51.72 36.57c1.04.89 1.65 2.19 1.66 3.37.03 11.64.19 47.67.19 50.71" />
      <path d="M30 75.17c11.29-.81 22.57-1.95 33.85-2.89 1.36-.11 2.68-.22 3.94-.33" />
      <path d="M31.38 92.45c11.57-.49 31.28-2.8 45.24-2.99" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(44.25 12.5)">{"1"}</text>
      <text transform="translate(12.75 31.63)">{"2"}</text>
      <text transform="translate(24.5 27.13)">{"3"}</text>
      <text transform="translate(18.75 66.13)">{"4"}</text>
      <text transform="translate(30.5 55.5)">{"5"}</text>
      <text transform="translate(42.5 39.5)">{"6"}</text>
      <text transform="translate(35.25 70.63)">{"7"}</text>
      <text transform="translate(35.25 88.55)">{"8"}</text>
    </g>
  </svg>
);

export default Kanji宙;
