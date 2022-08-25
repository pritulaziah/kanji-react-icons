import * as React from "react";
import { SVGProps } from "react";

const Kanji札 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M15.28 40.72c.35.24 2.39.41 3.31.31 3.94-.41 22.12-3.21 28.45-4.41.92-.17 2.15-.24 2.73 0" />
      <path d="M32.86 16.5c.91.47 2.54 2.75 2.54 4.42 0 .95-.3 65.73-.3 66.58 0 13.5-5.1 3.5-6.6 2" />
      <path d="M34.44 40.78C29.5 53.75 24 64.25 14.11 73.84" />
      <path d="M37.47 48.9c3.59 1.88 9.5 7.97 12.53 11.6" />
      <path d="M62.99 18.87c.74 1.19 1.33 2.59 1.38 4.43.2 8.19-.53 49.14-.53 54.7 0 13 7.4 11.53 16.17 11.53 9.25 0 11.34-1.68 12.64-2.62 2.75-2 2-3 2.25-6.5" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(8.25 43.63)">{"1"}</text>
      <text transform="translate(24.75 18.13)">{"2"}</text>
      <text transform="translate(23.25 52.63)">{"3"}</text>
      <text transform="translate(42.75 49.63)">{"4"}</text>
      <text transform="translate(54.5 20.5)">{"5"}</text>
    </g>
  </svg>
);

export default Kanji札;
