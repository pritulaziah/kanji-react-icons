import * as React from "react";
import { SVGProps } from "react";

const Kanji余 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M52.34 10.75c.11.98 0 2.64-.72 3.93C46.38 24 34.25 39 12.75 52.5" />
      <path d="M53.24 14.7c5.39 5.92 22.22 19.05 31.57 26.25 2.81 2.17 7.56 5.17 9.69 6.31" />
      <path d="M37.45 44.7c1.45.59 3.91.65 5.45.53 7.35-.6 16.86-2.32 23.25-3.04 1.73-.2 4.23-.46 5.97-.03" />
      <path d="M25.59 63.37c2.91.5 5.12.39 7.54.1C45.38 62 66.4 60.25 76.76 59.59c2.27-.14 4.43-.24 6.66.24" />
      <path d="M52.71 47c1.02 1.02 1.51 2.5 1.51 4.27 0 19.73-.01 35.91-.01 40.87 0 11.25-6.21 2-7.71.75" />
      <path d="M36.19 74.81c.18 1.38-.26 2.53-1.19 3.6-3.87 4.46-9.74 9.42-20.25 15.72" />
      <path d="M69.71 73.25c6.1 2.94 14.67 11.5 17.04 16.63" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(42.75 15.13)">{"1"}</text>
      <text transform="translate(61.5 18.5)">{"2"}</text>
      <text transform="translate(40.5 42.5)">{"3"}</text>
      <text transform="translate(23.25 60.05)">{"4"}</text>
      <text transform="translate(46.5 55.5)">{"5"}</text>
      <text transform="translate(27.5 76.5)">{"6"}</text>
      <text transform="translate(62.5 73.63)">{"7"}</text>
    </g>
  </svg>
);

export default Kanji余;
