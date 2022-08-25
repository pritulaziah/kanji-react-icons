import * as React from "react";
import { SVGProps } from "react";

const Kanji片 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M32.9 17.47c1.07 1.07 1.5 2.75 1.5 4.34 0 50.45-8.15 60.7-19.9 71.45" />
      <path d="M62.54 12.75c.92.92 1.37 2.12 1.37 4.02 0 3.9-.04 16.18-.04 19.73" />
      <path d="M35.35 41.27c10.77-1.02 30.16-3.55 42.52-5.43 2.69-.41 5.75-.84 8.13-.59" />
      <path d="M34.94 62.07c2.68.18 4.85.19 7.41-.2 10-1.54 22.53-3.81 26.5-4.63 2.39-.49 4.61.76 4.61 3.22 0 5.54-.15 23.54-.15 28.29 0 4.48-.07 5.65-.07 8.5" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(24.5 18.5)">{"1"}</text>
      <text transform="translate(53.5 13.5)">{"2"}</text>
      <text transform="translate(39.5 37.63)">{"3"}</text>
      <text transform="translate(39.5 58.55)">{"4"}</text>
    </g>
  </svg>
);

export default Kanji片;
