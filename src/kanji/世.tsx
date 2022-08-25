import * as React from "react";
import { SVGProps } from "react";

const Kanji世 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M11.25 47.7c2.75.68 7.22.76 9.77.54 20.36-1.74 48.36-4.37 69.57-4.98 4.24-.12 6.79.26 8.92.53" />
      <path d="M53.37 17.5c.94.94 1.4 2.48 1.46 3.5.14 2.54.69 31.98.8 44.88.02 2.36.02 4.16-.02 5.12" />
      <path d="M77.37 15.5c.82.81 1.5 2.23 1.46 3.25-.18 5.03-2.39 44.69-2.47 46" />
      <path d="M56.25 67c4.07-.2 13.17-.95 19.13-1.31 1.55-.09 2.89-.16 3.87-.19" />
      <path d="M29.87 23.75c.94.94 1.46 2.48 1.46 3.5.05 18.88-.95 41.12-1.83 56.5-.21 3.75.38 6.66 3.75 6.25 20.75-2.5 34-3.88 51-3.25 3.26.12 6 .75 7.25 1" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(5.25 48.13)">{"1"}</text>
      <text transform="translate(43.5 18.5)">{"2"}</text>
      <text transform="translate(67.5 15.5)">{"3"}</text>
      <text transform="translate(59.5 63.5)">{"4"}</text>
      <text transform="translate(21.5 23.5)">{"5"}</text>
    </g>
  </svg>
);

export default Kanji世;
