import * as React from "react";
import { SVGProps } from "react";

const Kanji吉 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M13.25 34.5c4.12.63 7.66.79 11.12.3 19.88-2.8 43.24-4.17 61.5-5.43 3.55-.25 7.36-.42 10.89.18" />
      <path d="M52.98 12.01c1.01 1.01 1.26 2.62 1.26 4.14 0 6.35-.11 22.78-.11 35.48" />
      <path d="M26.9 54.88c2.36.65 5.25.36 7.62.09 11.87-1.36 24.73-3.09 38.1-3.94 2.47-.16 4.67.1 7.11.46" />
      <path d="M31 68.85c.76.76 1.68 2.38 1.95 3.59 1.3 5.8 2.47 12.33 3.55 19.27.29 1.85.55 3.63.78 5.25" />
      <path d="M33.14 70.46c11.27-1.34 32.91-3.42 41.22-4.25 3.61-.36 6.07 1.2 4.91 4.95-2.03 6.59-2.9 10.09-5.61 18.61" />
      <path d="M37.79 93.63c6.11-.61 22.14-1.98 32.71-2.87 2.37-.2 4.51-.38 6.25-.51" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(5.5 36.13)">{"1"}</text>
      <text transform="translate(43.5 12.5)">{"2"}</text>
      <text transform="translate(18.75 56.5)">{"3"}</text>
      <text transform="translate(24.75 77.5)">{"4"}</text>
      <text transform="translate(33.5 67.5)">{"5"}</text>
      <text transform="translate(40.5 90.5)">{"6"}</text>
    </g>
  </svg>
);

export default Kanji吉;
