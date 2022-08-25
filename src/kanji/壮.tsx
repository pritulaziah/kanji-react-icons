import * as React from "react";
import { SVGProps } from "react";

const Kanji壮 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M34.12 16.25c1.19 1.19 1.46 3 1.46 4.5 0 .65.04 45.06.04 65 0 5.58 0 9.25-.01 9.5" />
      <path d="M13.88 30.25C17.9 32.68 24.25 40.23 25.26 44" />
      <path d="M12.5 76.3c1.88.95 3.08.2 4.34-.76 3.66-2.8 7.33-6.22 10.66-9.78" />
      <path d="M44.63 46.23c2.12.65 5.24.48 7.25.18 11.12-1.65 26.75-3.78 38.5-4.62 1.96-.14 4.25-.15 6.25.29" />
      <path d="M69 17.25c1.19 1.19 1.75 2.75 1.75 4.75v60.5" />
      <path d="M47.5 83.75c2.88.75 4.73.7 7.25.46 10.56-1 22.05-2.24 33.26-2.41 2.12-.03 4.53.11 6.61.59" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(24.75 15.5)">{"1"}</text>
      <text transform="translate(6.5 30.5)">{"2"}</text>
      <text transform="translate(5.25 79.5)">{"3"}</text>
      <text transform="translate(43.25 43.13)">{"4"}</text>
      <text transform="translate(59.5 17.5)">{"5"}</text>
      <text transform="translate(45.5 80.5)">{"6"}</text>
    </g>
  </svg>
);

export default Kanji壮;
