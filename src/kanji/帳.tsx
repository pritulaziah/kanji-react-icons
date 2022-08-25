import * as React from "react";
import { SVGProps } from "react";

const Kanji帳 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M11.31 31.22c.35.35 1.09 2.66 1.16 3.37.07.71-.05 27.86-.12 32.3" />
      <path d="M12.78 34.45c2.18-.25 21.59-4.59 23.22-4.75 1.91-.18 2.33 3.13 2.26 4.75-.35 8.15-.77 17.04-2.03 24.96-.31 1.93-1.13 2.73-1.95 1.79-.69-.79-1.11-1.73-1.84-2.97" />
      <path d="M23.69 13.38c.35.35 1.09 2.66 1.16 3.37.07.71-.04 75.94-.11 80.38" />
      <path d="M54.03 17.66c10.47-1.91 19.32-3.42 21.18-3.42 1.45 0 .04.26 2.79.26" />
      <path d="M52.94 15.93c1.09 1.47 1.09 1.72 1.09 3.19s.36 33.89.36 36.1" />
      <path d="M54.58 29.41c10.17-1.41 19.05-2.92 20.9-2.92 1.46 0 1.6-.04 2.73-.01" />
      <path d="M55.48 41.94c6.77-1.19 16.54-2.18 19.63-2.68 1.44-.23 2.63-.2 4.09-.19" />
      <path d="M41.13 55.39c1.1.53 3.13.62 4.23.53 11.49-.89 27.76-5.39 43.43-6.09 1.84-.08 2.95.25 3.87.52" />
      <path d="M50.81 58.37c1.09 1.72 1.01 2.46 1.01 4.91 0 11.61-.33 24.25-.33 26.21 0 1.96 1.2 3.08 2.72 1.61 1.52-1.47 9.86-9.66 11.89-11.13" />
      <path d="M81.22 56.46c.03.27.29 1.27.13 1.62-1.05 2.18-4.32 5.29-9.66 9.63" />
      <path d="M59.85 60.6c6 0 25.22 25.45 32.36 28.99 1.71.85 2.73 1.23 4.54 1.72" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(5.5 41.5)">{"1"}</text>
      <text transform="translate(12.5 29.5)">{"2"}</text>
      <text transform="translate(14.5 14.5)">{"3"}</text>
      <text transform="translate(54.5 14.5)">{"4"}</text>
      <text transform="translate(46.5 24.13)">{"5"}</text>
      <text transform="translate(58.75 26.13)">{"6"}</text>
      <text transform="translate(58.8 38.5)">{"7"}</text>
      <text transform="translate(43.5 52.5)">{"8"}</text>
      <text transform="translate(44.25 67.63)">{"9"}</text>
      <text transform="translate(85.5 60.5)">{"10"}</text>
      <text transform="translate(56.25 70.5)">{"11"}</text>
    </g>
  </svg>
);

export default Kanji帳;
