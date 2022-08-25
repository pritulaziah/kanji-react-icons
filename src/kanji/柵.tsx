import * as React from "react";
import { SVGProps } from "react";

const Kanji柵 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M11.78 41.72c.35.24 2.39.41 3.31.31 3.94-.41 15.12-1.71 21.45-2.91.92-.17 1.15-.24 1.73 0" />
      <path d="M25.86 15.5c.91.47 1.89 2.25 2.04 4.42.06.95-.3 68.73-.3 69.58 0 11.25-5.1 2-6.35.75" />
      <path d="M27.94 43.53c-5.66 15.15-8.81 21.55-17.58 34.81" />
      <path d="M31.47 52.9c2.22 1.32 5.03 4.85 6.66 8.39" />
      <path d="M47.06 19.84c.69 1.41 1.24 3.06 1.09 5.17-.15 2.13.15 64.46.15 67.99" />
      <path d="M48.15 21.7c5.61-.94 36.42-3.87 37.53-4.2 2.37-.71 4.1 1.72 3.84 2.82-.44 1.88-.41 61.39-.44 66.8-.08 10.88-3.33 5.13-7.29 2.41" />
      <path d="M59.06 23.14c.83.49 1.33 2.21 1.49 3.19.17.98 0 56.11-.17 62.24" />
      <path d="M71.5 19.92c.83.49 1.33 2.21 1.49 3.19.17.98 0 59.08-.17 65.21" />
      <path d="M38 51.47c1.16.53 3.27.53 4.43.53 8.32 0 37.99-3.66 52.02-4.14 1.92-.07 3.08.25 4.04.52" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(5.85 41.5)">{"1"}</text>
      <text transform="translate(16.66 14.5)">{"2"}</text>
      <text transform="translate(17.71 51.5)">{"3"}</text>
      <text transform="translate(31.54 50.35)">{"4"}</text>
      <text transform="translate(40.5 27.33)">{"5"}</text>
      <text transform="translate(50.5 17.5)">{"6"}</text>
      <text transform="translate(53.5 30.5)">{"7"}</text>
      <text transform="translate(65.5 28.5)">{"8"}</text>
      <text transform="translate(38.5 48.53)">{"9"}</text>
    </g>
  </svg>
);

export default Kanji柵;
