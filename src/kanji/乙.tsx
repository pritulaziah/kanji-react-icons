import * as React from "react";
import { SVGProps } from "react";

const Kanji乙 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 109 109"
    {...props}
  >
    <path
      d="M19.5 28.25c1.88.62 5.23.87 6.5.75 9.38-.88 28.75-4.62 34.5-5.75 1.98-.39 3.5 1.5 1.25 3.75C48.86 39.89 32.11 63.31 28 70.25c-8 13.5-7.38 19.34 30.5 19.34 27.5 0 28.75-1.84 28.75-11.34"
      style={{
        fill: "none",
        stroke: "#000",
        strokeWidth: 3,
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }}
    />
    <text
      transform="translate(12.25 28.63)"
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      {"1"}
    </text>
  </svg>
);

export default Kanji乙;
