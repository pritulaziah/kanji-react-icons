import * as React from "react";
import { SVGProps } from "react";

const Kanji油 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M22.38 15.75c3.31 1.47 8.54 6.05 9.37 8.34" />
      <path d="M14.75 37c3.62 1.41 9.34 5.8 10.25 8" />
      <path d="M13.75 88.75c1.96 1.92 4.32 2 5.55-.37 3.59-6.9 7.18-15.33 10.45-24.13" />
      <path d="M42.5 42.83c.38.83.39 1.38.6 2.4 1.7 8.4 1.44 27.51 2.44 42.98" />
      <path d="M44.3 44.1c15.95-2.1 35.69-4.12 45.78-4.94 3.71-.3 5.09 2.13 4.89 4.38-.74 8.25-2.97 27.72-5.3 41.3" />
      <path d="M65.81 16.86c1 1.09 1.59 2.66 1.59 4.1.03 14.16.19 58.88.19 62.58" />
      <path d="M44.92 62.87c10.85-1 21.72-1.84 32.59-2.69 1.31-.1 2.58-.2 3.79-.29" />
      <path d="M46.24 85.11c11.14-.59 30.11-2.3 43.55-2.52" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(14.5 16.5)">{"1"}</text>
      <text transform="translate(6.75 38.5)">{"2"}</text>
      <text transform="translate(6.5 94.63)">{"3"}</text>
      <text transform="translate(35.5 51.13)">{"4"}</text>
      <text transform="translate(44.25 40.5)">{"5"}</text>
      <text transform="translate(55.5 17.5)">{"6"}</text>
      <text transform="translate(49.5 59.5)">{"7"}</text>
      <text transform="translate(49.5 81.13)">{"8"}</text>
    </g>
  </svg>
);

export default Kanji油;
