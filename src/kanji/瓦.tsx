import * as React from "react";
import { SVGProps } from "react";

const Kanji瓦 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M18.75 19.2c1.52.54 4.3.61 5.82.54 11.18-.49 40.93-4.49 57.61-4.73 2.53-.04 4.05.26 5.31.53" />
      <path d="M38.37 22.25c1.09.5 2.22 2.76 1.96 3.75-2.08 7.75-14.08 53.5-16.08 61" />
      <path d="M41 37.54c1.25.21 2.58.69 3.8.5C48.25 37.5 62 35 65.36 34.25c1.44-.32 3.39 1.5 3.11 3.03-.82 4.49-6.76 26.11-8.27 37.01C57.75 92 63 95 76.33 95.12c8.98.08 15.9-.61 16.15-10.35" />
      <path d="M41.52 53.58c4.16 2.05 10.75 8.44 11.79 11.63" />
      <path d="M14 88.98c.98.77 2.25 2.02 4.35 1.17 7.97-3.23 24.27-8.83 32.4-11.65" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(11.5 19.5)">{"1"}</text>
      <text transform="translate(31.5 28.5)">{"2"}</text>
      <text transform="translate(43.5 34.25)">{"3"}</text>
      <text transform="translate(39.5 50.5)">{"4"}</text>
      <text transform="translate(6.5 94.5)">{"5"}</text>
    </g>
  </svg>
);

export default Kanji瓦;
