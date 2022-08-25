import * as React from "react";
import { SVGProps } from "react";

const Kanji計 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M29.56 16c2.45 1.59 6.32 6.53 6.94 9" />
      <path d="M12.25 36.16c2.23.34 3.73.33 6 .03C27.13 35 35.26 33.5 43.18 32.5c1.71-.22 4.31-.12 5.17.02" />
      <path d="M21.05 47.19c.7.19 1.67.24 3.19.18 4.09-.2 10.74-1.69 15.14-2.53 1.23-.23 2-.34 3.22-.08" />
      <path d="M21.48 58.42c.76.29 1.77.2 3.19.15 4.1-.15 9.83-.82 14.29-1.76 1.77-.37 3.04-.44 4.22-.1" />
      <path d="M21.8 71.87c.6.6 1.05 1.61 1.18 2.08 1.01 3.46 2.11 9.36 3.29 15.25.23 1.13.45 2.21.66 3.19" />
      <path d="M23.78 72.91c5.91-.99 14.56-2.63 19.69-3.67 2.41-.49 3.79.76 3.33 2.44-.86 3.17-2.19 9.42-2.94 13.34" />
      <path d="M26.57 88.66c4.21-.67 10.05-1.66 16.92-2.46.98-.12 1.88-.32 2.92-.22" />
      <path d="M52.23 47.88c1.45.42 3.71.74 5.93.42 10.6-1.54 24.1-3.67 34.61-4.83 2.23-.25 4.23 0 5.36.28" />
      <path d="M74.16 12.5c1.09 1 1.95 2.5 1.95 4.15 0 4.35.07 55.64-.16 75.6-.04 3.23-.07 5.52-.11 6.5" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(22.5 15.13)">{"1"}</text>
      <text transform="translate(5.5 36.13)">{"2"}</text>
      <text transform="translate(13.5 48.5)">{"3"}</text>
      <text transform="translate(13.5 60.5)">{"4"}</text>
      <text transform="translate(14.5 78.5)">{"5"}</text>
      <text transform="translate(24.75 69.5)">{"6"}</text>
      <text transform="translate(28.5 85.5)">{"7"}</text>
      <text transform="translate(51.5 45.13)">{"8"}</text>
      <text transform="translate(65.5 12.5)">{"9"}</text>
    </g>
  </svg>
);

export default Kanji計;
