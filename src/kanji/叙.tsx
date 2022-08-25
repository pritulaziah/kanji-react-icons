import * as React from "react";
import { SVGProps } from "react";

const Kanji叙 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M32.06 15.75c.08.72.28 1.9-.16 2.89-3.41 7.86-9.28 18.24-21.28 27.61" />
      <path d="M34.38 22.62c5.07 3.03 11.21 7.88 13.88 12.12" />
      <path d="M20.5 44.52c.98.39 3.19.4 4.13.3 4.68-.51 10.39-1.86 14.5-2.35 1.18-.14 2.22-.23 3.37.07" />
      <path d="M12.73 61.42c2.04.72 4.46.29 6.54.1 7.5-.71 14.73-1.64 23.09-3.06 2-.34 3.82-.57 5.82-.32" />
      <path d="M32.04 46.05c.83.83 1.21 2.32 1.21 4.3v36.77c0 10.8-5.96 1.92-7.4.72" />
      <path d="M20.5 71.25c.08 1.15-.08 1.88-.51 2.97-1.55 4.01-4.78 9.47-9.61 15.04" />
      <path d="M41.5 68.75c2.02 2.33 5.21 9.58 5.71 13.2" />
      <path d="M55.57 31.69c1.38.43 3.25.52 6.05.18 6.13-.74 14.87-2.89 17.7-3.88 2.81-.99 4.68.64 3.83 4.23C77.16 57.54 66.5 81.5 45.77 92.5" />
      <path d="M54.51 41.64c3.5 1.06 18.44 25.24 31.37 39.86 2.8 3.16 5.99 7.31 9.85 9.22" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(24.5 16.63)">{"1"}</text>
      <text transform="translate(38.5 23.34)">{"2"}</text>
      <text transform="translate(24.5 41.5)">{"3"}</text>
      <text transform="translate(5.5 61.5)">{"4"}</text>
      <text transform="translate(25.5 54.5)">{"5"}</text>
      <text transform="translate(12.5 71.5)">{"6"}</text>
      <text transform="translate(41.5 67.5)">{"7"}</text>
      <text transform="translate(53.5 28.5)">{"8"}</text>
      <text transform="translate(60.5 44.5)">{"9"}</text>
    </g>
  </svg>
);

export default Kanji叙;
