import * as React from "react";
import { SVGProps } from "react";

const Kanji池 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M21.75 19.75c3.88 1.5 10.03 6.17 11 8.5" />
      <path d="M16.75 42.38c3.62 1.48 9.34 6.08 10.25 8.38" />
      <path d="M15.5 89.98c2 .52 3.81-.19 4.75-1.74 2.07-3.41 4.09-7.55 7.25-14.84" />
      <path d="M35 54.06c2.96.91 5.47.57 8.39-.27C54.1 50.68 80.11 40.95 85.5 39c2.63-.95 5.25 0 4.76 2.86-.93 5.4-4.5 18.28-6.26 22.39-2.25 5.25-4.25 3.75-7.25 0" />
      <path d="M65 19c.94.94 1.75 2.62 1.75 3.75 0 5.12-.18 29.87-.37 43.5-.04 2.8-.08 4.93-.13 6" />
      <path d="M45.99 40.12c1.26 1.26 1.77 3.13 1.77 4.85 0 7.07-.63 18.39-.63 26.79 0 17.5 1.62 19.75 24.37 19.75s24.39-2 24.39-13.07" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(14.25 20.5)">{"1"}</text>
      <text transform="translate(8.25 43.5)">{"2"}</text>
      <text transform="translate(6.5 91.5)">{"3"}</text>
      <text transform="translate(33.5 51.5)">{"4"}</text>
      <text transform="translate(56.5 21.5)">{"5"}</text>
      <text transform="translate(40.5 37.5)">{"6"}</text>
    </g>
  </svg>
);

export default Kanji池;
