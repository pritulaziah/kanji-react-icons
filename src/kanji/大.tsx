import * as React from "react";
import { SVGProps } from "react";

const Kanji大 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M19.38 48.25c1.49.51 5.03.89 7.6.49C41.12 46.5 63 43 77.19 42.44c2.7-.11 4.87-.06 7.31.33" />
      <path d="M49.5 18c.88 2.12 1.03 4.16.99 6.32C50 57 37.75 81.12 18 91.75" />
      <path d="M49.5 46c9 10.5 28.5 36.25 37.49 43.28 3.06 2.39 5.62 3.75 7.01 3.97" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(12.75 49.63)">{"1"}</text>
      <text transform="translate(40.5 18.5)">{"2"}</text>
      <text transform="translate(61.5 55.63)">{"3"}</text>
    </g>
  </svg>
);

export default Kanji大;
