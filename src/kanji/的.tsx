import * as React from "react";
import { SVGProps } from "react";

const Kanji的 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M29.44 15.5c.37.67.42 1.49.34 2.07-.52 3.44-4.97 11.66-9.02 16.28" />
      <path d="M14.5 35.47c.47 1.12.94 1.68.94 3.18 0 1.5 1.31 34.98 1.5 42.35" />
      <path d="M15.72 37.11c2.64-.19 23.24-4.04 25.65-4.26 2.01-.19 3.3 1.25 3.14 2.36-.31 2.25-1.37 31.44-1.61 43.4" />
      <path d="M16.68 56.36c4.26 0 8.7-1.1 12.88-1.76 1.39-.22 2.79-.44 4.14-.64" />
      <path d="M17.71 77.44c7.54-.69 15.04-1.94 23.78-2.14" />
      <path d="M64.64 14.62c.04.8.09 2.06-.09 3.21-1.05 6.77-7.06 21.62-15.29 30.71" />
      <path d="M62.57 33.28c.86.66 2.07.88 3.45.44s20.04-3.52 23.5-3.75c3.46-.22 5.08.72 4.97 5.41-.17 7.73-7.39 45.38-15.85 57.75-2.46 3.6-3.49 1.66-5.53-1.11" />
      <path d="M60.38 53.68c3.35 2.26 8.65 9.31 9.49 12.84" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(33.49 13.63)">{"1"}</text>
      <text transform="translate(8.25 45.13)">{"2"}</text>
      <text transform="translate(15.75 33.13)">{"3"}</text>
      <text transform="translate(20.25 51.13)">{"4"}</text>
      <text transform="translate(21.75 73.63)">{"5"}</text>
      <text transform="translate(69.75 12.13)">{"6"}</text>
      <text transform="translate(69.75 30.13)">{"7"}</text>
      <text transform="translate(60.75 49.63)">{"8"}</text>
    </g>
  </svg>
);

export default Kanji的;
