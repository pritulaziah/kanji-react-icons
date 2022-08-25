import * as React from "react";
import { SVGProps } from "react";

const Kanji月 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M34.25 16.75c.75 1 1.25 2 1.5 3s.35 38.5.25 40.75c-.5 10.75-4.5 25.75-11.25 33" />
      <path d="M37.25 18.75c3-.25 30.52-4.47 32.75-4.75 4-.5 5.5 3.25 5 4.75-.48 1.44-.75 49.25-.75 69.5 0 13-6 4.5-8.5 2.25" />
      <path d="M37.25 38c6.15-.9 12.31-1.74 18.47-2.53 1.65-.21 3.29-.42 4.89-.61" />
      <path d="M38 57.75c5.64-.53 11.27-1.22 16.91-1.84 1.63-.18 3.28-.36 4.89-.53" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(28 25.93)">{"1"}</text>
      <text transform="translate(37.5 15.5)">{"2"}</text>
      <text transform="translate(40 33.5)">{"3"}</text>
      <text transform="translate(40 54.5)">{"4"}</text>
    </g>
  </svg>
);

export default Kanji月;
