import * as React from "react";
import { SVGProps } from "react";

const Kanji号 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M30.75 14.66c1 .59 1.88 1.59 2.04 2.42 1.04 5.07 2.25 11.09 3.53 17.31.25 1.2.48 2.39.71 3.58" />
      <path d="M34.14 16.95c10.39-1.58 29.99-4.15 35.35-4.68 1.96-.19 3.39 1.48 2.86 3.6-1.18 4.73-2.6 9.38-4.47 14.89" />
      <path d="M37.7 34.98c5.39-.51 19.86-2.18 29.07-3.03 1.54-.14 2.92-.26 4.06-.35" />
      <path d="M12.5 47.45c2.5.54 6.6.56 9.08.29 19-2.04 41.7-4.56 63.04-5.4 3.71-.14 7.32-.03 11 .45" />
      <path d="M46.25 47.25c.75 1.38.5 3.08-.5 4.75-1.5 2.5-4.38 6.62-6 9-1.14 1.66.25 4.25 2.25 4s23.96-5.39 26.25-6c3.75-1 5.71.78 5 4.5-2 10.5-8.8 22.89-12.5 28-5.25 7.25-11.25 1.75-14-.5" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(26.5 24.13)">{"1"}</text>
      <text transform="translate(36.5 13.5)">{"2"}</text>
      <text transform="translate(40.5 31.5)">{"3"}</text>
      <text transform="translate(5.5 48.5)">{"4"}</text>
      <text transform="translate(36.5 55.5)">{"5"}</text>
    </g>
  </svg>
);

export default Kanji号;
