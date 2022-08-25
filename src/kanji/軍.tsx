import * as React from "react";
import { SVGProps } from "react";

const Kanji軍 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M23.29 17.72c-.14 4.1-3.57 14.84-4.79 17.28" />
      <path d="M25.33 18.83c7.92-.83 42.09-4.42 57.76-5.08 11.91-.5 1.85 8.82.38 10.22" />
      <path d="M33.14 31.2c.97.37 2.75.46 3.72.37 9.39-.82 22.89-2.82 33.85-3.29 1.62-.07 2.59.18 3.4.36" />
      <path d="M28.32 40.89c.76.49 1.72.87 1.87 1.52 1.03 4.71 2.27 16.33 3.71 25.25" />
      <path d="M31.24 42.67c11.54-.94 36.22-3.77 44.09-3.92 3.26-.06 3.93 1.29 3.79 2.77-.48 5.08-1.65 13.4-4.24 21.73" />
      <path d="M33.96 54.44c10.79-1.19 18.5-2.03 27.72-2.87 1.03-.09 2.06-.18 3.09-.26" />
      <path d="M33.96 66.19c10.11-.98 27.75-3.92 40.92-3.92" />
      <path d="M16 78.79c1.5.66 4.22.76 5.73.66C47 77.76 62.75 75.26 87.76 74.5c2.49-.08 3.99.31 5.24.64" />
      <path d="M51.42 18.63c.71.58 2.22 4.38 2.36 5.54.14 1.17-.09 67.65-.24 74.96" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(16.5 21.13)">{"1"}</text>
      <text transform="translate(27.5 15.06)">{"2"}</text>
      <text transform="translate(25.99 31.5)">{"3"}</text>
      <text transform="translate(22.99 49.41)">{"4"}</text>
      <text transform="translate(33.49 40.5)">{"5"}</text>
      <text transform="translate(36.49 51.5)">{"6"}</text>
      <text transform="translate(36.49 62.5)">{"7"}</text>
      <text transform="translate(7.99 79.5)">{"8"}</text>
      <text transform="translate(45.5 26.5)">{"9"}</text>
    </g>
  </svg>
);

export default Kanji軍;
