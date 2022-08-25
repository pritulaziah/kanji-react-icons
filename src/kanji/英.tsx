import * as React from "react";
import { SVGProps } from "react";

const Kanji英 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M21.5 25.77c1.29.53 2.8.63 4.1.53 11.9-.96 44.4-3.46 58.12-3.53 2.16-.01 3.45.25 4.53.51" />
      <path d="M37 14c1.54 1.4 2.03 1.83 2.2 2.69 1.54 8.07 2.86 15.88 3.3 18.81" />
      <path d="M68.46 11.75c.29 1.09.66 1.9.34 3.25-1.89 7.89-2.75 11.83-4.81 19.25" />
      <path d="M32.32 45.03c1.06.93 1.2 1.65 1.35 2.78 1.08 7.94 1.82 16.13 2.09 17.43" />
      <path d="M34.78 46.34c3.6-.37 33.02-4.12 37.89-4.68s4.82.84 4.79 3.93c-.02 1.74-3.18 14.78-3.6 16.84" />
      <path d="M18.05 66.13c.82.33 2.92.54 3.82.46 12.37-1.1 46.26-3.22 66.16-4.47 1.13-.07 2.75.13 5.29.69" />
      <path d="M53.05 33.5c.7.5 1.18 1.82 1.18 3.65 0 38.26-10.04 47.43-31.42 58.1" />
      <path d="M58.26 69.43C68.75 76.75 76.5 85.5 84.31 94.9" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(14.5 27.13)">{"1"}</text>
      <text transform="translate(28.5 15.5)">{"2"}</text>
      <text transform="translate(58.5 13.5)">{"3"}</text>
      <text transform="translate(25.99 52.41)">{"4"}</text>
      <text transform="translate(35.25 42.13)">{"5"}</text>
      <text transform="translate(11.25 67.63)">{"6"}</text>
      <text transform="translate(56.5 32.5)">{"7"}</text>
      <text transform="translate(68.5 73.5)">{"8"}</text>
    </g>
  </svg>
);

export default Kanji英;
