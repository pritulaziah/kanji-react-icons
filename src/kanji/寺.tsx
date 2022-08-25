import * as React from "react";
import { SVGProps } from "react";

const Kanji寺 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M29.88 28.28c1.66.31 3.87.6 6.37.31 10.23-1.18 24.38-2.59 37.19-3.31 2.76-.16 4.43.15 5.82.3" />
      <path d="M52.55 10.37c1.2 1.13 1.82 2.62 1.82 4.6 0 8.45.13 26.9.13 27.79" />
      <path d="M13.38 45.54c2.71.64 7.69.85 10.39.64 20.86-1.56 45.36-3.47 61.38-3.94 4.51-.13 7.22.31 9.48.63" />
      <path d="M21.13 64.99c1.9.46 5.39.54 7.3.46 16.2-.7 40.2-3.2 55.42-3.64 3.17-.09 5.07.22 6.66.44" />
      <path d="M66.07 49.33c.99.99 1.65 2.79 1.65 4.81 0 12.04-.15 34.92-.15 39.02 0 9.83-5.96 1.47-7.96.21" />
      <path d="M36 74.25c3.18 1.9 8.21 7.8 9 10.75" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(23.5 29.5)">{"1"}</text>
      <text transform="translate(42.5 10.5)">{"2"}</text>
      <text transform="translate(5.25 46.63)">{"3"}</text>
      <text transform="translate(12.75 66.13)">{"4"}</text>
      <text transform="translate(57.75 55.63)">{"5"}</text>
      <text transform="translate(27.75 78.13)">{"6"}</text>
    </g>
  </svg>
);

export default Kanji寺;
