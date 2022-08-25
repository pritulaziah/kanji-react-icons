import * as React from "react";
import { SVGProps } from "react";

const Kanji冶 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M18.92 22.75c4.56 1.97 11.78 8.1 12.92 11.16" />
      <path d="M14.23 84.74c1.77 1.01 3.1.25 4.24-1.5 6-9.21 7.78-12.37 13.3-22.08" />
      <path d="M65.73 15.75c.4 1.5.4 3.08-.71 4.92-5.52 9.2-11.27 18.58-16.9 26.6-2.77 3.96-2.26 4.69 2.17 3.79 11.46-2.32 20.61-4.13 36.21-7.2" />
      <path d="M79.21 32.57C84.43 36.04 92.7 46.83 94 52.22" />
      <path d="M48.25 63.88c.94.94 1.5 2.12 1.73 3.76.96 6.75 1.66 13.47 2.38 19.74.2 1.75.4 3.46.61 5.12" />
      <path d="M50.51 66.04c13.24-1.67 25.03-2.63 32.73-3.56 3.59-.44 5.88 1.01 4.9 4.78-1.62 6.23-2.81 11.98-4.41 19.77" />
      <path d="M54.42 90.08c8.28-.55 16.35-1.12 26.45-1.71 1.87-.11 3.81-.22 5.83-.33" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(12.25 23.25)">{"1"}</text>
      <text transform="translate(5.25 87.25)">{"2"}</text>
      <text transform="translate(57.25 15.25)">{"3"}</text>
      <text transform="translate(73.25 30.25)">{"4"}</text>
      <text transform="translate(42.25 72.25)">{"5"}</text>
      <text transform="translate(54.25 62)">{"6"}</text>
      <text transform="translate(57 87.25)">{"7"}</text>
    </g>
  </svg>
);

export default Kanji冶;
