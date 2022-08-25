import * as React from "react";
import { SVGProps } from "react";

const Kanji述 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M41.11 35c.93 0 2.31.14 3.55.22 3.39.22 29.15-2.83 37.63-3.94 1.23-.16 1.54-.22 2.31 0" />
      <path d="M61.87 13.5c1 .44 1.6 2 1.8 2.88.21.94-.2 50.06-.2 55.62 0 9.5-5.21 2.5-6.46 1.25" />
      <path d="M49.58 44.25c.21.63.85 1.9.74 2.65C49 55.75 45 65 37.75 73.29" />
      <path d="M75.37 46.08c3.73 4.26 9.65 17.51 10.58 24.13" />
      <path d="M75.19 14.33c3.57 1.61 9.23 6.63 10.12 9.13" />
      <path d="M18.21 18.25c3.63 1.74 9.38 7.17 10.29 9.88" />
      <path d="M11.5 53.86c2.25.9 3.75.45 4.75.23s8-2.65 9.5-3.1 3.75 1.12 2.75 2.47-3 5.02-3.75 6.14-1 3.15.5 4.72 2.25 2.87 3 4.22c.75 1.35.74 2.45-.75 3.6-2.75 2.11-9 8.91-10.5 9.36" />
      <path d="M12.75 83c3-.5 9-1.75 13.5-.75s30.07 6.71 34.5 8C72.75 93.75 82 94.75 91 93" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(35.25 34.63)">{"1"}</text>
      <text transform="translate(53.25 13.63)">{"2"}</text>
      <text transform="translate(42.75 48.05)">{"3"}</text>
      <text transform="translate(69.75 43.48)">{"4"}</text>
      <text transform="translate(69.75 12.5)">{"5"}</text>
      <text transform="translate(10.5 16.5)">{"6"}</text>
      <text transform="translate(6.75 52.5)">{"7"}</text>
      <text transform="translate(5.25 84.5)">{"8"}</text>
    </g>
  </svg>
);

export default Kanji述;
