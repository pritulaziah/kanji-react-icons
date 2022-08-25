import * as React from "react";
import { SVGProps } from "react";

const Kanji刑 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M15.75 23.39c1.97.8 4.94.48 6.98.23 7.31-.91 21.32-2.67 28.78-3.29 2.18-.18 4.34-.34 6.49.19" />
      <path d="M11.75 50.64c2.16.88 5.4.42 7.65.13 8.6-1.12 26.45-3.44 35.35-4.32 2.4-.24 5.14-.26 7.5.32" />
      <path d="M28.22 25.82c1.23 1.23 1.4 2.69 1.44 4.5.84 40.93-2.53 51.8-14.91 62.93" />
      <path d="M46.25 23.13c.75.75 1.16 2.74 1.16 4.24 0 6.5-.02 41.77-.03 57.13v7" />
      <path d="M71.02 26.33c.98.92 1.76 2.67 1.76 5.02 0 10.52.06 22.4.06 30.65 0 3.5-.08 6.24-.08 7.75" />
      <path d="M90.77 15.83c1.2 1.2 1.76 2.67 1.76 5.02 0 14.56-.01 62.41-.01 67.37 0 8.12-5.52 5.41-9.96.75" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(9.75 24.13)">{"1"}</text>
      <text transform="translate(3.75 51.5)">{"2"}</text>
      <text transform="translate(21.75 34.63)">{"3"}</text>
      <text transform="translate(39.75 33.13)">{"4"}</text>
      <text transform="translate(61.5 29.5)">{"5"}</text>
      <text transform="translate(81.5 17.5)">{"6"}</text>
    </g>
  </svg>
);

export default Kanji刑;
