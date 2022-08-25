import * as React from "react";
import { SVGProps } from "react";

const Kanji矢 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M39.55 11.75c.11 1.35.01 2.63-.39 3.92-2.04 6.63-10.37 20.42-18.66 25.7" />
      <path d="M34.92 31.39c1.83.11 3.39-.16 4.66-.31 6.04-.71 20.92-3.33 29.16-5.29 2.08-.49 3.63-.54 5.26-.29" />
      <path d="M18.95 54.02c2.2.48 5.05.73 7.46.46 20.43-2.24 38.35-4.61 54.2-5.3 1.83-.08 5.47.07 7.68.7" />
      <path d="M52.32 32.29c.43.96.9 1.86.85 3.72-.92 32.5-14.54 48.87-36.42 59.12" />
      <path d="M53.25 53c9.5 12.25 21.9 27.44 30.96 35.6 2.33 2.09 5.17 4.4 8.67 5.78" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(31.5 12.5)">{"1"}</text>
      <text transform="translate(42.5 27.5)">{"2"}</text>
      <text transform="translate(11.25 55.63)">{"3"}</text>
      <text transform="translate(45.5 39.13)">{"4"}</text>
      <text transform="translate(65.5 62.5)">{"5"}</text>
    </g>
  </svg>
);

export default Kanji矢;
