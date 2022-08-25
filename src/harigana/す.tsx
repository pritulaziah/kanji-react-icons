import * as React from "react";
import { SVGProps } from "react";

const Hariganaす = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M15.5 37.12c2.88 2.12 6.94 1.51 12.75.25 16.12-3.5 36.14-5.38 46.62-6.5 7-.75 11.88-.62 17.75.12" />
      <path d="M57.62 13.38c2 1.5 2.75 3.25 2.75 5.88v40.75c0 14.62-15.62 16.38-15.62 1.75 0-14.25 18-14.12 18 6.38 0 13.25-7.75 21.5-16 28.38" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(9.12 35.5)">{"1"}</text>
      <text transform="translate(49 14.13)">{"2"}</text>
    </g>
  </svg>
);

export default Hariganaす;
