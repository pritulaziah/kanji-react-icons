import * as React from "react";
import { SVGProps } from "react";

const Kanji代 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M29.76 22.5c.21 1.94-.06 4.48-.74 6.15-4.36 10.6-8.54 20.07-18.52 32.98" />
      <path d="M24.38 45c1.25 1.25 1.76 3.12 1.76 4.48 0 10.42-.02 28.67-.02 39.27V95" />
      <path d="M39.49 44.11c2.64.64 5.3.4 7.92-.19 7.24-1.62 22.53-6.21 33.48-8.44 2.26-.46 4.98-.86 7.31-.31" />
      <path d="M53.19 13.5c1.94 1.7 2.83 3.16 3.15 6.82C58.75 48.12 70 79.88 91.96 92.8c7.28 4.29 6.29.98 5.32-6.54" />
      <path d="M71.75 15.38c3.44 1.47 8.94 4.82 10.55 7.33" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(21.75 23.5)">{"1"}</text>
      <text transform="translate(18.75 61.5)">{"2"}</text>
      <text transform="translate(38.5 41.5)">{"3"}</text>
      <text transform="translate(44.5 14.5)">{"4"}</text>
      <text transform="translate(65.5 13.5)">{"5"}</text>
    </g>
  </svg>
);

export default Kanji代;
