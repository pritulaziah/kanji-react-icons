import * as React from "react";
import { SVGProps } from "react";

const Kanji泣 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M23.63 18.75c3.4 1.21 8.77 4.96 9.62 6.84" />
      <path d="M16.25 43.5c3.79 1.15 9.8 4.72 10.75 6.5" />
      <path d="M16.75 87.21c1.5 1.31 3.31 1.36 4.25-.25 2.75-4.7 5.5-10.45 8-16.45" />
      <path d="M55.82 17c6.05 3.59 10.43 8.75 14.12 16.75" />
      <path d="M40.5 41.2c1.16.33 2.53.38 3.68.33 6.57-.28 31.07-4.53 40.99-4.77 1.94-.05 3.1.16 4.07.32" />
      <path d="M49.08 49.92c4.34 10.5 6.31 21.23 6.71 28.15" />
      <path d="M77.65 42.75c.78 1.3.87 1.96.78 3.04-.62 7.38-6.39 30.32-7.95 35.96" />
      <path d="M36.75 86.3c1.46.39 3.17.54 4.62.39C57.25 85 73.75 83 92.15 82.2c2.43-.11 3.89.19 5.1.38" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(13.99 18.13)">{"1"}</text>
      <text transform="translate(6.49 45.06)">{"2"}</text>
      <text transform="translate(9.49 94.48)">{"3"}</text>
      <text transform="translate(50.5 15.5)">{"4"}</text>
      <text transform="translate(36.5 38.5)">{"5"}</text>
      <text transform="translate(42.49 53.76)">{"6"}</text>
      <text transform="translate(69.49 49.18)">{"7"}</text>
      <text transform="translate(36.49 82.1)">{"8"}</text>
    </g>
  </svg>
);

export default Kanji泣;
