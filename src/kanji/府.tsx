import * as React from "react";
import { SVGProps } from "react";

const Kanji府 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M49.75 11.13c2.15 1.01 6.7 6.28 7.12 8.3" />
      <path d="M20.63 27.23c1.52.54 4.3.63 5.82.54 15.8-.91 39.3-5.02 59.11-5.23 2.53-.03 4.05.26 5.31.53" />
      <path d="M25.49 30c.05 1.36.1 3.52-.1 5.48-1.16 11.55-3.79 39.55-16.34 51.99" />
      <path d="M45.68 33.38c.22 1.56-.06 3.6-.77 4.93-4.54 8.51-10.75 19.22-21.16 29.58" />
      <path d="M37.85 56.03c1.15.47 1.25 1.9 1.25 3.19 0 14.77-.51 30.77-.51 36.8" />
      <path d="M47.45 53.06c1.4.62 3.96.34 5.38.23C63 52.5 78 50.5 91.22 48.86c2.32-.29 3.74.3 4.91.61" />
      <path d="M76.48 31.08c.08.37 1.11 1.94 1.11 4.3 0 17.87.27 51.23.27 55.09 0 11.28-6.27.89-8.21-.31" />
      <path d="M56.61 67.15c2.32 1.55 6.01 6.38 6.59 8.8" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(44.5 12.5)">{"1"}</text>
      <text transform="translate(24.75 24.13)">{"2"}</text>
      <text transform="translate(16.5 36.5)">{"3"}</text>
      <text transform="translate(36.5 36.5)">{"4"}</text>
      <text transform="translate(30.49 70.33)">{"5"}</text>
      <text transform="translate(48.5 50.5)">{"6"}</text>
      <text transform="translate(67.5 34.5)">{"7"}</text>
      <text transform="translate(47.5 66.13)">{"8"}</text>
    </g>
  </svg>
);

export default Kanji府;
