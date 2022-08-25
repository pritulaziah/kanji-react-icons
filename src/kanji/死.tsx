import * as React from "react";
import { SVGProps } from "react";

const Kanji死 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M20 21.65c3.12.85 7.11.51 10.1.17 11.81-1.33 32.15-3.45 44.16-4.75 2.97-.32 6.29-.34 9.25.3" />
      <path d="M32.12 30.14c.17.46.28 1.84.09 2.76-1.12 5.43-7.95 17.17-16.71 24.47" />
      <path d="M33.56 39.91c1.42.23 2.67.08 4.09-.16 3.37-.56 6.77-1.41 9.11-2.26 2.59-.95 4.33.54 3.39 3.44C45.5 55.12 33.75 79.75 13.25 93" />
      <path d="M26.39 54.21c3.33 1.86 8.59 7.64 9.42 10.53" />
      <path d="M88.4 38.11c.09 1.12-.15 1.85-1.08 2.92-3.58 4.14-10.93 9.93-20.81 13.62" />
      <path d="M61.65 28.75c1.36 1.36 1.68 3.25 1.68 4.93 0 1.32-.03 44.39-.03 48.48 0 8.46.95 10.86 15.75 10.86 13.57 0 14.68-1.65 14.68-12.52" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(13.5 22.63)">{"1"}</text>
      <text transform="translate(23.5 34.63)">{"2"}</text>
      <text transform="translate(39.75 35.5)">{"3"}</text>
      <text transform="translate(29.5 53.5)">{"4"}</text>
      <text transform="translate(79.5 38.5)">{"5"}</text>
      <text transform="translate(53.5 30.5)">{"6"}</text>
    </g>
  </svg>
);

export default Kanji死;
