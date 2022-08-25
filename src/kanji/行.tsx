import * as React from "react";
import { SVGProps } from "react";

const Kanji行 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M32.49 12c-.12 1-.45 1.9-1.1 2.62C28.29 18.06 22.2 22.6 12.5 28" />
      <path d="M36.5 31.75c.07.73.08 2.28-.39 3.18C32.12 42.5 23.83 52.5 11 62.75" />
      <path d="M25.57 51.75c.9.9 1.23 2.25 1.23 3.26 0 .72.04 24.47-.07 35.49-.02 2.19-.04 3.87-.07 4.75" />
      <path d="M50.5 18.45c1.44.35 3.81.52 5.23.35 7.14-.8 16.01-2.43 24.49-3.06 2.38-.18 3.83-.06 5.02.11" />
      <path d="M43.13 41.42c1.5.38 4.27.58 5.76.38 12.86-1.67 28.86-4.05 41.85-5.38 2.49-.26 4.01.18 5.26.37" />
      <path d="M71.52 41.33c1.26 1.26 1.76 2.79 1.76 5.27 0 14.56-.26 38.66-.26 43.62 0 8.03-7.21-.5-8.71-1.75" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(25.75 10.5)">{"1"}</text>
      <text transform="translate(28.5 31.5)">{"2"}</text>
      <text transform="translate(19.5 65.5)">{"3"}</text>
      <text transform="translate(49.5 15.5)">{"4"}</text>
      <text transform="translate(43.5 38.5)">{"5"}</text>
      <text transform="translate(64.5 50.5)">{"6"}</text>
    </g>
  </svg>
);

export default Kanji行;
