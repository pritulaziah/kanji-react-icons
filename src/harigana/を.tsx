import * as React from "react";
import { SVGProps } from "react";

const Hariganaを = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M28.56 27.87c1.62 1.13 3.17 1.64 6.01 1.12 10.86-1.99 16.74-3.37 24.71-4.72 3.64-.62 5.65-.93 8.4-.75" />
      <path d="M49.93 14.38c.75 1 1.48 3.22.38 5.62-4.62 10.12-10 20.75-17.12 30.25-9.25 12.33-9.25 11.19 2.12 2.5 9-6.88 23.75-12.12 22.88 19.88" />
      <path d="M83.06 39.88c.62 1.75 0 4-3 5.75S30.44 69.79 35.31 83.88c3.28 9.48 17.93 9.12 29.98 7.75 4.48-.51 9.15-1.12 12.4-1.75" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(21.94 25.88)">{"1"}</text>
      <text transform="translate(39.69 12.75)">{"2"}</text>
      <text transform="translate(76.69 37.38)">{"3"}</text>
    </g>
  </svg>
);

export default Hariganaを;
