import * as React from "react";
import { SVGProps } from "react";

const Kanji払 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M14.5 38.17c1.88.58 3.51.74 5.75.5 5.12-.54 14.96-2.42 23.76-4.08 1.54-.29 2.74-.33 4.41-.33" />
      <path d="M34.02 15.25c1.24 1.24 1.51 2.75 1.51 4.77 0 15.23-.01 54.46-.01 65.9 0 14.25-6.32 3.53-7.77 2" />
      <path d="M14 73.18c1.5.7 2.62.45 4.25-.68 4.95-3.43 14.5-10.67 27.5-20.5" />
      <path d="M73.21 26c.55 1.17.41 2.53-.09 3.99-5.49 16.14-13.49 36.26-20.73 51.78-2.04 4.38-1.57 4.72 2.59 3.46 9.77-2.98 21.02-6.1 35.27-10.6" />
      <path d="M83.2 60.03c4.67 4.93 12.06 20.27 13.23 27.94" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(8.5 39.13)">{"1"}</text>
      <text transform="translate(25.5 15.13)">{"2"}</text>
      <text transform="translate(5.5 77.5)">{"3"}</text>
      <text transform="translate(65.5 25.63)">{"4"}</text>
      <text transform="translate(75.75 60.5)">{"5"}</text>
    </g>
  </svg>
);

export default Kanji払;
