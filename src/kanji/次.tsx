import * as React from "react";
import { SVGProps } from "react";

const Kanji次 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M17 26.38c4.41 1.57 9.88 5.25 11.75 8.62" />
      <path d="M12.12 85.87c1.15.22 2.28-.25 3.01-1.2 1.15-1.48 8.1-13.15 12.49-20.67" />
      <path d="M53.95 16c.43.86.6 1.9.35 2.81C52 26.88 44.88 40 36.25 48.41" />
      <path d="M47.36 39.52c1.15.29 2.56.4 4.31.25C54.88 39.5 73.99 34.7 79 33.5c6.25-1.5 6 2.5-3.5 11.4" />
      <path d="M56.77 49.2c.73 1.3.8 2.71.58 4.26-1.85 13.41-9.73 30.41-25.6 39.03" />
      <path d="M57.42 56.97c5.33 6.16 17.33 19.53 27.25 28.88 2.29 2.16 4.33 3.78 7.83 5.28" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(9.75 27.13)">{"1"}</text>
      <text transform="translate(5.25 91.63)">{"2"}</text>
      <text transform="translate(45.75 17.24)">{"3"}</text>
      <text transform="translate(56.25 34.63)">{"4"}</text>
      <text transform="translate(48.75 55.63)">{"5"}</text>
      <text transform="translate(66.75 61.66)">{"6"}</text>
    </g>
  </svg>
);

export default Kanji次;
