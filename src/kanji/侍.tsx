import * as React from "react";
import { SVGProps } from "react";

const Kanji侍 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M33.75 16.39c.13 1.23.22 2.78-.11 4.29-2.14 9.57-11.89 26.82-21.83 39.79" />
      <path d="M26.28 43c.98.98 1.26 2.47 1.26 3.73 0 10.44.06 29.94-.01 41.77-.02 2.93-.03 5.39-.03 7.12" />
      <path d="M42.88 27.28c2.83.54 5.54.37 8.37 0 8.61-1.12 20.47-2.3 29.5-2.82 2.45-.14 4.95-.36 7.37.13" />
      <path d="M63.17 12.12c.86.85 1.52 2.23 1.52 3.75 0 7.76-.07 21.67-.07 25.01" />
      <path d="M37.13 43.97c2.74.79 5.86.33 8.62.02 14.38-1.61 27.63-3.11 41.25-3.94 2.83-.17 5.56-.17 8.38.32" />
      <path d="M38.88 61.24c3.12.51 6.35.53 9.26.15 12.36-1.64 27.56-3.48 38.24-4.15 2.93-.18 5.85-.34 8.75.27" />
      <path d="M77.1 47.06c.86.86 1.4 2.17 1.4 3.81v38.25c0 10.83-6.14 2.51-8.14 1.25" />
      <path d="M51.62 70.12c2.6 1.7 6.73 6.98 7.38 9.62" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(26.25 17.5)">{"1"}</text>
      <text transform="translate(20.5 60.5)">{"2"}</text>
      <text transform="translate(41.5 24.13)">{"3"}</text>
      <text transform="translate(53.25 12.13)">{"4"}</text>
      <text transform="translate(35.5 40.63)">{"5"}</text>
      <text transform="translate(37.5 58.55)">{"6"}</text>
      <text transform="translate(67.5 51.5)">{"7"}</text>
      <text transform="translate(44.25 73.5)">{"8"}</text>
    </g>
  </svg>
);

export default Kanji侍;
