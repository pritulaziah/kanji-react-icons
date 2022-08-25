import * as React from "react";
import { SVGProps } from "react";

const Kanji朽 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M14.28 37.72c.35.24 2.39.41 3.31.31 3.94-.41 20.12-2.21 26.45-3.41.92-.17 2.15-.24 2.73 0" />
      <path d="M31.36 14.5c.91.47 2.86 3.49 3.04 4.42.18.93-.3 70.73-.3 71.58 0 12.25-6.22 3.62-7.6 2.25" />
      <path d="M33.94 40.28c-6.15 14.49-9.57 20.62-19.08 33.31" />
      <path d="M36.47 44.9C39.71 46.61 45 52.5 47.75 57" />
      <path d="M48.92 26.21c.96.36 2.71.41 3.67.36 10.05-.52 29.54-4.02 40.64-4.01 1.59 0 2.55.17 3.35.36" />
      <path d="M66.56 25.55c1.1.98.8 3.56.22 5.18-2.36 6.52-5.48 11.65-7.99 15.96-1.79 3.07-1.04 4.07 2.93 3.43 4.55-.73 16.39-3.33 22.24-4.16 5.04-.71 5.15 3.34 4.51 6.67C86.25 64.25 82.25 80 75.94 90.55c-4.82 8.06-7.14.84-8.81-1.05" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(6.75 38.5)">{"1"}</text>
      <text transform="translate(23.5 15.5)">{"2"}</text>
      <text transform="translate(22.5 49.5)">{"3"}</text>
      <text transform="translate(42.75 46.63)">{"4"}</text>
      <text transform="translate(46.5 22.63)">{"5"}</text>
      <text transform="translate(56.5 36.5)">{"6"}</text>
    </g>
  </svg>
);

export default Kanji朽;
