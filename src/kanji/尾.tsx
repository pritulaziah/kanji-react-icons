import * as React from "react";
import { SVGProps } from "react";

const Kanji尾 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M26.48 17c1.66.75 4.14.92 5.9.77 8.4-.74 30.78-3.01 38.62-3.68 3.29-.28 5.62 1.41 5.1 4.19-.75 3.96-1.71 6.64-2.59 9.97" />
      <path d="M30.63 33.25c3.73-.2 25.62-2.43 37.6-3.63 3.35-.33 6.14-.32 7.23-.37" />
      <path d="M28.8 18.25c.98.98 1.11 2.38 1.08 3.88-.5 23.12-4.25 51-18.38 65.62" />
      <path d="M67.21 37.75c-.21.88-.64 1.43-1.33 1.94-3.33 2.46-13.38 6.81-27.17 10.16" />
      <path d="M34.87 60.88c2.38.75 6.23.31 8.4-.14 9.18-1.92 19.9-3.99 27.84-5.03 2.1-.28 4.41-.59 6.46.18" />
      <path d="M29.53 75.23c2.1.83 5.81.41 7.96.03C50.25 73 64.5 70.25 78.63 68.77c2.17-.23 4.71-.61 6.87-.09" />
      <path d="M52.77 48.12c.93.93 1.27 2.3 1.29 3.58.12 5.69-.06 26.05-.06 29.55 0 10.96 1.38 12.05 18.03 12.05 15.1 0 16.82-1.68 16.82-7.94" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(27.5 14.5)">{"1"}</text>
      <text transform="translate(35.25 29.5)">{"2"}</text>
      <text transform="translate(22.5 26.5)">{"3"}</text>
      <text transform="translate(57.5 38.5)">{"4"}</text>
      <text transform="translate(33.75 58.63)">{"5"}</text>
      <text transform="translate(28.5 72.5)">{"6"}</text>
      <text transform="translate(46.5 56.5)">{"7"}</text>
    </g>
  </svg>
);

export default Kanji尾;
