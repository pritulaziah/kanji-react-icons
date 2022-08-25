import * as React from "react";
import { SVGProps } from "react";

const Kanji要 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M21 17.24c1.78.73 5.05.84 6.84.73 13.66-.84 39.57-3.31 50.42-4 2.97-.19 4.87-.34 6.24-.04" />
      <path d="M22.75 31.19c.78.78 1.46 1.75 1.57 2.88.83 3.01 1.49 7.88 2.12 12.18.22 1.5.43 2.94.65 4.2" />
      <path d="M25.29 33.28c20.46-2.78 40.83-4.65 54.33-5.54 3.65-.24 5.58.93 4.45 5.03-.81 2.92-1.86 6.35-3.15 9.87-.5 1.37-1.04 2.75-1.61 4.12" />
      <path d="M42.37 20c1.13 1.13 1.62 2.48 1.71 3.5.42 4.75 1.17 13 1.67 22.5" />
      <path d="M63.12 18c.88.88 1.51 2.98 1.13 5.25-1 6-1.25 10.5-3.25 21.75" />
      <path d="M28 48.38c15.63-1.25 32.25-2.38 50.7-3.13" />
      <path d="M47.28 52.87c.51 1.25.28 2.87-.26 4.39-1.77 5-4.2 10.5-10.59 19.28-1.39 1.91-.3 2.61.74 2.71 11.31 1.13 23.41 4.23 32.95 10.94 3.18 2.24 6.07 4.88 8.56 7.98" />
      <path d="M69.62 57.75c.25 1.5.22 3.35-.26 4.77-3.96 11.46-14.07 30.7-43.12 37.73" />
      <path d="M13.13 66.65c3 .62 6.21.39 9.25.19 15.85-1.01 45.88-3.34 65.5-4 2.69-.09 7.32.31 9.5.9" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(14.5 17.5)">{"1"}</text>
      <text transform="translate(16.5 39.5)">{"2"}</text>
      <text transform="translate(26.25 30.13)">{"3"}</text>
      <text transform="translate(35.5 26.5)">{"4"}</text>
      <text transform="translate(56.5 24.5)">{"5"}</text>
      <text transform="translate(30.75 45.13)">{"6"}</text>
      <text transform="translate(39.5 56.5)">{"7"}</text>
      <text transform="translate(60.5 57.5)">{"8"}</text>
      <text transform="translate(5.5 67.5)">{"9"}</text>
    </g>
  </svg>
);

export default Kanji要;
