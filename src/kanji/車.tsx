import * as React from "react";
import { SVGProps } from "react";

const Kanji車 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M26.25 26.5c1.03.38 2.93.51 3.96.38C45.25 25 63.25 23.5 77.89 22.5c1.72-.12 2.75.18 3.61.37" />
      <path d="M27.5 37.42c.81.5 1.83 2.39 1.98 3.05 1.09 4.81 2.41 15.17 3.95 24.28" />
      <path d="M30.61 39.24c12.27-.96 38.51-3.85 46.88-4 3.46-.06 4.17 1.32 4.03 2.83C81 43.25 79.75 51.75 77 60.25" />
      <path d="M33.5 51.25c11-1.25 20.01-2.28 28.73-3.13 1.07-.1 3.16-.21 4.25-.3" />
      <path d="M33.5 63.25c10.75-1 29.5-4 43.5-4" />
      <path d="M16 78.04c1.47.77 4.16.95 5.64.77C40.5 76.5 69.25 73.5 86.6 73c2.45-.07 3.93.37 5.15.75" />
      <path d="M52.06 11.63c.76.6 2.36 4.47 2.51 5.66.15 1.19-.1 72.13-.25 79.59" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(17.25 26.5)">{"1"}</text>
      <text transform="translate(20.25 45.13)">{"2"}</text>
      <text transform="translate(33 36.28)">{"3"}</text>
      <text transform="translate(35.5 48.13)">{"4"}</text>
      <text transform="translate(35.5 60.13)">{"5"}</text>
      <text transform="translate(6.75 80.5)">{"6"}</text>
      <text transform="translate(43.5 11.5)">{"7"}</text>
    </g>
  </svg>
);

export default Kanji車;
