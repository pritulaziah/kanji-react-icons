import * as React from "react";
import { SVGProps } from "react";

const Kanji段 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M39.33 12.75c.11 1.05.02 2.04-.63 2.92C34.75 21 30 25.75 23.25 30.79" />
      <path d="M20.37 31c.88.88 1.21 2.25 1.21 3.5 0 4.52-.06 36.54-.08 55.62v5.62" />
      <path d="M22.75 44c6.75-.75 16.51-2.38 17.75-2.5 1.4-.13 2.5-.25 3.75 0" />
      <path d="M22.5 61c6.75-.75 17.51-2.63 18.75-2.75 1.4-.13 2.5-.25 3.75 0" />
      <path d="M10.5 82.67c1 1.08 2.38.97 4.22.24 1.09-.43 20.92-7.84 25.53-9.91" />
      <path d="M56.55 19.6c.7.65 1.02 1.68.96 2.77-.63 11.75-1.63 19.88-8.21 28.63" />
      <path d="M58.01 21.12c4.12-.62 13.24-2.62 16.17-2.98 2.35-.29 3.13.87 2.83 3.04-.63 4.45-1.41 10.44-1.41 14.22 0 6.6 1.16 8.77 8.35 8.77 7.3 0 7.85-1.55 7.85-7.6" />
      <path d="M54.74 55.82c1.58.37 3.12.8 6.18-.13 4.32-1.32 11.22-3.77 13.31-4.56 2.64-1 4.51.87 3.46 3.8-7.22 20.1-18.95 32.33-36.59 40.74" />
      <path d="M51.3 64.26c4.2.33 19.02 13.74 32.91 25.17 2.67 2.2 6.92 4.7 9.69 6.01" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(30.75 12.13)">{"1"}</text>
      <text transform="translate(12.75 40.63)">{"2"}</text>
      <text transform="translate(26.25 39.13)">{"3"}</text>
      <text transform="translate(26.25 57.05)">{"4"}</text>
      <text transform="translate(3.75 90.13)">{"5"}</text>
      <text transform="translate(48.75 27.13)">{"6"}</text>
      <text transform="translate(59.5 17.5)">{"7"}</text>
      <text transform="translate(57.75 52.63)">{"8"}</text>
      <text transform="translate(51.75 73.55)">{"9"}</text>
    </g>
  </svg>
);

export default Kanji段;
