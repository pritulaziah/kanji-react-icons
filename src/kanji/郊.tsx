import * as React from "react";
import { SVGProps } from "react";

const Kanji郊 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M33.94 12.5c3.17 1.22 6.92 5.06 8.36 8.32" />
      <path d="M17.84 28.91c.75.07 2.45.44 3.18.39 8.77-.59 23.23-3.05 31.57-3.98 1.23-.14 1.87.03 2.78.49" />
      <path d="M28.49 37.01c.25.61-.01 2.02-.62 3.01-2.39 3.91-6.72 8.16-11.6 11.58" />
      <path d="M47.17 32.86c4.57 3.81 8.35 8.21 10.63 12.83" />
      <path d="M48.21 47.11c.44.9.59 2.49-.14 4.11C41.25 66.25 29 79.5 14.02 87.62" />
      <path d="M25.88 55.85c8.26 2.67 19.52 13.29 26.54 23.95" />
      <path d="M64.17 21.67c.83.08 2.32.62 3.4.44 4.63-.81 17.17-3.62 19.6-4.44 3-1 6 1 4.67 3.33s-7.5 15.17-9.83 18.5" />
      <path d="M81.5 40c20.5 10.75 17 38.25 2.23 29.16" />
      <path d="M67.83 23c.22 1 0 68.75-.22 75" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(28.5 11.5)">{"1"}</text>
      <text transform="translate(10.5 29.5)">{"2"}</text>
      <text transform="translate(20.5 38.5)">{"3"}</text>
      <text transform="translate(39.75 35.5)">{"4"}</text>
      <text transform="translate(39.75 46.5)">{"5"}</text>
      <text transform="translate(18.75 58.5)">{"6"}</text>
      <text transform="translate(69.75 18.13)">{"7"}</text>
      <text transform="translate(75.75 39.13)">{"8"}</text>
      <text transform="translate(60.75 31.63)">{"9"}</text>
    </g>
  </svg>
);

export default Kanji郊;
