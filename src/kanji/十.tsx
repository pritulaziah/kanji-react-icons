import * as React from "react";
import { SVGProps } from "react";

const Kanji十 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M11.88 50.98c3.18.89 6.62.61 9.87.35 19.92-1.58 45.23-4.76 63.38-5.82 3.85-.23 7.23-.07 11 .56" />
      <path d="M52.22 11.63c1.4 1.4 2.2 3.96 2.2 6.26 0 1.13-.03 51.22-.19 73.41-.03 3.96-.06 6.83-.08 8.08" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(5.5 52.5)">{"1"}</text>
      <text transform="translate(42.75 12.5)">{"2"}</text>
    </g>
  </svg>
);

export default Kanji十;
