import * as React from "react";
import { SVGProps } from "react";

const Hariganaぎ = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M30.5 30.5c1.88.75 4.64 1.06 5.88.88 6.75-1 22.25-4.5 26.5-6 2.17-.76 3.5-1.25 4.88-2.12" />
      <path d="M36.25 48.95c2.01.85 4.97 1.2 6.29.99 7.23-1.13 23.82-5.09 28.37-6.79 2.32-.86 3.75-1.41 5.22-2.4" />
      <path d="M42 14.38c1.5.88 3.13 2.94 4 5.12 5.5 13.75 16 29.25 26.38 40.75 7.64 8.47 9.12 9.38-6 3.88" />
      <path d="M33.75 83.5c10.62 9.75 27.25 8.62 38.12 5" />
      <path d="M77.37 19c2.75 1.75 6 5.38 7.75 8.5" />
      <path d="M83.75 14.12c3.06 1.57 6.68 4.82 8.62 7.62" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(24.5 29.5)">{"1"}</text>
      <text transform="translate(28.13 48.13)">{"2"}</text>
      <text transform="translate(32.5 13)">{"3"}</text>
      <text transform="translate(24.5 77)">{"4"}</text>
      <text transform="translate(69.75 18)">{"5"}</text>
      <text transform="translate(75.88 12.88)">{"6"}</text>
    </g>
  </svg>
);

export default Hariganaぎ;
