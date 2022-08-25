import * as React from "react";
import { SVGProps } from "react";

const Kanji以 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M20.87 27.5c1.09.5 2.28 1.72 2.46 3.25C25 45.12 27 61.75 28.25 70.5" />
      <path d="M15.37 77.52c2.25 1.32 3.9.34 6.32-1.32 1.61-1.11 14.59-10.49 21.43-15.82" />
      <path d="M43.62 23.12c4.3 4.16 11.11 17.12 12.18 23.59" />
      <path d="M83.76 21.3c.74 1.58.87 3.04.3 5.25C79.75 43.12 69.5 67.88 46.14 86.4" />
      <path d="M71.52 61.33c8.04 4.26 20.78 17.51 22.79 24.13" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(12.5 29.5)">{"1"}</text>
      <text transform="translate(6.75 81.5)">{"2"}</text>
      <text transform="translate(36.75 23.5)">{"3"}</text>
      <text transform="translate(74.5 20.5)">{"4"}</text>
      <text transform="translate(77.5 62.5)">{"5"}</text>
    </g>
  </svg>
);

export default Kanji以;
