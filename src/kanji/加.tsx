import * as React from "react";
import { SVGProps } from "react";

const Kanji加 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M15.4 43.01c2.22.87 5.03.82 7.65.31 8.82-1.69 22.9-4.62 26.59-5.2 2.64-.41 3.89 1.37 3.72 4.27-.49 8.49-4.91 30.77-11.61 41.36-3.88 6.12-5.88 3.25-8.42.21" />
      <path d="M35.57 16.68c.81 1.07 1.12 2.62.93 4.57-2.12 21.88-8.12 47.88-26.46 66.39" />
      <path d="M62.86 42.32c.85.85 1.48 2.02 1.61 2.89 1.02 7.12 2.12 20.88 3.11 33.28.13 1.6.25 3.18.38 4.72" />
      <path d="M64.79 43.93c9.47-1.3 18.22-2.58 24.08-3.27 4.63-.54 6.72 1.58 6.01 6.72-1.42 10.17-2.66 16.65-4.25 29.71" />
      <path d="M69.06 80.16c6.52-.58 12.26-.97 20.2-1.68 1.12-.1 2.28-.2 3.48-.3" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(9.5 45.13)">{"1"}</text>
      <text transform="translate(26.5 16.5)">{"2"}</text>
      <text transform="translate(57.75 55.63)">{"3"}</text>
      <text transform="translate(66.5 40.41)">{"4"}</text>
      <text transform="translate(72.49 76.33)">{"5"}</text>
    </g>
  </svg>
);

export default Kanji加;
