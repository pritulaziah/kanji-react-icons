import * as React from "react";
import { SVGProps } from "react";

const Kanji仁 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M32.26 15.75c.36 1.62.19 3.35-.48 5.24C27.5 33.05 21.32 45.87 11.5 60.54" />
      <path d="M24.28 44.25c.8.8 1.26 2.22 1.26 3.48 0 12.15.14 30.73.01 41.77-.03 2.58-.05 4.73-.05 6.25" />
      <path d="M49 36c1.88.5 3.97.52 5.62.34 6.32-.67 19.78-1.91 27.12-2.55 1.93-.17 4.13-.1 6.01.36" />
      <path d="M36.5 77.83c2.6.93 5.92.75 8.62.48 9.77-.97 32.2-2.55 45.38-3.15 2.69-.12 5.61-.03 8.25.53" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(22.5 15.5)">{"1"}</text>
      <text transform="translate(17.5 63.5)">{"2"}</text>
      <text transform="translate(41.25 36.5)">{"3"}</text>
      <text transform="translate(34.5 74.5)">{"4"}</text>
    </g>
  </svg>
);

export default Kanji仁;
