import * as React from "react";
import { SVGProps } from "react";

const Katakanaコ = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M30.13 35c1.75 1 3.01 2.18 6.5 1.62 14.25-2.25 29.62-4.25 37.38-5.5 9.37-1.51 9.88.25 8 7.5-2.77 10.71-5.25 22.12-7 34.88" />
      <path d="M27.5 77.38c2.62 1.12 4.38 1.51 8.25 1 11.38-1.5 22.62-3 33.75-3.38 4-.13 5.88 0 9.62.5" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(22.88 32)">{"1"}</text>
      <text transform="translate(23.88 72.88)">{"2"}</text>
    </g>
  </svg>
);

export default Katakanaコ;
