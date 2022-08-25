import * as React from "react";
import { SVGProps } from "react";

const Kanji為 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M32.77 17.58c3.19 2.05 8.24 8.44 9.04 11.63" />
      <path d="M60.44 15.14c.12 1.56-.22 2.85-1 5C53.38 37 39.75 64.75 15.31 80.47" />
      <path d="M27.37 36.75c2.46.39 5 .57 7.53.29 9.95-1.08 28.26-3.76 34.47-4.55 2.47-.31 4.79-.23 3.79 2.95-.65 2.07-2.06 6.21-3.42 10.06" />
      <path d="M45.77 49.34c9.08-.91 23.91-2.76 28.12-3.24 2.28-.26 3.61.6 2.76 2.95-.86 2.36-2.99 7.41-4.41 11.44" />
      <path d="M39.25 63c1.25.75 2.95.75 5 .5 4.13-.5 35.57-3.48 43.75-4.14 4.75-.39 5.92.95 4.84 5.57-1.59 6.76-5.39 17.56-10.84 27.32-2.64 4.72-5.05 1.88-8-1.25" />
      <path d="M26.12 79.88c.95 2 2.45 8.23 2.68 11.34" />
      <path d="M38.75 76.08c1.79 1.88 4.62 7.71 5.06 10.63" />
      <path d="M53 73.83c1.79 1.66 4.62 6.81 5.06 9.38" />
      <path d="M67.75 70.62c2.14 1.65 5.53 6.78 6.07 9.34" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(26.5 17.5)">{"1"}</text>
      <text transform="translate(51.5 14.5)">{"2"}</text>
      <text transform="translate(20.5 37.63)">{"3"}</text>
      <text transform="translate(54.5 45.13)">{"4"}</text>
      <text transform="translate(45.5 60.05)">{"5"}</text>
      <text transform="translate(20.25 85.5)">{"6"}</text>
      <text transform="translate(32.5 80.5)">{"7"}</text>
      <text transform="translate(46.5 76.5)">{"8"}</text>
      <text transform="translate(61.5 72.5)">{"9"}</text>
    </g>
  </svg>
);

export default Kanji為;
