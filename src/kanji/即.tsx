import * as React from "react";
import { SVGProps } from "react";

const Kanji即 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M17.66 18.73c2.16-.12 23.79-2.96 25.76-3.1 1.64-.12 2.59 1.33 2.57 2.07-.11 5.18-1.49 20.06-2.31 27.97" />
      <path d="M17.45 32.23c4.52-.48 9.03-1.13 13.54-1.72 1.35-.18 2.7-.35 4-.52" />
      <path d="M17.91 46.59c7.45-.93 17.36-2.27 25.46-3.16" />
      <path d="M15.51 16.51c1.23.58 1.47 2.62 1.71 3.79.25 1.17.25 51.78.25 54.69 0 4.02-.08 5.18 2.87 3.14C23.29 76.08 39 66.75 44.75 64" />
      <path d="M38.81 55.27c3.13 2.48 8.31 10.54 9.74 16.99" />
      <path d="M63.25 24.26c4.5-.51 20.97-3.13 23.13-3.29 2.16-.16 5.4-.33 5.62 3.1.1 1.64-2.79 24.78-4.97 32.28-3.03 10.41-8.21.82-8.86.49" />
      <path d="M61.37 22.25c1.09.5 1.74 2.25 1.96 3.25.22 1 0 63.25-.22 69.5" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(19.5 15.13)">{"1"}</text>
      <text transform="translate(22.45 28.5)">{"2"}</text>
      <text transform="translate(22.5 42.5)">{"3"}</text>
      <text transform="translate(9.75 25.63)">{"4"}</text>
      <text transform="translate(32.25 58.63)">{"5"}</text>
      <text transform="translate(64.5 20.5)">{"6"}</text>
      <text transform="translate(55.5 31.63)">{"7"}</text>
    </g>
  </svg>
);

export default Kanji即;
