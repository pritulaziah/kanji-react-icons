import * as React from "react";
import { SVGProps } from "react";

const Kanji右 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M53.5 21.5c.62 1.12.69 2.23.25 4C49.62 42 39.5 61 25.25 74.25" />
      <path d="M13 42.15c1.9.56 5.9.52 7.79.34 23.41-2.24 49.76-5.74 67.67-6.3 3.24-.1 6.45.31 9.17.81" />
      <path d="M41.75 66.5c.75.75 1.35 1.93 1.54 2.95.94 5 2.38 16.66 3.07 22.76.24 2.15.39 2.8.39 3.54" />
      <path d="M43.25 68c5.25-.5 29.75-3.25 37-3.75 1.75-.12 3.24 1.52 3 2.75-1 5.12-3.38 18-4.5 23.25" />
      <path d="M47 93.25c5.79-.2 19.51-1.58 28.25-2.23 2.21-.17 4.18-.27 5.75-.27" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(47 20)">{"1"}</text>
      <text transform="translate(8.25 40)">{"2"}</text>
      <text transform="translate(37.25 78.63)">{"3"}</text>
      <text transform="translate(45.75 64.5)">{"4"}</text>
      <text transform="translate(51.75 89.43)">{"5"}</text>
    </g>
  </svg>
);

export default Kanji右;
