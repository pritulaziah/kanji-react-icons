import * as React from "react";
import { SVGProps } from "react";

const Kanji件 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M30.76 15.25c.36 1.38.19 2.48-.48 4.24C26 30.67 19.82 42.67 10 56.29" />
      <path d="M24.03 37.25c.86.86 1.25 1.97 1.25 3.37 0 11.19-.02 34.43-.03 47v7.12" />
      <path d="M51.13 20.62c.13.84.01 2.32-.32 3.11-2.93 7.01-7.18 14.64-14.16 23.6" />
      <path d="M47.43 38.11c1.44.27 2.76.21 3.65.13 10.88-1.04 23.17-3.23 34-5.31 1.45-.28 3.92-.55 5.35-.13" />
      <path d="M38.09 60.63c2.51.81 5.33.69 7.91.4 12.76-1.41 33.38-4.16 45.38-4.87 2.59-.15 4.88-.36 7.42.13" />
      <path d="M67.16 11.88c1.17 1.17 1.87 2.87 1.87 4.7 0 .76.01 52.96.01 73.04v7.12" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(21.75 14.5)">{"1"}</text>
      <text transform="translate(17.5 56.5)">{"2"}</text>
      <text transform="translate(42.5 20.5)">{"3"}</text>
      <text transform="translate(53.25 34.63)">{"4"}</text>
      <text transform="translate(35.5 57.5)">{"5"}</text>
      <text transform="translate(57.5 12.5)">{"6"}</text>
    </g>
  </svg>
);

export default Kanji件;
