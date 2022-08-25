import * as React from "react";
import { SVGProps } from "react";

const Kanji臭 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M55.07 8.95c.38.13-.36 2.33-.59 2.72-1.57 2.57-3.18 6.07-6.89 9.45" />
      <path d="M34.44 22.4c.62.86 1.96 2.5 2.04 3.64.52 7.46 1.27 24.46 2.08 34.52" />
      <path d="M37.51 24.25c3.54-.14 31.5-3.47 34.73-3.64 2.69-.14 4.13 2.78 4.08 3.86-.32 6.78-.82 19.78-2.04 33.02" />
      <path d="M38.45 34.82c6.24-.17 12.49-.92 18.71-1.48 1.88-.17 3.75-.34 5.55-.5" />
      <path d="M38.74 45.35c6-.31 12.48-.84 18.47-1.29 1.66-.12 3.31-.24 4.93-.35" />
      <path d="M39.08 56.76c7.03 0 25.53-2.28 34.63-2.28" />
      <path d="M18.88 72.11c1.62.39 3.45.19 4.51.11 13.36-.97 46.36-3.47 60.36-4.64 1.34-.11 3.5.17 5.25.42" />
      <path d="M53.14 61.25c.11 1 .57 1.73.35 2.92-4.01 21.75-14.48 30.48-36.74 38.58" />
      <path d="M53.75 70.5c7.74 6.45 25.79 22.86 33.51 27.18 2.63 1.47 3.54 1.69 4.74 1.82" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(46.5 8.5)">{"1"}</text>
      <text transform="translate(28.5 30.5)">{"2"}</text>
      <text transform="translate(39.5 20.5)">{"3"}</text>
      <text transform="translate(42.57 32.5)">{"4"}</text>
      <text transform="translate(42.75 43.48)">{"5"}</text>
      <text transform="translate(42.61 54.5)">{"6"}</text>
      <text transform="translate(11.25 72.13)">{"7"}</text>
      <text transform="translate(44.25 66.5)">{"8"}</text>
      <text transform="translate(68.5 79.63)">{"9"}</text>
    </g>
  </svg>
);

export default Kanji臭;
