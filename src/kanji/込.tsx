import * as React from "react";
import { SVGProps } from "react";

const Kanji込 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M63.05 35.17c-.05 1.95-.48 3-1.07 4.32-5.43 12.12-16.4 26.98-25.15 33.4" />
      <path d="M49.1 16.75c9.15 2 18.15 28.75 32.17 45.48 3.08 3.68 6.22 7.27 9.38 9.27" />
      <path d="M18.21 21.25c3.99 1.44 10.3 5.9 11.29 8.13" />
      <path d="M13.25 52.03c2.25.88 3.77.53 4.75.22 2.75-.87 8.19-2.99 10.75-4.26 2.5-1.24 3.15 1.02 2.25 2.41-7.5 11.6-8 6.85-.75 16.92.89 1.23 1 2.66-.5 3.76s-8 6.17-11 8.17" />
      <path d="M14.25 80.72c4.12-1.22 9.73-1.09 14.43-.81 5.82.34 35.54 6.53 40.1 7.5 12.38 2.62 15.09 2.97 22.72 3.06" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(54.5 39.13)">{"1"}</text>
      <text transform="translate(42.5 16.5)">{"2"}</text>
      <text transform="translate(9.5 20.5)">{"3"}</text>
      <text transform="translate(5.5 52.55)">{"4"}</text>
      <text transform="translate(7.5 81.5)">{"5"}</text>
    </g>
  </svg>
);

export default Kanji込;
