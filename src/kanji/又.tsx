import * as React from "react";
import { SVGProps } from "react";

const Kanji又 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M27.5 26c2 .5 4.5.75 8.5 0s31.75-6.75 34.5-7.5 5.06 2.02 4 4.75c-12.12 31.25-31.12 57-58 71.75" />
      <path d="M24.5 39c5.89 1.13 30.77 27.42 52.7 43.57 4.77 3.52 9.71 7.1 15.3 9.18" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(20.5 26.5)">{"1"}</text>
      <text transform="translate(17.5 41.5)">{"2"}</text>
    </g>
  </svg>
);

export default Kanji又;
