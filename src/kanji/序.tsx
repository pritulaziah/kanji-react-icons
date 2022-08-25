import * as React from "react";
import { SVGProps } from "react";

const Kanji序 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M50.8 7.63c2.79.98 8.71 7.34 9.27 9.3" />
      <path d="M21.13 24.23c1.52.54 4.3.63 5.82.54 15.8-.91 43.05-5.02 59.61-5.73 2.53-.11 4.05.26 5.31.53" />
      <path d="M25.99 27c.05 1.46.1 3.76-.09 5.86-1.15 12.35-3.73 42.31-16.09 55.61" />
      <path d="M41.7 33.17c1.19.84 2.8 1.75 4.15 1.54 2.67-.42 23.39-4.8 26.2-5.22 2.82-.42 3.78 1.77 2.1 3.14-2.88 2.36-13.67 11.66-15.45 13.34" />
      <path d="M49.92 42.03c2.68 1.28 9.62 6.21 10.88 9.56" />
      <path d="M32.84 57.33c1.16.92 3.41 1.17 5.74.81 4.69-.72 32.92-6.89 43.09-7.24 8.59-.3 2.82 6.1-1.68 9.6" />
      <path d="M60.21 57.16c1.05.79 1.83 1.83 1.83 3.41 0 1.57-.52 30.4-.52 33.28 0 9.15-5.24.52-6.81-.79" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(45 8.63)">{"1"}</text>
      <text transform="translate(22.5 21.13)">{"2"}</text>
      <text transform="translate(17.25 33.5)">{"3"}</text>
      <text transform="translate(33.75 34.5)">{"4"}</text>
      <text transform="translate(42.5 45.5)">{"5"}</text>
      <text transform="translate(32.5 54.5)">{"6"}</text>
      <text transform="translate(54.75 65.75)">{"7"}</text>
    </g>
  </svg>
);

export default Kanji序;
