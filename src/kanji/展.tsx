import * as React from "react";
import { SVGProps } from "react";

const Kanji展 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M24.5 17.24c1.74.65 3.12 1.24 4.97 1.1 9.98-.73 40.17-4.29 44.18-4.55 1.98-.13 3.27 1.66 2.85 3.57-.75 3.39-1.5 5.14-3.11 10.24" />
      <path d="M29.5 32.25c4.9-.21 28.49-2.74 41.26-3.64 2.23-.16 4.12-.28 5.49-.36" />
      <path d="M27.75 18.75c.75.75 1 2.18.99 3.25C28.5 52.18 24.76 70.23 11 91" />
      <path d="M35.5 48.73c2.62.39 4.65.18 6.76-.09 7.9-1 24.46-2.91 31.74-3.29 1.88-.1 4.12-.23 5.74.06" />
      <path d="M45.62 37.25c.88.88 1.21 2.25 1.21 3.75 0 1.02.05 12.5.28 20" />
      <path d="M64.62 35.75c.88.88 1.06 2.13.96 3.5-.33 4.62-1.08 11-2.08 20" />
      <path d="M29.25 63.06c2.2.69 5.42.42 7.74.21 9.96-.89 32.01-3.65 42.51-4.24 2.28-.13 4.38.07 6.5.33" />
      <path d="M41.43 64.99c.85.85 1.15 2.14 1.15 3.56 0 10.71-.04 16.83-.04 22.37 0 1.81 1.32 2.83 2.67 1.48 1.35-1.36 12.71-10.45 14.52-11.8" />
      <path d="M76.6 65.64c0 .73-.22 1.36-.63 1.88-1.84 2.35-3.96 3.85-7.95 6.69" />
      <path d="M51.86 67.25c4.52.1 21.76 15.17 30.34 21.93 1.66 1.3 5.17 3.82 8.27 5.39" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(27.5 15.5)">{"1"}</text>
      <text transform="translate(35.5 28.55)">{"2"}</text>
      <text transform="translate(20.25 25.5)">{"3"}</text>
      <text transform="translate(33.75 46.63)">{"4"}</text>
      <text transform="translate(37.5 39.5)">{"5"}</text>
      <text transform="translate(55.5 39.5)">{"6"}</text>
      <text transform="translate(31.5 60.13)">{"7"}</text>
      <text transform="translate(35.25 73.5)">{"8"}</text>
      <text transform="translate(67.5 68.5)">{"9"}</text>
      <text transform="translate(48.75 76.63)">{"10"}</text>
    </g>
  </svg>
);

export default Kanji展;
