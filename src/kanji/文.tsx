import * as React from "react";
import { SVGProps } from "react";

const Kanji文 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M45.78 12.5c4.52 1.76 11.07 8.59 11.93 12.02" />
      <path d="M17.5 32.97c1.27.1 3.66.6 4.9.54 10.35-.51 49.98-6.31 63.53-6.6 2.09-.04 3.16.05 4.72.69" />
      <path d="M69.89 33.25c.65 1.34 1.23 2.29.32 4.77-8.31 22.6-29.18 46.01-51.46 55.73" />
      <path d="M33.5 44.5c14.3 11.21 34.74 32.34 51.7 44.04 3.19 2.2 5.54 2.16 8.3 2.36" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(41.25 13.5)">{"1"}</text>
      <text transform="translate(8.5 33.5)">{"2"}</text>
      <text transform="translate(61.5 38.5)">{"3"}</text>
      <text transform="translate(25.5 46.5)">{"4"}</text>
    </g>
  </svg>
);

export default Kanji文;
