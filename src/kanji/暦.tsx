import * as React from "react";
import { SVGProps } from "react";

const Kanji暦 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M22.38 17.98c1.52.54 4.3.13 5.82.04C44 17.11 63 14.5 82.81 14.29c2.53-.03 4.05.26 5.31.53" />
      <path d="M25.75 18.75c.04 1.64.09 4.24-.08 6.6-.99 13.91-3.21 47.64-13.86 62.62" />
      <path d="M28.58 35.56c.56.2 2.24.17 3.72 0 5.22-.59 13.96-1.54 19.54-1.93 1.49-.1 2.61-.12 3.54.07" />
      <path d="M43.88 23.01c.94.37 1.05 1.65 1.24 2.39.19.73 0 31.15-.19 35.75" />
      <path d="M44.4 35.52c-2.51 6.57-9.99 17.58-15.22 21.29" />
      <path d="M47.34 41.97c2.83 1.16 5.86 3.49 7.48 5.53" />
      <path d="M60.18 33.22c.46.16 1.46.24 2.68.16C68.7 33 75.15 32 84.06 30.76c1.22-.17 2.29-.16 3.05 0" />
      <path d="M70.8 20.86c.95.37 1.24 1.62 1.24 2.39 0 5.52.27 29.11.27 35.51" />
      <path d="M72.26 32.69C69.74 40.41 61.9 51.15 56.05 55.1" />
      <path d="M71.86 33.23c5.79 7.88 15.05 17.99 19.75 21.1 1.34.88 2.09 1.5 3.21 1.8" />
      <path d="M35.74 68.73c.4.5.41.85.63 1.48 1.8 5.19 3.5 18.31 4.61 28" />
      <path d="M37.61 69.42c13.96-1.31 27.88-2.53 38.3-3.62 3.83-.4 5.79 1.02 5.59 2.45-.72 5.24-2.5 19.5-4.25 28.25" />
      <path d="M40.21 82.86c6.46-.72 12.94-1.26 19.42-1.85 2.13-.19 4.25-.39 6.27-.57" />
      <path d="M41.7 95.79c10.05-.56 21.67-1.38 35.55-2.29" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(22.25 15.25)">{"1"}</text>
      <text transform="translate(18.5 27.25)">{"2"}</text>
      <text transform="translate(29.25 32.25)">{"3"}</text>
      <text transform="translate(36.25 26.25)">{"4"}</text>
      <text transform="translate(33.25 44.25)">{"5"}</text>
      <text transform="translate(52.25 42.25)">{"6"}</text>
      <text transform="translate(58.25 29.88)">{"7"}</text>
      <text transform="translate(63.25 23.88)">{"8"}</text>
      <text transform="translate(61.25 42.25)">{"9"}</text>
      <text transform="translate(79.25 40.25)">{"10"}</text>
      <text transform="translate(27.5 77.88)">{"11"}</text>
      <text transform="translate(38 67.38)">{"12"}</text>
      <text transform="translate(43.25 79.3)">{"13"}</text>
      <text transform="translate(43.25 93.25)">{"14"}</text>
    </g>
  </svg>
);

export default Kanji暦;
