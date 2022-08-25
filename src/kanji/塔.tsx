import * as React from "react";
import { SVGProps } from "react";

const Kanji塔 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M11.25 42.85c1.62.4 3.79.18 5.16.01 5.09-.62 12.14-2.36 16.71-3.13 1.31-.22 3.07-.67 4.38-.21" />
      <path d="M24.62 18.5c.94.94 1.21 2.38 1.21 4 0 7.25.03 36 .03 46.75" />
      <path d="M12.25 77.79c1 .83 2.05 1.02 3.75-.29 8.88-6.88 13.25-10.5 21.25-16.75" />
      <path d="M38.82 27.24c2.18.39 3.96.47 5.82.26 9.45-1.07 28.98-3.51 39.73-4.04 2.22-.11 4.47-.28 6.62.39" />
      <path d="M51.75 16.19c.9.9 1.27 2.03 1.38 2.88.5 4.05 1.25 9.3 2.19 15.47" />
      <path d="M74.87 13c.32 1.13.58 1.92.38 3.35-1.12 7.65-2.19 12.03-3.12 17.28" />
      <path d="M63.65 35.77c.07.85-.13 2.03-.65 3.18-3.59 8-11.25 19.42-26.75 32.86" />
      <path d="M63.96 39.54c5.44 4.89 17.22 14.47 23.59 19.43 2.45 1.91 4.9 3.77 7.71 5.12" />
      <path d="M52.2 61.73c1.32.41 3.21.16 4.56 0 5.19-.58 9.24-1.53 15.37-2.17 1.22-.13 2.86-.12 4.08.11" />
      <path d="M49.49 73.8c.67.67 1.13 1.58 1.44 2.78 1.79 7.12 2.26 9.94 3.16 14.65.26 1.36.51 2.83.75 4.55" />
      <path d="M51.57 75.29c10.43-1.41 22.81-3.15 28.45-3.85 2.06-.26 3.3 1.52 3 3.02-1.22 6.22-2.27 10.42-3.59 15.54" />
      <path d="M55.71 93.3c6.39-.51 12.89-1.28 20.8-1.94 1.51-.13 3.05-.24 4.6-.33" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(5.25 44.5)">{"1"}</text>
      <text transform="translate(15.5 18.13)">{"2"}</text>
      <text transform="translate(5.25 83.5)">{"3"}</text>
      <text transform="translate(36.5 24.5)">{"4"}</text>
      <text transform="translate(42.75 15.13)">{"5"}</text>
      <text transform="translate(66.75 12.13)">{"6"}</text>
      <text transform="translate(52.5 45.13)">{"7"}</text>
      <text transform="translate(72.5 44.5)">{"8"}</text>
      <text transform="translate(57.5 58.63)">{"9"}</text>
      <text transform="translate(40.5 82.5)">{"10"}</text>
      <text transform="translate(51.75 71.5)">{"11"}</text>
      <text transform="translate(57.75 90.05)">{"12"}</text>
    </g>
  </svg>
);

export default Kanji塔;
