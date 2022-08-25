import * as React from "react";
import { SVGProps } from "react";

const Kanji充 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M48.01 12.75c3.83 1.6 8.36 6.46 10.12 10.96" />
      <path d="M19.85 31.68c1.23.09 4.05.6 5.25.48 9.69-1 45.64-4.68 59.46-5.37 2.03-.1 3.07.04 4.59.61" />
      <path d="M50.95 31.95c.05 1.05.15 2.6-.31 3.19-4.89 6.35-9.89 12.35-15.37 16.39-2.5 1.84-2.45 3.95 1.14 3.38 8.76-1.38 23.41-4.5 35.6-6.83" />
      <path d="M63.71 39.18C69 42.01 77.37 50.83 78.69 55.24" />
      <path d="M43.73 62.83c.07.82.14 2.12-.13 3.3-1.61 6.96-10.08 23.56-23.46 31.59" />
      <path d="M60.29 57.26c.68 1.27 1.22 2.76 1.26 4.72.18 8.72-.48 17.2-.48 23.13 0 13.85 8.12 12.29 16.12 12.29 8.44 0 14-1.79 15.18-2.8 2.51-2.13 1.83-3.2 2.05-6.92" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(42.5 13)">{"1"}</text>
      <text transform="translate(11.5 32.5)">{"2"}</text>
      <text transform="translate(38.5 39.5)">{"3"}</text>
      <text transform="translate(54.75 41.5)">{"4"}</text>
      <text transform="translate(35.5 65.5)">{"5"}</text>
      <text transform="translate(51.5 61.5)">{"6"}</text>
    </g>
  </svg>
);

export default Kanji充;
