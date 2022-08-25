import * as React from "react";
import { SVGProps } from "react";

const Kanji布 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M51.65 10.43c.48 1.45.59 2.92.04 4.92-4.19 15.4-14.19 39.4-36.8 56.55" />
      <path d="M14.25 31.45c2.75.55 6.4.62 9.24.27 16.13-1.97 42.69-4.11 61.89-5.43 3.19-.22 6.5-.17 9.62.5" />
      <path d="M37.25 55.39c.93.93 1.34 2.61 1.34 3.71 0 5.78-.1 13.4-.1 23.9 0 2.51-.06 4.47-.08 5.39" />
      <path d="M39.09 57.72c7.66-1.22 24.66-3.6 38.38-4.78 4.04-.35 4.15 2.98 4.1 4.53-.31 9.78-.06 21.15-2.03 28.16-1.65 5.91-5.13.06-6.29-1.13" />
      <path d="M57.24 39.63c.87.87 1.34 2.62 1.34 3.71 0 5.78-.12 31.91-.12 50.16 0 3.57-.05 6.09-.07 6.88" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(43.5 10.5)">{"1"}</text>
      <text transform="translate(6.5 32.5)">{"2"}</text>
      <text transform="translate(30.75 67.5)">{"3"}</text>
      <text transform="translate(41.5 54.5)">{"4"}</text>
      <text transform="translate(48.5 41.5)">{"5"}</text>
    </g>
  </svg>
);

export default Kanji布;
