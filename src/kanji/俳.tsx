import * as React from "react";
import { SVGProps } from "react";

const Kanji俳 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M31.51 15.75c.21 2.12-.06 3.31-.73 5.13-4.28 11.59-9.72 24.06-19.53 38.16" />
      <path d="M24.53 42c.59.61.7 1.97.76 3.23.56 11.77-1.02 42.29-.54 49.52" />
      <path d="M53.4 17.17c1.02.47 1.63 2.11 1.84 3.05.09.4.1 13.4.07 28.64-.04 20.48-.61 35.21-13.29 47.89" />
      <path d="M71.79 13.5c1.02.47 1.63 2.11 1.84 3.05.2.94 0 75.62-.21 81.49" />
      <path d="M37.8 40.42c1.29 0 2.8.28 4.1 0 1.29-.28 11.43-1.95 12.94-2.79" />
      <path d="M37.33 55.59c1.27 0 2.75.26 4.01 0 1.27-.26 10.56-2.31 13.94-3.08" />
      <path d="M34.98 71.76c1.14 1.76 3.2 2.33 5.09 1.25 1.11-.64 8.18-4.75 15.04-8.41" />
      <path d="M74.87 34.46c4.22-.35 14.67-2.43 17.84-3.02 1.15-.21.35-.12 2.35-.12" />
      <path d="M73.72 51.66c4.23-.35 14.14-1.46 17.31-2.05 1.16-.21.35-.12 2.35-.12" />
      <path d="M74.11 71.26c4.22-.35 18.9-2.46 22.07-3.05 1.15-.21.35-.12 2.35-.12" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(22.5 16.5)">{"1"}</text>
      <text transform="translate(17.5 61.55)">{"2"}</text>
      <text transform="translate(45.5 19.5)">{"3"}</text>
      <text transform="translate(65.25 13.63)">{"4"}</text>
      <text transform="translate(31.5 39.5)">{"5"}</text>
      <text transform="translate(30.75 56.98)">{"6"}</text>
      <text transform="translate(30.75 80.91)">{"7"}</text>
      <text transform="translate(78.75 30.05)">{"8"}</text>
      <text transform="translate(78.75 47.98)">{"9"}</text>
      <text transform="translate(78.5 66.5)">{"10"}</text>
    </g>
  </svg>
);

export default Kanji俳;
