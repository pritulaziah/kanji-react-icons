import * as React from "react";
import { SVGProps } from "react";

const Kanji兆 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M39.75 18.25c.5.75.88 3.76.88 5.06 0 8.19.06 21.19.06 30.21 0 26.99-6.21 34.15-15.44 42.23" />
      <path d="M58.49 11.87c.74 1.19 1.33 2.59 1.38 4.43.2 8.19-.03 61.64-.03 67.2 0 13 8.9 12.03 17.67 12.03 9.25 0 15.34-1.68 16.64-2.62 2.75-2 2-3 2.25-6.5" />
      <path d="M19 33.75c4.77 2.03 12.31 8.34 13.5 11.5" />
      <path d="M14.75 72.5c1.5.75 3 1 4.14.15C20.47 71.47 31.81 61.69 38 56" />
      <path d="M84.76 23.64c.04.38.09.99-.09 1.54-1.09 3.26-7.33 10.4-15.86 14.78" />
      <path d="M73 56c4.77 2.43 12.31 9.97 13.5 13.75" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(31.5 17.5)">{"1"}</text>
      <text transform="translate(52.5 8.5)">{"2"}</text>
      <text transform="translate(11.5 34.63)">{"3"}</text>
      <text transform="translate(7.5 77.5)">{"4"}</text>
      <text transform="translate(76.5 23.5)">{"5"}</text>
      <text transform="translate(69.5 51.13)">{"6"}</text>
    </g>
  </svg>
);

export default Kanji兆;
