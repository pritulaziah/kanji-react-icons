import * as React from "react";
import { SVGProps } from "react";

const Kanji医 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M17.88 20.29c1.91.51 5.41.64 7.31.51 17.69-1.18 38.69-3.05 58.21-3.51 3.18-.08 5.08.25 6.67.5" />
      <path d="M48.05 26.75c.04.48.07 1.24-.07 1.93-.85 4.08-6.22 14.11-11.57 17.82" />
      <path d="M47.12 38.02c1.17.28 3.33.41 4.48.28 6.77-.8 13.54-1.92 21.98-3.32 1.9-.32 3.64-.32 4.61-.18" />
      <path d="M32.39 56.74c2.47.48 5.17.4 7.67.17 10.06-.92 26.6-2.98 38.22-3.8 2.76-.19 5.72-.24 8.33.07" />
      <path d="M57.92 40.43c.58 1.07.81 2.39.81 3.53.02 17.29-6.48 30.04-22.67 37.22" />
      <path d="M61.03 60.17C66.835 67.884 79.238 77.928 87.25 81" />
      <path d="M21.83 21.46c.67 1.54 1 3.26 1 5.79 0 14.77-.33 47-1.5 60.48-.26 3 1.01 3.97 2.81 3.8 16.11-1.53 44.49-2.91 60.2-2.56 3.32.07 6.12.24 8.17.71" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(19.5 17.5)">{"1"}</text>
      <text transform="translate(39.5 29.5)">{"2"}</text>
      <text transform="translate(53.25 34.63)">{"3"}</text>
      <text transform="translate(26.5 57.5)">{"4"}</text>
      <text transform="translate(51.5 48.5)">{"5"}</text>
      <text transform="translate(68.15 64.39)">{"6"}</text>
      <text transform="translate(15.5 31.63)">{"7"}</text>
    </g>
  </svg>
);

export default Kanji医;
