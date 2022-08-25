import * as React from "react";
import { SVGProps } from "react";

const Kanji欧 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M11.15 25.74c1.69.83 3.82.49 5.6.31 9.53-.95 17.62-1.92 25.64-2.82 2.06-.23 4.48-.48 6.34-.36" />
      <path d="M42.2 32.54c.35 1.07.18 2.4-.33 4.29C38 51.25 31.75 65 20.76 76.17" />
      <path d="M21.68 44.54C30.5 50.25 40.5 62.25 45.83 72.7" />
      <path d="M12.43 26.76c.91.91 1.25 1.99 1.25 3.49V84c0 2.75 1.07 4 3.55 3.67 7.65-1.02 24.12-3.21 26.07-3.21 2.12 0 3.92-.29 5.23.13" />
      <path d="M63.07 15.25c.18 1 .23 2.17-.09 3.34C60.75 26.75 55.25 38.5 47 50" />
      <path d="M57.47 39.49c1.01.36 2.91.18 4.43-.14 1.85-.39 22.12-5.71 25.6-6.54 6.99-1.68 1.49 6.44-4.88 12.94" />
      <path d="M67.04 45c.46 1.25.63 3.13.37 4.9-2.29 15.35-8.91 36.72-23.91 47.35" />
      <path d="M65.5 63c4.63 5.16 14.5 17.25 22.78 25.72 2.41 2.47 4.85 4.28 6.97 5.78" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(14.5 23.5)">{"1"}</text>
      <text transform="translate(34.5 35.5)">{"2"}</text>
      <text transform="translate(18.75 40.5)">{"3"}</text>
      <text transform="translate(6.5 34.63)">{"4"}</text>
      <text transform="translate(54.5 16.5)">{"5"}</text>
      <text transform="translate(63.75 35.5)">{"6"}</text>
      <text transform="translate(59.5 50.5)">{"7"}</text>
      <text transform="translate(71.5 66.5)">{"8"}</text>
    </g>
  </svg>
);

export default Kanji欧;
