import * as React from "react";
import { SVGProps } from "react";

const Kanji馬 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M28.75 16.5c.46.38.95 2.47.95 3.12 0 6.64.05 35.13-.23 45.58" />
      <path d="M31.03 19.3c11.22-1.3 37.4-4.84 42.22-5.55 1.68-.25 4.53-.53 5.38-.35" />
      <path d="M30.53 34.05c11.22-1.3 35.4-3.84 40.22-4.55 1.68-.25 4.53-.53 5.38-.35" />
      <path d="M30.78 48.05C42 46.75 66.19 44.21 71 43.5c1.68-.25 4.53-.53 5.38-.35" />
      <path d="M29.48 64.28c14.19-2.37 48.3-6.4 56.17-7.27 5.12-.57 7.34 2.58 6.82 6.53C91 74.75 88.7 83.25 84.75 90.25c-5.5 9.75-7.25 5.25-12.45-.05" />
      <path d="M53.13 16.82c.46.38.82.9.82 1.55 0 6.64.05 31.13-.23 41.58" />
      <path d="M17.31 76.25c.44 6-.31 13.25-1.6 17" />
      <path d="M33.5 74.25c2.55 2.65 4.98 9.93 5.62 14.05" />
      <path d="M51 71c2.03 2.22 5.25 9.12 5.76 12.58" />
      <path d="M68.25 67.75c2.74 2.14 7.07 8.78 7.75 12.1" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(22.5 24.13)">{"1"}</text>
      <text transform="translate(32.5 15.5)">{"2"}</text>
      <text transform="translate(33.5 30.5)">{"3"}</text>
      <text transform="translate(33.5 44.5)">{"4"}</text>
      <text transform="translate(33.5 59.5)">{"5"}</text>
      <text transform="translate(46.5 26.5)">{"6"}</text>
      <text transform="translate(11.25 76.5)">{"7"}</text>
      <text transform="translate(27.75 76.5)">{"8"}</text>
      <text transform="translate(44.25 74.5)">{"9"}</text>
      <text transform="translate(59.5 71.5)">{"10"}</text>
    </g>
  </svg>
);

export default Kanji馬;
