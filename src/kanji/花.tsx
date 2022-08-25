import * as React from "react";
import { SVGProps } from "react";

const Kanji花 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M17 29.77c3 .73 6.35.54 9.37.29 16.22-1.35 36.31-4.64 56.76-4.79 2.4-.02 4.77.04 7.12.51" />
      <path d="M32.25 16c1.25.5 2.25 1.62 2.5 2.75 1.33 5.97 4.86 19.92 5 20.75" />
      <path d="M71.25 12.5c.42 1.18.47 3.05 0 4.5-2.19 6.77-6.14 19.12-6.75 20.75" />
      <path d="M38.25 48.25c.25 1.75-.37 3.31-.98 4.44C33.25 60 24.8 69.67 19.5 74.5" />
      <path d="M30.75 65.5c.75 1 1.12 1.97 1.12 3 0 6.64-.08 16.47-.11 24-.01 1.96-.01 3.82-.01 5.5" />
      <path d="M84.25 50.25c-.12 1.62-.84 2.87-2 3.75-4.62 3.5-11 6.75-19 9.75" />
      <path d="M58.25 43.75c1.06 1.06 1.5 2.5 1.5 4.75 0 2.96-.22 20.59-.22 31.25C59.53 93 63 94.15 77 94.15c16.25 0 18-2.65 18-11.15" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(9.5 30.13)">{"1"}</text>
      <text transform="translate(22.5 15.5)">{"2"}</text>
      <text transform="translate(62.5 12.5)">{"3"}</text>
      <text transform="translate(28.5 48.5)">{"4"}</text>
      <text transform="translate(24.5 78.5)">{"5"}</text>
      <text transform="translate(74.5 49.5)">{"6"}</text>
      <text transform="translate(50.5 44.5)">{"7"}</text>
    </g>
  </svg>
);

export default Kanji花;
