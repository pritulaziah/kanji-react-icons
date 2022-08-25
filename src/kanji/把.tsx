import * as React from "react";
import { SVGProps } from "react";

const Kanji把 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M14.75 38.17c2.08.25 3.27.3 5.5 0 4.72-.64 10.77-1.78 18.75-2.89 1.31-.18 2.75-.4 4.16-.27" />
      <path d="M29.27 14.25c1.18 1.18 1.51 2.75 1.51 5.02 0 15.23-.01 55.71-.01 67.15 0 14.25-6.32 3.53-7.77 2" />
      <path d="M13.5 68.18c1.12 1.2 2.12 1.07 4-.18 5.01-3.34 9.5-6.5 20.75-14.58" />
      <path d="M50.71 25.87c1.17.88 3.24.75 4.54.59 8.88-1.09 25.58-3.1 32.45-3.69 3.18-.28 4.68 1.85 4.44 3.88-.79 6.62-1.22 12.11-2.55 20.14-.25 1.48-.52 3.04-.83 4.72" />
      <path d="M69.95 26.6c.91.91 1 1.89.92 3.44-.37 6.71-.62 13.83-.85 18.89" />
      <path d="M54.24 51.77c6.38-.54 27.18-2.24 33.38-2.52" />
      <path d="M52.03 27.3c.77.77 1.03 1.82 1.03 3.41 0 8.63-.03 32.57-.03 38.4 0 19.94 1.47 20.68 21.02 20.68 20.21 0 20.53-1.92 20.53-12.42" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(8.5 38.5)">{"1"}</text>
      <text transform="translate(20.5 15.13)">{"2"}</text>
      <text transform="translate(5.5 72.5)">{"3"}</text>
      <text transform="translate(54.75 23.5)">{"4"}</text>
      <text transform="translate(63.75 34.5)">{"5"}</text>
      <text transform="translate(57.75 48.05)">{"6"}</text>
      <text transform="translate(45.75 33.5)">{"7"}</text>
    </g>
  </svg>
);

export default Kanji把;
