import * as React from "react";
import { SVGProps } from "react";

const Kanji逆 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M46.39 15.81c3.2 2.12 7.61 7.07 9.07 11.99" />
      <path d="M78.53 13.29c.06.85-.13 1.76-.48 2.53-1.75 3.89-4.84 8.5-9.94 14.25" />
      <path d="M40.75 35.39c2.75.49 4.9.32 7.14-.06 9.36-1.58 26.25-3.84 34.63-4.84 2.13-.25 4.4-.49 6.48.02" />
      <path d="M47.05 46.58c.75.75.98 2.19.75 3.63-.67 4.16-1.21 9.87-1.39 11.85-.14 1.54.24 2.63 1.79 2.25 10.56-2.57 22.56-4.82 33.29-5.47" />
      <path d="M82.85 39.91c.81.81 1.03 1.84 1 2.86-.08 2.35-.55 9.08-1 14.73-.17 2.12-.33 4.09-.47 5.62" />
      <path d="M64.53 35.62c.86.86 1.47 2.38 1.47 3.76 0 27.37-1.75 34.75-10.52 44.21" />
      <path d="M16.5 20.62c4.45 1.82 9.88 5.5 12 9.16" />
      <path d="M11.25 54.97c2.25.93 4.25.72 5.25.48 1-.23 9.25-4.51 10.75-4.98 1.5-.47 3.08.56 2.25 2.06-7.25 13.22-7.88 9.09.75 17.46 1.14 1.11.75 2.56-.75 3.73S20 80.25 17 81.88" />
      <path d="M13 83.13c3-.39 8.95-.96 13.5-.58 7 .58 28 5.21 34.5 7 11.86 3.28 20.5 4.2 29 4.14" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(40.5 16.5)">{"1"}</text>
      <text transform="translate(69.5 13.5)">{"2"}</text>
      <text transform="translate(33.49 37.5)">{"3"}</text>
      <text transform="translate(39.5 47.5)">{"4"}</text>
      <text transform="translate(75.5 45.13)">{"5"}</text>
      <text transform="translate(57.75 43.63)">{"6"}</text>
      <text transform="translate(9.75 20.63)">{"7"}</text>
      <text transform="translate(3.75 55.5)">{"8"}</text>
      <text transform="translate(5.25 85.63)">{"9"}</text>
    </g>
  </svg>
);

export default Kanji逆;
