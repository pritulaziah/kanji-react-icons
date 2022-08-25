import * as React from "react";
import { SVGProps } from "react";

const Kanji巨 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M27.1 22.11c6.73-.68 37.92-3.69 53.56-4.36 2.37-.1 3.79-.22 4.98.03" />
      <path d="M25.04 19.84c1.02.46 1.63 2.05 1.84 2.97.2.91 0 62.48-.2 68.19" />
      <path d="M27.5 45.04c16.11-1.68 36.82-3.92 48-5.07 4.53-.47 4.99 1.28 4.16 4.88-1.04 4.48-2.82 11.85-3.98 17.21" />
      <path d="M27.07 67.08c6.73-.68 44.62-4.42 50.95-4.83" />
      <path d="M27.1 90.61c6.73-.68 40.11-2.73 55.75-3.4 2.37-.1 3.79-.22 4.98.03" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(30.75 18.5)">{"1"}</text>
      <text transform="translate(20.5 28.5)">{"2"}</text>
      <text transform="translate(33.74 40.55)">{"3"}</text>
      <text transform="translate(33.57 62.5)">{"4"}</text>
      <text transform="translate(33.75 86.5)">{"5"}</text>
    </g>
  </svg>
);

export default Kanji巨;
