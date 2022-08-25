import * as React from "react";
import { SVGProps } from "react";

const Kanji虹 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M10.94 37.3c.82.82 1.06 1.7 1.2 2.96.53 4.69 1.17 11.83 1.79 18.01.2 2.02.4 3.94.59 5.63" />
      <path d="M13.25 39.45c6.6-.92 18.66-2.65 25.13-3.25 3.2-.29 5.36.72 4.71 4.19-.93 4.96-1.52 8.97-2.87 17.22" />
      <path d="M15.29 61.04c6.86-.77 14.88-1.44 21.09-1.93 2.25-.18 4.26-.33 5.9-.45" />
      <path d="M25.17 16.75c1.35 1.35 1.51 2.62 1.51 4.97 0 4.78.05 47.78.05 61.16" />
      <path d="M11.57 89.1c1.31 1.4 2.56 1.4 4.27.56 5.06-2.47 20.44-10.21 23.66-12.04" />
      <path d="M36.25 69.75c2.93 2.5 7.57 10.26 8.31 14.14" />
      <path d="M50.75 30.47c2.38.91 5.26.82 7.5.71 7.03-.35 20.84-1.81 28.63-2.48 2.32-.2 4.62-.5 6.87.31" />
      <path d="M69.62 33c1.57 1.57 1.77 3.25 1.77 6.3 0 15.86-.01 42.45-.01 49.2" />
      <path d="M42.5 90.55c2.76.95 5.65.76 8.49.5 14.61-1.32 25.68-2.01 39.13-2.46 3.06-.1 6 .06 8.88 1.21" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(6 45.25)">{"1"}</text>
      <text transform="translate(15.25 36.25)">{"2"}</text>
      <text transform="translate(18.25 57.25)">{"3"}</text>
      <text transform="translate(16.25 17.25)">{"4"}</text>
      <text transform="translate(8.25 86.25)">{"5"}</text>
      <text transform="translate(38.25 69.25)">{"6"}</text>
      <text transform="translate(45 28.25)">{"7"}</text>
      <text transform="translate(63.25 41.25)">{"8"}</text>
      <text transform="translate(47.25 88.25)">{"9"}</text>
    </g>
  </svg>
);

export default Kanji虹;
