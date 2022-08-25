import * as React from "react";
import { SVGProps } from "react";

const Kanji析 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M13.28 38.72c.35.24 2.39.41 3.31.31 3.94-.41 22.12-3.21 28.45-4.41.92-.17 2.15-.24 2.73 0" />
      <path d="M31.86 13.5c.91.47 2.54 2.25 2.54 4.42 0 5.83-.3 73.23-.3 74.08 0 10.5-5.1 3.25-6.85 1.5" />
      <path d="M33.94 36.28C28.5 52.75 24 62 13.11 75.34" />
      <path d="M36.47 44.9c2.73 1.71 7.22 7.28 9.53 10.6" />
      <path d="M80.24 13.5c.06.37.27 1.08-.13 1.47-5.46 5.37-12.44 9.44-23.95 14.07" />
      <path d="M54.32 28.94c1.32 1.85 1.3 3.62 1.3 5.64 0 18.76 1.72 36.74-12.67 53.9" />
      <path d="M58.33 45.69c.44.2 2.66-.16 3.83-.39 6.43-1.23 22.09-4.05 31.27-6.09 1.15-.26 3.21-.19 3.94 0" />
      <path d="M78.6 45.32c.95.62 1.52 2.78 1.7 4.02.19 1.24 0 40.69-.19 48.41" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(6.5 39.5)">{"1"}</text>
      <text transform="translate(22.5 14.5)">{"2"}</text>
      <text transform="translate(22.5 49.5)">{"3"}</text>
      <text transform="translate(41.5 45.5)">{"4"}</text>
      <text transform="translate(70.5 13.5)">{"5"}</text>
      <text transform="translate(45.5 28.5)">{"6"}</text>
      <text transform="translate(61.5 41.5)">{"7"}</text>
      <text transform="translate(72.5 53.5)">{"8"}</text>
    </g>
  </svg>
);

export default Kanji析;
