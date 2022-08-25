import * as React from "react";
import { SVGProps } from "react";

const Kanji研 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M15 27.6c1.9.56 3.83.35 5.76.08 4.66-.65 13.54-1.85 18.62-2.48 2.04-.26 3.83-.31 5.87.05" />
      <path d="M26.03 30.15c.35.85.43 2.07.17 3.34-1.58 7.89-6.35 24.16-13.45 34.33" />
      <path d="M22.06 54.26c1.09 1.09 1.25 2.13 1.4 3.62.48 4.96 1.01 12.05 1.75 20 .11 1.14.22 2.29.33 3.46" />
      <path d="M24.23 55.9c5.01-.91 11.75-2.58 16.02-3.29 2.72-.45 3.82 1.03 3.34 3.83C42.87 60.6 42 64.25 41 73" />
      <path d="M26.25 76c3.38-.5 8.87-1.69 13.89-2.39 1.36-.19 2.6-.32 3.61-.36" />
      <path d="M52 20.89c2.25.61 4.46.37 6.38.18 6.76-.67 19.24-2.07 27.87-2.91 1.83-.18 3.71-.09 5.5.35" />
      <path d="M48.5 47.64c3.25.36 4.86.49 7.5.21 9.25-.97 26.75-2.72 36.25-3.38 2.31-.16 4.73-.26 7 .29" />
      <path d="M61.5 23.5c.94.94 1.45 2.25 1.5 3.75 1.12 33.75-2.38 52.62-14.75 63.5" />
      <path d="M80.65 21.25c.9.9 1.2 2.4 1.2 3.59v70.41" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(8.5 28.5)">{"1"}</text>
      <text transform="translate(18.5 37.5)">{"2"}</text>
      <text transform="translate(17.5 70.5)">{"3"}</text>
      <text transform="translate(26.5 52.5)">{"4"}</text>
      <text transform="translate(29.25 72.5)">{"5"}</text>
      <text transform="translate(48.5 18.5)">{"6"}</text>
      <text transform="translate(43.5 46.5)">{"7"}</text>
      <text transform="translate(55.5 32.5)">{"8"}</text>
      <text transform="translate(74.5 29.5)">{"9"}</text>
    </g>
  </svg>
);

export default Kanji研;
