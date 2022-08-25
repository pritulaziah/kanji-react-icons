import * as React from "react";
import { SVGProps } from "react";

const Kanji食 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M52.5 10.25c.11.97.44 2.59-.22 3.9C46.89 24.98 30.83 42.17 14 51.5" />
      <path d="M52.75 16.25c5.53 5.21 29.35 22.22 35.46 26.03 2.07 1.29 4.73 1.85 6.79 2.22" />
      <path d="M49.75 28.75c2.75 2 4.75 4.25 6 6" />
      <path d="M39.69 40.41c2.2-.1 23.41-2.54 25.42-2.66 1.67-.1 2.74 1.16 2.61 1.78-.26 1.24-1.22 15.47-1.38 23.12-.02.95-.13 1.36-.13 1.99" />
      <path d="M40.08 51.73c4.42 0 8.92-.7 13.31-1.12 1.48-.14 2.97-.28 4.39-.41" />
      <path d="M39.94 63.9c6.06-.45 17.81-1.65 25.35-2.04" />
      <path d="M37 38.5c1.25.5 2 2.25 2.25 3.25s.53 47.27.25 49.75c-.25 2.25-.75 5.5 2.25 3.75s10.5-7 13-9.25" />
      <path d="M73.75 64c.25 1.25.5 1.5.5 2.75s-5.5 6-7.75 7.75" />
      <path d="M52 71c7.35 2.78 27.04 19.17 31.5 25" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(44.25 10.5)">{"1"}</text>
      <text transform="translate(61.5 19.63)">{"2"}</text>
      <text transform="translate(51.5 26.5)">{"3"}</text>
      <text transform="translate(43.5 37.5)">{"4"}</text>
      <text transform="translate(43.5 49.63)">{"5"}</text>
      <text transform="translate(43.5 61.63)">{"6"}</text>
      <text transform="translate(32.25 51.13)">{"7"}</text>
      <text transform="translate(77.5 63.13)">{"8"}</text>
      <text transform="translate(48.5 78.5)">{"9"}</text>
    </g>
  </svg>
);

export default Kanji食;
