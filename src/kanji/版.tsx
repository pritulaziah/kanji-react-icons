import * as React from "react";
import { SVGProps } from "react";

const Kanji版 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M16.82 22.54c.68 1.21 1.11 2.85 1.12 4.25.3 29.46-.57 46.21-7.35 62.17" />
      <path d="M30.61 17.75c.88.88 1.36 2.47 1.34 3.55-.05 3.41-.05 15.36-.05 18.46" />
      <path d="M18.53 43.7c4.05-.61 12.43-2.22 18.1-3.28 1.21-.23 2.79-.43 4.02-.43" />
      <path d="M18.96 60.41c.19-.02 1.66-.15 2.35-.33 5.01-1.33 8.69-2.09 11.95-2.9 1.74-.43 2.77.66 2.77 2.82 0 .95.13 15.49.06 24.5-.03 4.17-.06 7.26-.06 7.48" />
      <path d="M50.31 25.04c2.32.46 5.2.13 7.42-.28 8.8-1.64 18.5-3.75 26.38-4.75 2.09-.27 3.75-.3 5.76.28" />
      <path d="M53.29 25.68c.7.7 1.22 2.07 1.18 3.34-.6 20.48-2.6 43.23-12.75 58.69" />
      <path d="M57.2 44.69c1.3.35 3.46.38 6.05-.15s16.31-4.56 18.08-5.11c3.04-.94 4.17.9 3.18 4.11C78 64.62 70.12 80.5 48.85 92.26" />
      <path d="M58.74 53.63c2.99.8 16.66 20.17 27.53 30.59 2.08 2 4.1 4.03 6.81 5.61" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(9.75 23.5)">{"1"}</text>
      <text transform="translate(23.5 17.5)">{"2"}</text>
      <text transform="translate(22.5 39.5)">{"3"}</text>
      <text transform="translate(22.33 56.5)">{"4"}</text>
      <text transform="translate(50.5 22.5)">{"5"}</text>
      <text transform="translate(46.5 34.5)">{"6"}</text>
      <text transform="translate(59.5 41.5)">{"7"}</text>
      <text transform="translate(56.5 63.5)">{"8"}</text>
    </g>
  </svg>
);

export default Kanji版;
