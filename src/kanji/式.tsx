import * as React from "react";
import { SVGProps } from "react";

const Kanji式 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M17.5 39.45c2.61.54 7.43.8 10.02.54 13.86-1.37 34.52-4.37 56.22-5.48 4.34-.22 6.97.01 9.14.28" />
      <path d="M22.46 60.85c1.01.33 2.66.44 3.68.34 8.48-.81 14.4-2.44 21.9-3.04 1.55-.12 2.98.07 4.27.34" />
      <path d="M36.71 62.1c1.03 1.03 1.38 2.15 1.38 3.4 0 4.43-.1 12.03-.1 16.5" />
      <path d="M17.54 88.55c.96.82 3.25.88 4.34.45C33.16 84.5 39.07 82.5 56 76.25" />
      <path d="M55.5 10.5c2 1.75 2.91 3.98 3.25 7.75 2.38 26.38 10 61.75 32 75.25 7.43 4.56 6.12 1.88 4.5-9.5" />
      <path d="M78 11.25c3.85 2.05 9.46 6.74 11.25 10.25" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(10.5 40.5)">{"1"}</text>
      <text transform="translate(15.5 62.5)">{"2"}</text>
      <text transform="translate(30.5 70.5)">{"3"}</text>
      <text transform="translate(9.5 90.5)">{"4"}</text>
      <text transform="translate(46.5 11.5)">{"5"}</text>
      <text transform="translate(70.5 12.5)">{"6"}</text>
    </g>
  </svg>
);

export default Kanji式;
