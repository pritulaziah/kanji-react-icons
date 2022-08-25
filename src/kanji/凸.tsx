import * as React from "react";
import { SVGProps } from "react";

const Kanji凸 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M19.44 50.57c2.2-.13 17.91-1.92 19.92-2.08" />
      <path d="M39.54 18.19c.95.95.98 1.85.98 3.49 0 1.2.05 15.92.08 23.82.01 2.91.02 4.96.02 5.18" />
      <path d="M41.5 19.25c2.5-.25 17.49-2.61 21-3 2.38-.27 3.75.72 3.75 3.12v24.62c0 2.32.67 2.83 2.89 2.68C73.87 46.36 87.27 45 89.25 45" />
      <path d="M18.06 49.63c.9.9 1.01 2.24 1.01 4.25 0 .91 1.25 35.13 1.25 37.25s1.65 2.52 3.15 2.39c15.02-1.27 56.27-3.77 65.02-3.77" />
      <path d="M90.06 43.88c.97.97 1.04 2.62 1.01 3.75-.2 7.99-.97 24.25-1.34 38.36-.07 2.68-.13 5.12-.16 7.14" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(21.75 46.5)">{"1"}</text>
      <text transform="translate(33.75 27.5)">{"2"}</text>
      <text transform="translate(42.75 15.13)">{"3"}</text>
      <text transform="translate(10.5 59.5)">{"4"}</text>
      <text transform="translate(83.25 55.5)">{"5"}</text>
    </g>
  </svg>
);

export default Kanji凸;
