import * as React from "react";
import { SVGProps } from "react";

const Kanji忍 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M32.12 17.44c2.45.8 5.01.54 7.52.32 12.21-1.07 29.09-3.29 34.89-3.78 4.04-.34 5.7 1.79 5.36 4.19-1.14 8.21-6.72 30.07-12.23 37.38-4 5.3-6.33 3.6-9.35.16" />
      <path d="M55.96 19.6c.09.9-.14 2.15-.68 3.38C50.5 34 41.38 48.12 24.62 58.21" />
      <path d="M38.03 31.13c6.85 2.32 14.72 7.62 19.67 13.4" />
      <path d="M23.58 75.84c.24 2.4-2.37 12.99-4.27 16.99" />
      <path d="M34.54 71.84C43 87.5 53.5 98 81.04 96.83c6.97-.3 6.96-3.2 2.38-6.95" />
      <path d="M51.55 68.63c2.95 4.99 5.84 8.66 6.84 4.33" />
      <path d="M78.03 66.45c5.33 1.2 9.33 2.29 13.66 6" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(25.5 17.5)">{"1"}</text>
      <text transform="translate(45.5 27.5)">{"2"}</text>
      <text transform="translate(29.5 31.63)">{"3"}</text>
      <text transform="translate(17.5 75.13)">{"4"}</text>
      <text transform="translate(30.75 82.5)">{"5"}</text>
      <text transform="translate(45.5 70.5)">{"6"}</text>
      <text transform="translate(69.75 69.5)">{"7"}</text>
    </g>
  </svg>
);

export default Kanji忍;
