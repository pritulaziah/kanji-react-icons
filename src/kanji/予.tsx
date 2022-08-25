import * as React from "react";
import { SVGProps } from "react";

const Kanji予 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M28.48 15.91c1.77.71 3.56.98 5.28.71 3.39-.53 32.66-4.34 36.24-4.87 3.58-.53 4.81 2.25 2.67 4-3.67 3-17.35 13.82-19.61 15.95" />
      <path d="M43.38 26.38c3.35 1.46 12.01 7.06 13.59 10.88" />
      <path d="M13.92 42.58c1.58.79 4.83 1.17 7.92.92 6.02-.49 59.83-6.04 64.5-6.67 4.52-.6 5.93 1.27 3.18 4.36-3.38 3.81-8.32 8.47-10.76 10.89" />
      <path d="M52.67 43.92C53.94 45.19 55 47 55 48.5c0 2 .08 38.67.08 42.33 0 12.67-7.46 2.54-9.67 0" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(21.5 16.5)">{"1"}</text>
      <text transform="translate(35.5 27.13)">{"2"}</text>
      <text transform="translate(6.75 44.24)">{"3"}</text>
      <text transform="translate(47.5 53.5)">{"4"}</text>
    </g>
  </svg>
);

export default Kanji予;
