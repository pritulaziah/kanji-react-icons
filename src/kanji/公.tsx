import * as React from "react";
import { SVGProps } from "react";

const Kanji公 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M38 21.5c.25 1.38-.17 2.77-.71 3.88C33.47 33.1 27.75 43 16 51.75" />
      <path d="M56.25 16c4.5.38 22.38 23.62 30.89 30.49 3.19 2.57 4.86 2.89 7.61 4.01" />
      <path d="M50.8 49.5c.45 1.5.38 3.04-.77 5.05-6.41 11.2-10.79 17.7-20.09 29.36-2.27 2.84-1.45 5.66 2.18 4.58C42.25 85.5 60 81.12 73.25 78.25" />
      <path d="M65.88 67.5c5.43 4.46 14.02 18.32 15.38 25.25" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(29.5 21.5)">{"1"}</text>
      <text transform="translate(49.5 16.5)">{"2"}</text>
      <text transform="translate(42.5 48.13)">{"3"}</text>
      <text transform="translate(63.5 63.5)">{"4"}</text>
    </g>
  </svg>
);

export default Kanji公;
