import * as React from "react";
import { SVGProps } from "react";

const Kanji刊 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M17.79 26.53c.65.39 2.91.42 3.56.35 4.52-.46 18.29-2.86 26.01-3.63 1.09-.11 3.37.34 3.92.53" />
      <path d="M11.79 48.97c1.06.42 3 .58 4.05.42C28.5 47.5 41.5 45.75 53.26 44.5c1.75-.19 2.82.2 3.7.41" />
      <path d="M34.1 26.58c.38.47 1.24 3.5 1.24 4.44 0 31.98.16 49.73-8.62 62.36" />
      <path d="M65.27 32.83c.98.92 1.67 1.99 1.76 5.02.39 14.56-.03 24.69-.03 29.65" />
      <path d="M87.27 16.83c.98.92 1.67 1.99 1.76 5.02.4 14.55-.26 60.66-.26 65.62 0 15.53-6.21 3.5-7.71 2.25" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(11.5 27.13)">{"1"}</text>
      <text transform="translate(4.5 49.5)">{"2"}</text>
      <text transform="translate(27.5 37.63)">{"3"}</text>
      <text transform="translate(57.5 32.5)">{"4"}</text>
      <text transform="translate(77.5 17.5)">{"5"}</text>
    </g>
  </svg>
);

export default Kanji刊;
