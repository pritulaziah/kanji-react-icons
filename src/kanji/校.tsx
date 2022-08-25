import * as React from "react";
import { SVGProps } from "react";

const Kanji校 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M13.28 41.18c.34.25 2.33.42 3.22.32 3.84-.42 17.66-3.3 23.83-4.54.89-.18 1.12-.25 1.68 0" />
      <path d="M28.24 16.5c.76.45 2.51 3 2.51 5.25 0 .91-.25 62.15-.25 67.75 0 9.75-5.12 2.12-6.5.75" />
      <path d="M29.75 43C25 54.75 21.75 60 15 70" />
      <path d="M33.5 51c1.5 1.75 5.25 4.75 6.75 6.25" />
      <path d="M62.93 15c2.91 1.46 6.95 7.12 7.68 10" />
      <path d="M49.25 32.21c.78.08 2.55.56 3.31.45 6.11-.94 27.25-4.79 35.55-5.03 1.28-.04 1.94.04 2.89.57" />
      <path d="M59.49 39.68c.2.53.56 1.77.1 2.64-1.84 3.43-4.59 6.18-8.34 9.18" />
      <path d="M82.4 41.5c3.49 2.63 5.53 5.46 7.27 8.66" />
      <path d="M79.15 49.43c.42.9.92 1.62.21 3.18C73 66.5 57.25 83.5 44.5 90.75" />
      <path d="M58.7 57.13C67.3 64.95 80.46 81.6 91 89.01c1.98 1.39 3.33 1.51 5 1.65" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(5.5 42.13)">{"1"}</text>
      <text transform="translate(18.75 16.5)">{"2"}</text>
      <text transform="translate(15.75 54.13)">{"3"}</text>
      <text transform="translate(35.5 50.5)">{"4"}</text>
      <text transform="translate(64.5 10.93)">{"5"}</text>
      <text transform="translate(45.5 28.5)">{"6"}</text>
      <text transform="translate(51.5 42.5)">{"7"}</text>
      <text transform="translate(71.5 40.5)">{"8"}</text>
      <text transform="translate(71.5 50.5)">{"9"}</text>
      <text transform="translate(61.5 58.5)">{"10"}</text>
    </g>
  </svg>
);

export default Kanji校;
