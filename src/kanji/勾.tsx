import * as React from "react";
import { SVGProps } from "react";

const Kanji勾 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M41.99 10.5c0 1.12-.02 2.12-.4 3.41C39.25 22 29.91 39.27 16 49.63" />
      <path d="M38 30.5c3.44.17 6.85 0 10.23-.49 10.79-1.37 34.32-4.56 38.27-4.76 4.81-.24 6.19 1.66 5.25 8.25-.64 4.48-3.76 33.52-11.1 51.89-2.77 6.94-5.51 14.15-12.15 7.11" />
      <path d="M45.42 43.75c.03 1.31-.22 2.53-.95 3.55-5.93 8.26-11.34 16.08-18.08 24.08-2.46 2.92-2.58 4.79 2.02 3.48 10.47-2.99 16.22-4.49 29.84-8.36" />
      <path d="M53.22 55.9c3.63 3.36 9.64 13.83 10.55 19.07" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(34.5 10.5)">{"1"}</text>
      <text transform="translate(44.5 26.5)">{"2"}</text>
      <text transform="translate(37.5 44.5)">{"3"}</text>
      <text transform="translate(54.5 54.5)">{"4"}</text>
    </g>
  </svg>
);

export default Kanji勾;
