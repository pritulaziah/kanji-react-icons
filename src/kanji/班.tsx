import * as React from "react";
import { SVGProps } from "react";

const Kanji班 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M13.77 27.61c.63.34 2.67.08 3.31.02C21 27.25 32 25.5 37.85 24.8c.96-.12 1.9.2 3.15.36" />
      <path d="M13.82 52.55c.59.36 2.55.28 3.15.16 4.54-.96 12.54-2.46 18.22-3.53.73-.14 2.36-.15 3.46.17" />
      <path d="M14.41 80.86c.84 1.14 2.09 1.64 3.84.89 8.09-3.47 12.5-5.75 22.86-9.91" />
      <path d="M26.81 28.05c1.56 1.95 1.56 3.11 1.56 4.67 0 10.9-.02 26.49-.02 43.96" />
      <path d="M46.27 35.33c.98.92 1.76 1.99 1.76 5.02 0 13.4-.02 20.19-.02 25.15" />
      <path d="M56.6 14.25c.53 2.19 1.29 3.91 1.29 6.64 0 24.97 2.16 60.97-15.83 73.83" />
      <path d="M67.85 23.69c.64.46 2.72.1 3.37.03 6.27-.72 14.52-1.97 20.31-2.76.98-.13 1.88.09 2.7.47" />
      <path d="M68.19 51.79c.63.5 2.72.3 3.37.22 6.74-.88 10.04-1.13 17.96-2.02.79-.09 2.53-.2 3.71.24" />
      <path d="M62.06 85.1c.45.2 2.8.1 3.56 0 6.88-.85 17.85-1.69 29.26-2.19 1.23-.05 2.7.34 3.31.66" />
      <path d="M79.17 25.37c1.68 2.1 1.68 3.36 1.68 5.04 0 11.75-.02 33.95-.02 52.79" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(8.25 28.63)">{"1"}</text>
      <text transform="translate(7.5 53.5)">{"2"}</text>
      <text transform="translate(6.5 83.5)">{"3"}</text>
      <text transform="translate(20.25 37.63)">{"4"}</text>
      <text transform="translate(38.5 38.5)">{"5"}</text>
      <text transform="translate(48.5 15.5)">{"6"}</text>
      <text transform="translate(66.5 20.5)">{"7"}</text>
      <text transform="translate(65.5 48.5)">{"8"}</text>
      <text transform="translate(59.5 81.5)">{"9"}</text>
      <text transform="translate(70 34.55)">{"10"}</text>
    </g>
  </svg>
);

export default Kanji班;
