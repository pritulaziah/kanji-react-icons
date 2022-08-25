import * as React from "react";
import { SVGProps } from "react";

const Kanji杯 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M12.28 36.22c.35.24 2.39.36 3.31.31 5.92-.28 20.12-3.21 26.45-4.41.92-.17 2.15-.24 2.73 0" />
      <path d="M28.86 13c.91.47 2.54 2.5 2.54 4.92 0 .95-.3 70.73-.3 71.58 0 11.75-5.72 3.12-6.85 2" />
      <path d="M30.94 37.28c-5.9 14.39-9.19 20.47-18.33 33.06" />
      <path d="M33.47 42.9c3.23 1.59 8.55 6.76 11.28 9.85" />
      <path d="M47.97 24.96c1.08.52 3.07.65 4.16.52 10.37-1.23 29.57-4.03 41.49-4.97 1.8-.14 2.89.25 3.79.51" />
      <path d="M74.56 26.41c.08.9.18 2.33-.17 3.62-2.06 7.63-13.86 24.38-30.01 34.64" />
      <path d="M67.25 39c2 1.25 2.64 3 2.64 5.12 0 4.63-.16 34.38-.16 50.88" />
      <path d="M80.39 49.25c6.44 3.92 16.62 16.11 18.24 22.2" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(5.25 37.63)">{"1"}</text>
      <text transform="translate(21.25 13.63)">{"2"}</text>
      <text transform="translate(19.5 47.5)">{"3"}</text>
      <text transform="translate(37.5 42.5)">{"4"}</text>
      <text transform="translate(45.5 21.5)">{"5"}</text>
      <text transform="translate(65.5 33.5)">{"6"}</text>
      <text transform="translate(62.25 60.05)">{"7"}</text>
      <text transform="translate(79.5 46.5)">{"8"}</text>
    </g>
  </svg>
);

export default Kanji杯;
