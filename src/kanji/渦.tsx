import * as React from "react";
import { SVGProps } from "react";

const Kanji渦 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M19.38 18.25c3.48 1.38 9 5.69 9.87 7.84" />
      <path d="M14.25 42c3.62 1.32 9.34 5.44 10.25 7.5" />
      <path d="M13.75 87.71c1.5 1.31 3.31 1.36 4.25-.25C20.75 82.75 23.5 77 26 71" />
      <path d="M46.23 17.75c.57 1.25.98 2.75 1.14 5 .56 8.25 1.51 19.25 2.08 29.5" />
      <path d="M47.36 19.75c7.21-1 28.9-3.97 32.12-4.5 1.52-.25 3.03.79 2.66 3-.76 4.5-2.28 24.5-3.03 31.5" />
      <path d="M63 32.25c2.66-.25 13.76-2 17.55-2.5" />
      <path d="M61.39 30.25c.83.5 1.32 2.25 1.49 3.25.16 1 .11 11.25-.06 17.5" />
      <path d="M39 50.75c.28 1.17 1.75 3.04 1.75 5.14 0 5.11-.25 27.86-.32 37.61" />
      <path d="M41.02 53.75c7.21-1 46.02-4.65 47.44-5 3.04-.75 4.61 1.75 4.55 3-.51 12-2.26 28-5.12 38.25-2.68 9.6-4.22 4.75-6.5 1.5" />
      <path d="M51.92 63.77c.33.3.67.56.81.94 1.15 3.03 2.12 10.6 2.91 16.04" />
      <path d="M53.59 65.43c7.54-1.38 16.54-2.55 20.41-2.95 1.41-.15 2.26.86 2.06 1.72-.84 3.54-1.82 7.03-3.06 11.92" />
      <path d="M55.8 78.48c4.54-.45 12.37-1.23 18.61-1.92" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(12.5 19.5)">{"1"}</text>
      <text transform="translate(5.5 41.5)">{"2"}</text>
      <text transform="translate(6.75 92.5)">{"3"}</text>
      <text transform="translate(38.25 25.63)">{"4"}</text>
      <text transform="translate(50.25 15.13)">{"5"}</text>
      <text transform="translate(65.25 28.48)">{"6"}</text>
      <text transform="translate(54.75 37.55)">{"7"}</text>
      <text transform="translate(33.5 59.9)">{"8"}</text>
      <text transform="translate(41.25 48.13)">{"9"}</text>
      <text transform="translate(43.5 73.5)">{"10"}</text>
      <text transform="translate(54.75 62.5)">{"11"}</text>
      <text transform="translate(57.75 75.05)">{"12"}</text>
    </g>
  </svg>
);

export default Kanji渦;
