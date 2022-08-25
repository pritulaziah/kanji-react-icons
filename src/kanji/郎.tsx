import * as React from "react";
import { SVGProps } from "react";

const Kanji郎 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M29.74 11.26c3.01 1.99 7.26 6.99 8.66 10" />
      <path d="M22.34 28.97c1.8-.12 21.63-2.94 23.26-3.16 2.77-.38 3.46 1.4 3.35 3.18-.45 7.51-1.2 19.26-2.16 26.87" />
      <path d="M22.66 40.98c3.75-.39 7.5-.82 11.26-1.21 1.16-.12 2.33-.24 3.5-.35" />
      <path d="M22.55 54.46c4.97-.52 15.45-1.71 24-2.59" />
      <path d="M20.64 26.86c1.02.56 1.14 2.5 1.35 3.61.18 1.01-.12 43.94-.12 53.78 0 2.61 1.25 2.5 2.44 1.65 4.16-2.98 15.52-11.15 20.14-13.87" />
      <path d="M40.73 63.58c3.1 2.76 7.97 10.14 9.74 15.98" />
      <path d="M61.41 20.21c1.59.29 2.55.59 3.84.52 8.25-.47 16.46-1.68 20.01-2.74 4.15-1.24 6.29 1.74 4.45 4.64-1.84 2.9-9.67 15.98-12.9 20.12" />
      <path d="M77.31 43.36C96.5 60.5 96 86 81.61 77.88" />
      <path d="M65.12 21c.38 1.75.74 2.75.96 3.75.22 1 0 66.75-.22 73" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(24.25 11.88)">{"1"}</text>
      <text transform="translate(24.25 25.25)">{"2"}</text>
      <text transform="translate(26.25 37.25)">{"3"}</text>
      <text transform="translate(26.08 51.25)">{"4"}</text>
      <text transform="translate(14.25 35.25)">{"5"}</text>
      <text transform="translate(34.25 64.25)">{"6"}</text>
      <text transform="translate(66.5 16.38)">{"7"}</text>
      <text transform="translate(72.5 52.38)">{"8"}</text>
      <text transform="translate(57.5 29.88)">{"9"}</text>
    </g>
  </svg>
);

export default Kanji郎;
