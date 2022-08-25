import * as React from "react";
import { SVGProps } from "react";

const Kanji性 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M15.98 38.25c0 6.61-3.53 16.36-4.45 18.25" />
      <path d="M30.52 30.58c3.72 2.19 9.61 8.98 10.54 12.38" />
      <path d="M25.37 14.75c1.09.5 1.74 2.25 1.96 3.25.22 1 0 70.25-.22 76.5" />
      <path d="M54.51 28.14c.04.7.08 1.82-.08 2.83C53.48 36.93 48 50 40.5 58" />
      <path d="M52.38 41.92c.94.38 2.66.46 3.6.38 6.77-.55 27.02-2.8 32.86-3.38 1.56-.16 2.21-.09 3.03-.02" />
      <path d="M50.88 63.53c.94.28 2.66.34 3.6.28 6.77-.4 26.52-1.99 32.36-2.42 1.56-.11 2.21-.06 3.03-.02" />
      <path d="M38.88 90.97c1.24.27 3.52.32 4.76.27 8.96-.38 42.43-1.76 50.15-2.17 2.06-.11 3.8.22 5.71.88" />
      <path d="M67.81 13.88c.76.52 2.36 3.93 2.51 4.98.15 1.05-.1 63.96-.25 70.52" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(11.25 34.63)">{"1"}</text>
      <text transform="translate(32.5 28.5)">{"2"}</text>
      <text transform="translate(16.5 14.5)">{"3"}</text>
      <text transform="translate(45.75 25.5)">{"4"}</text>
      <text transform="translate(57.75 39.5)">{"5"}</text>
      <text transform="translate(44.25 64.5)">{"6"}</text>
      <text transform="translate(38.5 87.5)">{"7"}</text>
      <text transform="translate(58.5 15.5)">{"8"}</text>
    </g>
  </svg>
);

export default Kanji性;
