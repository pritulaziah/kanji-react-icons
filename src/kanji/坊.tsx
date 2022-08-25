import * as React from "react";
import { SVGProps } from "react";

const Kanji坊 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M13.5 41.14c.76.38 2.24.46 3 .36 4.82-.66 15.15-2.89 20.5-3.5 1.25-.14 2.62-.18 3.25.01" />
      <path d="M26.37 18.5c.88 1.25 1.96 2.73 1.96 3.75 0 7.25.03 33.75.03 44.5" />
      <path d="M13 73.69c.74 1.06 2.21 1.62 4.42.23 6.14-3.88 17.19-10.79 23.33-14.67" />
      <path d="M63.71 12.75c4.56 1.75 9.7 7.59 11.18 11.33" />
      <path d="M45.88 33.14c1.62.36 3.45.66 4.77.52 10.66-1.1 29.45-4.17 43.93-4.93 2.23-.12 2.38.04 4.04.67" />
      <path d="M66.36 45.83C72.5 48 79.25 50.5 84.95 51.41c3.23.52 4.48 1.67 3.97 4.15-1.42 6.94-11.19 29.97-15.25 35.39-4.4 5.88-7.35-.23-8.66-1.02" />
      <path d="M68.06 35.25c.45 1.43.36 3.04-.17 4.64-3.73 11.08-14.49 33.46-31.22 43.94" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(7.5 42.5)">{"1"}</text>
      <text transform="translate(15.75 19.63)">{"2"}</text>
      <text transform="translate(6.5 79.5)">{"3"}</text>
      <text transform="translate(57.5 13.5)">{"4"}</text>
      <text transform="translate(43.5 30.5)">{"5"}</text>
      <text transform="translate(73.5 45.5)">{"6"}</text>
      <text transform="translate(60.5 42.5)">{"7"}</text>
    </g>
  </svg>
);

export default Kanji坊;
