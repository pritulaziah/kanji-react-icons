import * as React from "react";
import { SVGProps } from "react";

const Kanji朴 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M15.28 37.72c.35.24 2.39.41 3.31.31 3.94-.41 24.12-4.21 30.45-5.41.92-.17 2.15-.24 2.73 0" />
      <path d="M34.36 13.5c.91.47 2.86 3.49 3.04 4.42.18.93-.3 73.73-.3 74.58 0 12-5.85 3.5-7.1 2.25" />
      <path d="M36.94 37.28C30.47 51.56 26.87 57.6 16.86 70.09" />
      <path d="M39.47 44.9c3.59 2.12 9.5 9 12.53 13.1" />
      <path d="M66.31 12.13c.76.45 2.36 3.35 2.51 4.25.15.9-.1 75.15-.25 80.75" />
      <path d="M72.75 41.25c7.59 3.62 18.75 12.25 22 20" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(6.75 36.13)">{"1"}</text>
      <text transform="translate(26.25 15.13)">{"2"}</text>
      <text transform="translate(23.25 49.63)">{"3"}</text>
      <text transform="translate(43.5 45.5)">{"4"}</text>
      <text transform="translate(57.75 12.13)">{"5"}</text>
      <text transform="translate(76.5 40.5)">{"6"}</text>
    </g>
  </svg>
);

export default Kanji朴;
