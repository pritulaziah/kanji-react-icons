import * as React from "react";
import { SVGProps } from "react";

const Hiraganaね = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M33.29 14.5c1.62 1.62 2.1 3.21 1.88 5.88-1.03 11.93-2.06 31.66-2.53 53.12-.1 4.62-.18 9.31-.22 14" />
      <path d="M17.16 37.88c1.62.88 3.25 1.38 5.62.75 2.14-.56 7.8-2.31 12.37-4.03 6.26-2.35 6.88-1.47 3.12 3.63C32.71 45.76 25.25 55.61 19.79 65c-5.6 9.62-3.45 8.3 2 3 19.12-18.62 38.5-39.12 54.12-39.12 11.38 0 12.88 11.25 12.88 32.5 0 28.62-30.18 24.88-30.18 16.26 0-9.63 18.73-7.82 28.06-1.88 2.75 1.75 5.88 4.88 7.5 6.75" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(25.91 13.75)">{"1"}</text>
      <text transform="translate(12.91 34.13)">{"2"}</text>
    </g>
  </svg>
);

export default Hiraganaね;
