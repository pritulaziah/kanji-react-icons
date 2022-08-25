import * as React from "react";
import { SVGProps } from "react";

const Kanji収 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M32.87 15.75c1.09.5 1.74 2.25 1.96 3.25.22 1 0 72.75-.22 79" />
      <path d="M15.5 32.5c1.5 1.75 1.39 2.5 1.39 5 0 11.82-.45 27.69-.45 29.69s1.65 3.14 3.74 1.64 11.5-7.34 14.28-8.84" />
      <path d="M53.05 30.11c1.32.42 2.96.68 5.64.17 4.19-.79 16.89-4.79 18.75-5.3 2.69-.73 4.45.86 3.48 4.43C74.25 54 67.25 71.38 46.26 86.25" />
      <path d="M49.98 41.91c4.63.87 20.72 23.24 33.14 37.71 2.25 2.62 5 5.12 8.62 7.64" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(23.25 16.63)">{"1"}</text>
      <text transform="translate(8.25 42.13)">{"2"}</text>
      <text transform="translate(52.5 27.5)">{"3"}</text>
      <text transform="translate(55.5 44.5)">{"4"}</text>
    </g>
  </svg>
);

export default Kanji収;
