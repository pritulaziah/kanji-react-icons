import * as React from "react";
import { SVGProps } from "react";

const Kanji刻 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M32.92 11.74c2.69 1.42 8.65 7.01 9.66 9.75" />
      <path d="M15 29.35c1 .1 3.27.69 4.24.54 7.83-1.14 28.38-4.85 39.55-5.64 1.64-.12 2.48.05 3.71.69" />
      <path d="M35.14 29.59c.35 1.27.3 2.87-.54 4.12-2.92 4.31-4.98 8.94-8.87 12.85-.69.69-.7 2.94 0 3.18 3.7 1.27 8.49 2.89 11.66 5.22" />
      <path d="M49.32 33.96c.08.92.31 2.69-.16 3.69C43 50.75 34.5 62.5 19.55 73" />
      <path d="M50.71 55.57c.1.93.38 2.71-.2 3.73-7.27 12.94-19.53 26.77-36.27 35.74" />
      <path d="M42.02 74.11c5.83 2.83 15.05 11.66 16.51 16.07" />
      <path d="M71.27 27.33c.98.92 1.67 1.99 1.76 5.02C73.42 46.91 73 61.04 73 66" />
      <path d="M90.77 14.83c.98.92 1.67 1.99 1.76 5.02.4 14.55-.26 63.66-.26 68.62 0 11.53-7.21 1.5-8.71.25" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(27.5 12.13)">{"1"}</text>
      <text transform="translate(7.5 30.5)">{"2"}</text>
      <text transform="translate(24.5 38.5)">{"3"}</text>
      <text transform="translate(39.75 36.5)">{"4"}</text>
      <text transform="translate(41.5 62.5)">{"5"}</text>
      <text transform="translate(49.5 76.55)">{"6"}</text>
      <text transform="translate(68.5 23.5)">{"7"}</text>
      <text transform="translate(81.5 14.5)">{"8"}</text>
    </g>
  </svg>
);

export default Kanji刻;
