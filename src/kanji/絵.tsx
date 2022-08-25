import * as React from "react";
import { SVGProps } from "react";

const Kanji絵 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M26.37 14.75c.32 1.42.4 2.5-.16 4.02-2.84 7.66-6.21 13.2-9.65 19.61-.46.86-.64 3.28 0 3.55 3.38 1.42 8.12 3.78 11.02 6.38" />
      <path d="M38.43 27.53c.3.64.39 2.75 0 3.43-5.73 10.06-14.28 24.07-22.15 33.25-1.81 2.1.45 3.31 1.62 2.88 4.93-1.79 15.15-4.99 21.48-6.7" />
      <path d="M35.29 52.11c2.56 2.58 6.61 10.59 7.25 14.59" />
      <path d="M11.46 80.14c3.89 3.22 6.87 10.7 7.77 13.61" />
      <path d="M22.6 75.98c4.4 2.79 7.78 9.27 8.81 11.8" />
      <path d="M33.74 71.04c4.27 2.24 7.55 7.43 8.55 9.46" />
      <path d="M67.53 14c.08 1.11.41 2.01-.16 3.44C63.96 25.89 57.5 39.5 46 51.06" />
      <path d="M68.72 19.31c3.78 8.19 19.5 23.16 24.46 27.91 1.39 1.33 3.01 2.1 4.33 2.52" />
      <path d="M56.6 52.22c.55.2 2.35.27 2.89.2 4.59-.53 10.77-2.34 17.25-2.33.91 0 2.25.1 2.71.2" />
      <path d="M47.75 67.86c.91.25 2.58.38 3.47.25 3.67-.49 20.65-3.48 38-3.55 1.51-.01 2.42.12 3.17.25" />
      <path d="M65.62 67.57c.29.79.33 2.81-.23 3.78-2.39 4.15-6.08 9.92-11.86 16.41-1.68 1.89-1.19 3.71 1.59 3.35 5.86-.76 19.47-4.88 29.01-6.66" />
      <path d="M79 76.75c3.44 2.96 8.89 12.15 9.75 16.75" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(20.5 16.5)">{"1"}</text>
      <text transform="translate(36.75 24.13)">{"2"}</text>
      <text transform="translate(35.25 48.13)">{"3"}</text>
      <text transform="translate(5.5 82.5)">{"4"}</text>
      <text transform="translate(16.5 77.5)">{"5"}</text>
      <text transform="translate(27.5 72.5)">{"6"}</text>
      <text transform="translate(59.25 12.13)">{"7"}</text>
      <text transform="translate(74.25 22.63)">{"8"}</text>
      <text transform="translate(57.75 49.63)">{"9"}</text>
      <text transform="translate(48.75 64.63)">{"10"}</text>
      <text transform="translate(51.75 78.13)">{"11"}</text>
    </g>
  </svg>
);

export default Kanji絵;
