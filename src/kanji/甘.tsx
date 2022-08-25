import * as React from "react";
import { SVGProps } from "react";

const Kanji甘 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M13.75 39.7c1.52.54 4.31.68 5.82.54 11.18-.99 51.68-5.49 69.61-5.73 2.53-.03 4.05.26 5.31.53" />
      <path d="M34.37 19.75c1.09.5 1.74 2.25 1.96 3.25.22 1 0 66.75-.22 73" />
      <path d="M70.37 14.25c1.09.5 1.74 2.25 1.96 3.25.22 1 0 71.25-.22 77.5" />
      <path d="M37 61.75c5.85-.69 11.73-1.16 17.59-1.69l5.62-.5" />
      <path d="M37 89.75c6.5-.25 28-1.75 34-2" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(7.5 40.63)">{"1"}</text>
      <text transform="translate(24.75 20.5)">{"2"}</text>
      <text transform="translate(60.75 15.13)">{"3"}</text>
      <text transform="translate(41.5 58.5)">{"4"}</text>
      <text transform="translate(41.5 86.5)">{"5"}</text>
    </g>
  </svg>
);

export default Kanji甘;
