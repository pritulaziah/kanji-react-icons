import * as React from "react";
import { SVGProps } from "react";

const Kanji土 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M26.63 50.89c1.63.4 4.64.6 6.26.4C43.5 50 62.12 48 75.66 46.92c2.71-.22 4.36.19 5.72.39" />
      <path d="M52.17 17.37c1.17 1.17 2.02 3.13 2.02 4.64 0 10.25.14 61.06.14 63.36" />
      <path d="M15.38 87.73c2.12.54 6.01.73 8.12.54C46 86.25 69 84.62 90.34 83.79c3.53-.14 5.65.26 7.41.53" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(19.5 51.13)">{"1"}</text>
      <text transform="translate(41.5 17.5)">{"2"}</text>
      <text transform="translate(6.5 86.5)">{"3"}</text>
    </g>
  </svg>
);

export default Kanji土;
