import * as React from "react";
import { SVGProps } from "react";

const Kanji中 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M19.89 36.87c1 1 1.74 2.25 2.01 3.65 1.13 5.71 2.58 13.06 4.17 22.97.27 1.68.55 4.43.83 6.26" />
      <path d="M23.33 39.51C37.12 37.62 70.88 34 84 33.24c4.38-.25 6 1.14 5.12 4.42-1.53 5.7-5.61 20.18-6.12 22.09" />
      <path d="M27.74 64.84C40.12 63.62 61.86 62.2 79 60.77c2.36-.2 5.75-.27 7.25-.27" />
      <path d="M52.5 11.5c1.44 1.44 2.25 3.5 2.25 5.06 0 .9.06 56.6-.15 76.69-.03 3.3-.07 5.6-.1 6.5" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(14.5 45.13)">{"1"}</text>
      <text transform="translate(24.5 35.5)">{"2"}</text>
      <text transform="translate(30.5 60.75)">{"3"}</text>
      <text transform="translate(43.5 12.5)">{"4"}</text>
    </g>
  </svg>
);

export default Kanji中;
