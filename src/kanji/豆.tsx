import * as React from "react";
import { SVGProps } from "react";

const Kanji豆 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M28.38 20.42c2.62.46 5.87.52 8.39.29 8.96-.82 23.61-2.71 36.49-3.24 2.29-.09 4.63.02 6.87.57" />
      <path d="M29.92 38.1c1.08.52 1.83 1.4 2.02 2.26.72 3.22 2.23 9.07 3.8 15.39.33 1.32.66 2.67.99 4.01" />
      <path d="M32.56 39.51c10.07-1.26 31.45-3.67 39.44-4.07 3.71-.19 5.46 1.91 4.42 5.07-1.22 3.72-2.62 6.92-5.58 14.02" />
      <path d="M37.48 58.02c7.32-.55 19.84-1.9 30.15-2.45 1.68-.09 3.29-.17 4.8-.22" />
      <path d="M38.25 69.17c2.58 2.6 6.66 10.68 7.31 14.72" />
      <path d="M69.36 63.81c.13.67.12 1.61-.05 2.34-1.14 4.9-4.14 13.41-8.94 20.1" />
      <path d="M15.13 90.63c2.47.76 6.99.96 9.46.76 20.87-1.63 38.01-2.76 59.03-3.25 4.11-.09 6.58.36 8.64.75" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(21.75 21.13)">{"1"}</text>
      <text transform="translate(24.75 46.5)">{"2"}</text>
      <text transform="translate(34.5 34.63)">{"3"}</text>
      <text transform="translate(39.75 54.13)">{"4"}</text>
      <text transform="translate(32.25 74.5)">{"5"}</text>
      <text transform="translate(60.75 67.63)">{"6"}</text>
      <text transform="translate(9.5 92.5)">{"7"}</text>
    </g>
  </svg>
);

export default Kanji豆;
