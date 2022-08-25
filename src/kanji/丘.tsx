import * as React from "react";
import { SVGProps } from "react";

const Kanji丘 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M58.26 15.25c.09.68-.11 1.74-.68 2.47-7.2 9.28-15.7 15.9-32.83 25.03" />
      <path d="M29.18 44.13c1.1 1.1 1.87 2.64 2.02 4.65.55 7.47 2.9 31.48 3.55 38.72" />
      <path d="M32.28 50.31c9-1.21 30.48-3.41 42.97-5.08 2.85-.38 6-.61 8.75-.38" />
      <path d="M69.37 49.8c.75 1.33.95 2.93.82 4.26-1.07 11.06-1.7 16.69-3.2 31.19" />
      <path d="M14.75 88.2c3.2 1.14 7.18.86 10.5.52 13.5-1.35 42.88-3.22 59.63-3.64 3.62-.09 7.31-.05 10.88.71" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(49.5 15.13)">{"1"}</text>
      <text transform="translate(23.5 53.5)">{"2"}</text>
      <text transform="translate(37.5 46.5)">{"3"}</text>
      <text transform="translate(61.5 57.5)">{"4"}</text>
      <text transform="translate(14.5 85.5)">{"5"}</text>
    </g>
  </svg>
);

export default Kanji丘;
