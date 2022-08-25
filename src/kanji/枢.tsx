import * as React from "react";
import { SVGProps } from "react";

const Kanji枢 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M10.78 39.22c.35.24 2.39.41 3.31.31 3.94-.41 21.62-2.21 27.95-3.41.92-.17 1.15-.24 1.73 0" />
      <path d="M28.36 14c.39 1.25 2.04 3.47 2.04 4.42 0 7.33-.3 70.23-.3 71.08 0 10.75-5.47 2.62-6.6 1.5" />
      <path d="M29.94 42.28c-5.9 14.39-9.19 20.47-18.33 33.06" />
      <path d="M33.72 50.15c2.45 1.48 5.84 6.53 7.91 9.39" />
      <path d="M48.88 21.61c1.08.55 3.06.63 4.14.55C64.26 21.24 79 20 90.78 18.64c1.8-.21 2.88.26 3.78.54" />
      <path d="M81.8 31.29c.36 1.1.74 1.95.18 3.89C77 52.5 70 67 59.61 76.02" />
      <path d="M60.04 41.55c9.75 4.84 22.03 21.62 26.91 31.86" />
      <path d="M51.63 23.02v65.05c0 2.19.74 3.04 1.96 2.73 13.91-3.54 32.16-4.79 36.78-4 2.28.39 5.27.73 6.69 1.2" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(3.75 39.13)">{"1"}</text>
      <text transform="translate(18.75 15.13)">{"2"}</text>
      <text transform="translate(17.25 51.13)">{"3"}</text>
      <text transform="translate(36.75 49.63)">{"4"}</text>
      <text transform="translate(54.75 16.63)">{"5"}</text>
      <text transform="translate(86.25 30.13)">{"6"}</text>
      <text transform="translate(59.25 39.13)">{"7"}</text>
      <text transform="translate(42.75 28.63)">{"8"}</text>
    </g>
  </svg>
);

export default Kanji枢;
