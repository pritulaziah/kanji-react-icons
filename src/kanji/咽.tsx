import * as React from "react";
import { SVGProps } from "react";

const Kanji咽 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M10.88 31.02c.67 1.06 1.02 1.95 1.18 3.22.92 7.21 1.96 17.4 2.74 26.14.13 1.42.25 2.79.36 4.12" />
      <path d="M13.08 33.01c7.09-1.1 12.83-2 17.08-2.71 3.14-.52 4.46.69 4.04 3.83-.88 6.59-1.82 14.99-2.84 25.04" />
      <path d="M16.32 61.74c4.82-.59 7.78-.82 12.8-1.24 1.29-.11 2.71-.23 4.34-.37" />
      <path d="M44.5 18.74c.88.88 1.06 2.25 1.07 3.96.07 8.32.05 43.24.04 60.55 0 5.49-.01 9.21-.01 9.75" />
      <path d="M46.47 20.58c11.69-1.35 32.97-3.42 43.15-3.78 3.68-.13 4.88.44 4.88 4.39v71.55" />
      <path d="M53.5 44.97c1.58.48 3.65.35 5.24.11 7.5-1.09 14.75-1.96 22.63-2.56 1.68-.13 3.12-.16 4.77.26" />
      <path d="M68.76 25.64c.8.8.92 2.67.92 4.12 0 24.61-5.47 41.01-16.39 50.26" />
      <path d="M70.38 56.25c5.49 4.42 12.41 12.38 15.74 21" />
      <path d="M46.77 89.56c11.85-.56 33.79-1.89 46.62-2.26" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(5.5 39.5)">{"1"}</text>
      <text transform="translate(15.5 29.5)">{"2"}</text>
      <text transform="translate(18.71 58.85)">{"3"}</text>
      <text transform="translate(38.5 26.5)">{"4"}</text>
      <text transform="translate(48.5 17.5)">{"5"}</text>
      <text transform="translate(51.5 42.5)">{"6"}</text>
      <text transform="translate(60.25 29.5)">{"7"}</text>
      <text transform="translate(73.5 55.1)">{"8"}</text>
      <text transform="translate(51.5 87.5)">{"9"}</text>
    </g>
  </svg>
);

export default Kanji咽;
