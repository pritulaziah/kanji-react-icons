import * as React from "react";
import { SVGProps } from "react";

const Kanji昔 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M29.75 31.39c.94.38 2.66.49 3.6.38C39.33 31.11 69 28 76.46 27.89c1.56-.02 2.5.18 3.29.37" />
      <path d="M40.37 18.75c1.09.5 1.74 2.25 1.96 3.25.22 1 .42 16.25 1.17 25.75" />
      <path d="M66.37 13.25c1.09.5 1.74 2.25 1.96 3.25.22 1-2.83 19-4.33 29.25" />
      <path d="M14.25 50.2c1.52.54 4.31.72 5.82.54C34.5 49 71.75 45.25 90.19 45.01c2.53-.03 4.05.26 5.31.53" />
      <path d="M37.02 60.64c.45.83 1.4 2.25 1.4 3.36 0 1.11-.3 30.53-.3 31.08 0 .55.15.55.3 1.67" />
      <path d="M39.17 61.78c2.54-.14 28.22-2.37 30.54-2.54 1.93-.14 3.17 1.54 3.02 2.36-.3 1.67-.45 19.15-.45 31.36 0 1.26-.15 1.8-.15 2.64" />
      <path d="M39.61 76.81c5.18 0 10.41-.62 15.57-.99 1.74-.12 3.48-.25 5.14-.36" />
      <path d="M39.46 93.63c7-.6 22.89-1.19 31.61-1.7" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(22.5 32.5)">{"1"}</text>
      <text transform="translate(31.5 19.5)">{"2"}</text>
      <text transform="translate(56.5 14.5)">{"3"}</text>
      <text transform="translate(6.5 51.5)">{"4"}</text>
      <text transform="translate(30.5 69.5)">{"5"}</text>
      <text transform="translate(39.5 58.63)">{"6"}</text>
      <text transform="translate(42.5 73.63)">{"7"}</text>
      <text transform="translate(42.5 90.13)">{"8"}</text>
    </g>
  </svg>
);

export default Kanji昔;
