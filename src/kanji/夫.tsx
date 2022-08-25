import * as React from "react";
import { SVGProps } from "react";

const Kanji夫 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M30 36.14c2.37.43 4.64.49 7.02.21 9.48-1.1 25.86-2.98 35.11-3.65 2.19-.16 4.47-.22 6.62.31" />
      <path d="M20.25 57.63c2.82.69 5.67.58 8.51.27 13.72-1.51 40.82-3.55 52.12-4.27 2.2-.14 5.38 0 7.38.4" />
      <path d="M52.87 14.25c.63 1.25 1.08 2.92 1.12 5.33.76 42.17-9.24 62.04-36.49 76.92" />
      <path d="M54 55.75c9.63 11.28 26.53 29.19 37.32 36.08 3.11 1.99 3.87 2.69 5.18 2.92" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(23.5 37.5)">{"1"}</text>
      <text transform="translate(12.5 58.5)">{"2"}</text>
      <text transform="translate(43.5 15.5)">{"3"}</text>
      <text transform="translate(65.5 64.5)">{"4"}</text>
    </g>
  </svg>
);

export default Kanji夫;
