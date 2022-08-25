import * as React from "react";
import { SVGProps } from "react";

const Kanji那 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M14.75 22.25c2.11 1.07 5.63.54 7.89.22 8.42-1.17 18.14-2.8 23.61-3.57 4.26-.6 5.62.72 5.75 5.6.29 11-1.64 48.05-7.03 60.5-4.22 9.75-8.33.34-9.87-.75" />
      <path d="M15 42.14c1.88.76 4.71.52 6.66.23 5.42-.79 12.98-2.38 18.1-3.16 2.01-.3 3.75-.44 5.74.05" />
      <path d="M13 58.89c1.91.78 4.79.5 6.77.21 5.35-.78 13.61-2.51 18.98-3.35 2.1-.33 3.92-.5 6 0" />
      <path d="M30.77 25.28c1.22 1.22 1.36 2.64 1.33 4.84-.35 28-3.98 48.63-22.54 59.63" />
      <path d="M65.42 22.42c1.08.46 2.58.56 3.9.44 6.19-.6 12.56-2.1 16.35-2.94 3.09-.68 4.98 1.62 3.92 4.08-.77 1.79-5.21 9.38-9.33 17.25" />
      <path d="M80.25 41.25c22.5 12 16.25 42.5 1.23 32.16" />
      <path d="M67.33 23.25c.71.71.75 2.08.75 3.37 0 11.99.02 45.21.03 63.01v9.12" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(8.25 21.25)">{"1"}</text>
      <text transform="translate(8.25 42.25)">{"2"}</text>
      <text transform="translate(5.25 60.25)">{"3"}</text>
      <text transform="translate(24.25 31.15)">{"4"}</text>
      <text transform="translate(68.25 20.25)">{"5"}</text>
      <text transform="translate(76.25 50.25)">{"6"}</text>
      <text transform="translate(60.25 31.25)">{"7"}</text>
    </g>
  </svg>
);

export default Kanji那;
