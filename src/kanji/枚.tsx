import * as React from "react";
import { SVGProps } from "react";

const Kanji枚 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M14.28 39.72c.35.24 2.39.41 3.31.31 3.94-.41 18.12-2.21 24.45-3.41.92-.17 2.15-.24 2.73 0" />
      <path d="M30.36 15c.91.47 1.89 2.75 2.04 4.92.06.95-.3 70.73-.3 71.58 0 11.75-5.6 2.25-6.85 1" />
      <path d="M31.94 41.28c-6.31 14.6-9.82 20.78-19.58 33.56" />
      <path d="M34.47 47.9c2.8 2.04 7.41 8.65 9.78 12.6" />
      <path d="M62.99 14.14c.05.87.29 2.3-.09 3.5-2.48 7.68-8.06 22.85-16.65 33.48" />
      <path d="M57.81 38.16c.64.44 1.81.49 2.46.44 6.67-.51 18.11-4.26 28.29-5.07 1.15-.09 1.85-.02 2.14.08" />
      <path d="M78.28 39.87c.54 1.35.84 2.32.27 4.79C73.4 67.13 61.73 85.56 44.69 95" />
      <path d="M54.25 51.29c7.52 7.29 26.01 31.11 37.21 39.31 2.16 1.58 3.53 1.84 5.29 2.01" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(6.75 40.63)">{"1"}</text>
      <text transform="translate(21.75 15.5)">{"2"}</text>
      <text transform="translate(21.5 50.5)">{"3"}</text>
      <text transform="translate(37.5 49.63)">{"4"}</text>
      <text transform="translate(54.5 14.5)">{"5"}</text>
      <text transform="translate(63.75 34.5)">{"6"}</text>
      <text transform="translate(71.5 47.5)">{"7"}</text>
      <text transform="translate(58.5 53.5)">{"8"}</text>
    </g>
  </svg>
);

export default Kanji枚;
