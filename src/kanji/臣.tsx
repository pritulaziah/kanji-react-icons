import * as React from "react";
import { SVGProps } from "react";

const Kanji臣 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M26.07 18.74C33.25 18 66 15.25 82.69 14.51c2.53-.11 4.05-.24 5.31.03" />
      <path d="M23.87 16.25c1.09.5 1.74 2.25 1.96 3.25.22 1 0 72.25-.22 78.5" />
      <path d="M53.87 16.75c1.09.5 1.74 2.25 1.96 3.25.22 1 .14 13.5-.08 19.75" />
      <path d="M26.5 42.75c17.19-1.84 39.82-3.74 51.75-5 4.83-.51 6.17 1.56 5.5 4.25-1.22 4.88-3.01 11.88-4.25 17.75" />
      <path d="M26.57 65.24c7.18-.74 48.68-3.74 55.43-4.2" />
      <path d="M54.62 63.5c1.09.5 1.74 2.25 1.96 3.25.22 1 .14 18-.08 24.25" />
      <path d="M26.07 93.74C33.25 93 71 90.75 87.69 90.01c2.53-.11 4.05-.24 5.31.03" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(29.5 14.5)">{"1"}</text>
      <text transform="translate(18.49 25.63)">{"2"}</text>
      <text transform="translate(47.5 26.98)">{"3"}</text>
      <text transform="translate(30.32 38.5)">{"4"}</text>
      <text transform="translate(30.5 61.5)">{"5"}</text>
      <text transform="translate(48.75 73.63)">{"6"}</text>
      <text transform="translate(30.42 89.5)">{"7"}</text>
    </g>
  </svg>
);

export default Kanji臣;
