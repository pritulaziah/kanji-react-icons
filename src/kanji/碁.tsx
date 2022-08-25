import * as React from "react";
import { SVGProps } from "react";

const Kanji碁 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M26.36 26.48c.96.31 2.71.39 3.67.31 10.41-.89 41.09-3.8 52.53-4.23 1.59-.06 2.55.15 3.35.3" />
      <path d="M40.26 15.16c1.02.43 1.63 1.96 1.84 2.82.2.87 0 29.76-.2 35.2" />
      <path d="M66.54 12.25c1.02.43 1.63 1.96 1.84 2.82s-.94 31.44-1.14 36.87" />
      <path d="M42.49 35.41c4.26-.25 7.52-.77 11.76-1.19 1.36-.14 2.71-.27 4.01-.4" />
      <path d="M42.26 44.08c3.92-.2 7.83-.63 11.73-.98 1.23-.11 2.48-.22 3.7-.32" />
      <path d="M14.5 55.09c1.42.47 4.04.56 5.46.47 12.79-.81 51.21-3.85 67.06-5.05 2.37-.18 3.8.23 4.99.46" />
      <path d="M42.21 54.61c.08.53.31 1.42-.15 2.12-3.59 5.43-12.58 14.25-27.23 20.24" />
      <path d="M64 52.5c3.89 2.78 20.93 15.93 25.16 18.66 1.43.93 2.66 1.32 4.09 1.59" />
      <path d="M39.38 68.27c.62.18 1.75.23 2.36.18 7.72-.63 20.26-1.95 27.98-2.54 1.03-.08 1.64.08 2.16.17" />
      <path d="M49.67 67.93c.08.61.16 1.57-.15 2.44-1.85 5.15-12.02 17.88-27.02 23.38" />
      <path d="M43.04 82.31c.41.31.92 1.05 1 1.47.55 3.01 1.21 8.93 1.99 14.62" />
      <path d="M44.61 83.83c6.18-.6 19.91-3.15 24.13-3.24 1.75-.04 2.84 1.9 2.53 2.77-1.07 3-1.82 6.49-2.72 11.61" />
      <path d="M46.86 96.86c4.94-.31 17.66-1.32 23.97-1.41" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(20.25 25.63)">{"1"}</text>
      <text transform="translate(32.25 15.13)">{"2"}</text>
      <text transform="translate(57.75 12.5)">{"3"}</text>
      <text transform="translate(46.34 32.5)">{"4"}</text>
      <text transform="translate(46.5 41.5)">{"5"}</text>
      <text transform="translate(12.5 51.13)">{"6"}</text>
      <text transform="translate(29.25 64.5)">{"7"}</text>
      <text transform="translate(78.75 61.63)">{"8"}</text>
      <text transform="translate(43.5 65.5)">{"9"}</text>
      <text transform="translate(34.5 78.05)">{"10"}</text>
      <text transform="translate(35.25 95.5)">{"11"}</text>
      <text transform="translate(51.75 79.63)">{"12"}</text>
      <text transform="translate(49.5 93.5)">{"13"}</text>
    </g>
  </svg>
);

export default Kanji碁;
