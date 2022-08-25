import * as React from "react";
import { SVGProps } from "react";

const Kanji甲 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M20.38 21.55c.47.71.48 1.19.73 2.07 2.08 7.24 3.95 26.8 5.18 40.13" />
      <path d="M22.58 23.65C40.5 22 67.42 19.19 79.75 18.48c4.53-.26 7.25 1.27 7.09 4.27-.38 7.14-4.34 33.49-5.17 36.45" />
      <path d="M25.53 41.21c13.29-.87 26.57-1.89 39.86-2.8 1.6-.11 3.15-.21 4.64-.31" />
      <path d="M27.15 60.37c15.6-1.62 37.6-2.62 54.66-3.31" />
      <path d="M52.11 22.44c.89.56 1.44 2.03 1.44 3.81-.03 8.98.3 66.54.3 69.47" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(14.5 30.5)">{"1"}</text>
      <text transform="translate(23.25 20.5)">{"2"}</text>
      <text transform="translate(29.25 37.55)">{"3"}</text>
      <text transform="translate(29.25 55.5)">{"4"}</text>
      <text transform="translate(45.5 30.13)">{"5"}</text>
    </g>
  </svg>
);

export default Kanji甲;
