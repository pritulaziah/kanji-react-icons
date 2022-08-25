import * as React from "react";
import { SVGProps } from "react";

const Kanji少 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M53.46 14c.9.9 1.76 2.23 1.76 4.33 0 12.04-.01 37.2-.01 40.65 0 9.77-6.71 2.04-8.21 1.17" />
      <path d="M36.65 29.04c.12 1.26-.02 2.17-.58 3.32-2.85 5.83-11.53 15.7-18.65 20.56" />
      <path d="M77 30c7.23 2.73 16.13 9.04 19.25 14.5" />
      <path d="M76.75 41c.14 1.34.06 3.54-.79 5.39C68.67 62.17 49.7 86.63 24 98" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(45.5 14.5)">{"1"}</text>
      <text transform="translate(27.5 28.5)">{"2"}</text>
      <text transform="translate(67.5 30.5)">{"3"}</text>
      <text transform="translate(68.5 42.5)">{"4"}</text>
    </g>
  </svg>
);

export default Kanji少;
