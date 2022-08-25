import * as React from "react";
import { SVGProps } from "react";

const Kanji志 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M21.61 31.38c2.76.87 6.01.74 8.64.43 13.5-1.57 34.11-3.99 48.01-4.46 2.63-.09 5.55.06 8.14.62" />
      <path d="M52.77 12.25c1.12 1.12 1.83 3.25 1.83 4.64 0 6.61-.09 25.32-.09 32.36" />
      <path d="M28.46 51.82c2.29.43 5.54.38 7.8.11 11.25-1.31 25-2.69 36.87-3.6 2.33-.18 4.82.06 7.13.49" />
      <path d="M19.75 73.5c.36 2.33-3.61 12.64-6.5 16.54" />
      <path d="M32.84 70c10.79 20 23.37 27.44 47.85 26.57 8.93-.32 8.31-3.07 3.29-7.43" />
      <path d="M51.44 63.25c3.18 6.25 7.4 10.87 8.59 5.58" />
      <path d="M81.99 62.78c4.88 2.67 8.88 6.47 12.51 13.37" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(15.5 32.5)">{"1"}</text>
      <text transform="translate(42.5 12.5)">{"2"}</text>
      <text transform="translate(21.5 51.5)">{"3"}</text>
      <text transform="translate(15.5 69.5)">{"4"}</text>
      <text transform="translate(27.5 67.5)">{"5"}</text>
      <text transform="translate(45.5 64.48)">{"6"}</text>
      <text transform="translate(74.5 62.5)">{"7"}</text>
    </g>
  </svg>
);

export default Kanji志;
