import * as React from "react";
import { SVGProps } from "react";

const Kanji泊 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M22.63 15c4.45 1.69 11.5 6.96 12.62 9.59" />
      <path d="M17.25 39.5C21.93 41 29.33 45.67 30.5 48" />
      <path d="M17.25 86.73c1.71 1.27 3.78 1.32 4.86-.25 3.14-4.57 6.29-10.16 9.14-15.99" />
      <path d="M68.12 15c.53.92.72 2.09.48 2.84-1.73 5.57-7.12 16.03-12.92 22.37" />
      <path d="M46.69 41.91c.68 1.28 1.37 3.42 1.37 5.13s.22 36.21.22 46.46" />
      <path d="M48.47 44.43c3.85-.21 33.95-3.46 37.45-3.83 2.23-.23 3.13 1.4 3.13 4.1-.01 4.6-.61 33.4-1.34 47.51" />
      <path d="M48.42 66.4c6.99-.56 13.96-1.33 20.94-1.99 2.08-.2 4.14-.39 6.11-.57" />
      <path d="M49.19 90.72c9.66-.69 27.99-2.33 38.29-2.64" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(17.25 16.63)">{"1"}</text>
      <text transform="translate(9.75 40.5)">{"2"}</text>
      <text transform="translate(9.75 92.98)">{"3"}</text>
      <text transform="translate(60.5 15.5)">{"4"}</text>
      <text transform="translate(40.5 51.13)">{"5"}</text>
      <text transform="translate(49.5 39.5)">{"6"}</text>
      <text transform="translate(52.5 62.5)">{"7"}</text>
      <text transform="translate(52.46 87.5)">{"8"}</text>
    </g>
  </svg>
);

export default Kanji泊;
