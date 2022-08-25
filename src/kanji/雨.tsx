import * as React from "react";
import { SVGProps } from "react";

const Kanji雨 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M25.75 22.37c1.87.4 4.47.62 6.32.4 11.68-1.39 28.28-3.77 41.25-4.64 2.49-.17 4.37-.12 7.18.28" />
      <path d="M15.5 41.25c1.25 1.5 1.66 3.26 1.89 5.19 1.24 10.69 2.19 26.61 2.66 36.31.13 2.7.2 5 .2 6" />
      <path d="M18.25 44.25c1.42-.09 62.76-5.33 69.5-6 2.5-.25 4.61 1 4.5 3.75-.5 12.75-1.77 28.11-6 44.75-1.88 7.38-5.38 1.88-8.5-1.25" />
      <path d="M52.25 23.5C53.31 24.56 54 26.25 54 28c0 .82-.25 37.8-.43 53-.04 3.43-.07 5.74-.07 6.25" />
      <path d="M31 53.5c4.21 1.24 8.95 3.94 11.25 6" />
      <path d="M30.5 68.75c3.8 1.26 9.68 5.89 11.75 8" />
      <path d="M66.88 48.88c4.98 1.99 10.63 5.97 12.62 7.62" />
      <path d="M67.25 66.5c2.75 1 9 5.5 11 7.75" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(18.75 22.63)">{"1"}</text>
      <text transform="translate(9.5 48.5)">{"2"}</text>
      <text transform="translate(21.5 40.5)">{"3"}</text>
      <text transform="translate(45.5 31.25)">{"4"}</text>
      <text transform="translate(23.25 56.25)">{"5"}</text>
      <text transform="translate(23 70.75)">{"6"}</text>
      <text transform="translate(59 51.5)">{"7"}</text>
      <text transform="translate(58.5 66.25)">{"8"}</text>
    </g>
  </svg>
);

export default Kanji雨;
