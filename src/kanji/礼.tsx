import * as React from "react";
import { SVGProps } from "react";

const Kanji礼 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M29.08 14.12c3.93 2.24 8.13 6.21 11.5 10.12" />
      <path d="M15.36 39.25c1.04.45 3.14.91 4.93.7 5.75-.69 20.57-4.37 22.55-4.95 2.59-.75 4.09 1.26 2.51 3.5C39.91 46.25 26.38 64.38 14.5 74" />
      <path d="M35 54.86c.88.88 1.52 2.27 1.52 4.14 0 8.67-.01 23.85-.02 31.75v4.75" />
      <path d="M39.2 56.5c3.71 2.41 7.69 6.03 10.88 10.25" />
      <path d="M67.24 17.37c1.01 1.01 1.49 2.88 1.49 4.43 0 8.19-.13 49.14-.13 54.7 0 9.88 2.15 12.03 12.96 12.03C93 88.53 94.89 87 94.89 78.9" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(22.5 14.5)">{"1"}</text>
      <text transform="translate(7.5 40.5)">{"2"}</text>
      <text transform="translate(29.5 71.5)">{"3"}</text>
      <text transform="translate(43.5 56.5)">{"4"}</text>
      <text transform="translate(58.5 17.5)">{"5"}</text>
    </g>
  </svg>
);

export default Kanji礼;
