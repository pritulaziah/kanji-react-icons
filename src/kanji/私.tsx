import * as React from "react";
import { SVGProps } from "react";

const Kanji私 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M44.99 13.5c.07.37.15.94-.15 1.47-1.79 3.09-12.05 9.88-26.1 14.03" />
      <path d="M11.62 44.35c.37.21 2.87.74 3.85.62 7.78-.97 28.6-3.61 35.41-4.64.99-.15 2.24-.21 2.86 0" />
      <path d="M35.33 27.16c.67 1.09 1.66 2.84 1.66 4.69 0 4.65-.07 55.71-.07 55.9 0 13-5.16 2-6.66.5" />
      <path d="M35.93 44.47c-5.2 10.82-13.9 24.18-25.68 33.03" />
      <path d="M39.75 49.25c4.93 2.57 9.1 7.7 11.75 11" />
      <path d="M72.55 31.15c.57.94.77 2.29.44 3.51C68.85 49.93 59.75 66 52.08 78.31c-2.21 3.55-1.88 4.43 1.63 3.39C64.5 78.5 76.25 74 88.28 70.48" />
      <path d="M82.43 60.29c4.58 4.33 11.84 17.79 12.98 24.52" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(37.5 13.63)">{"1"}</text>
      <text transform="translate(4.5 45.5)">{"2"}</text>
      <text transform="translate(28.5 34.63)">{"3"}</text>
      <text transform="translate(23.5 54.5)">{"4"}</text>
      <text transform="translate(47.25 50.5)">{"5"}</text>
      <text transform="translate(64.5 31.5)">{"6"}</text>
      <text transform="translate(76.5 61.5)">{"7"}</text>
    </g>
  </svg>
);

export default Kanji私;
