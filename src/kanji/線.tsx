import * as React from "react";
import { SVGProps } from "react";

const Kanji線 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M25.37 15.25c.32 1.42.4 2.5-.16 4.02-2.84 7.66-6.21 13.2-9.65 19.61-.46.86-.64 3.28 0 3.55 3.38 1.42 8.12 3.78 11.02 6.38" />
      <path d="M37.43 28.03c.3.64.39 2.75 0 3.43-5.73 10.06-14.28 24.07-22.15 33.25-1.81 2.1.45 3.31 1.62 2.88 4.93-1.79 15.15-4.99 21.48-6.7" />
      <path d="M34.29 52.61c2.56 2.58 6.61 10.59 7.25 14.59" />
      <path d="M10.46 80.64c3.89 3.22 6.87 10.7 7.77 13.61" />
      <path d="M21.6 76.48c4.4 2.79 7.78 9.27 8.81 11.8" />
      <path d="M32.74 71.54c4.27 2.24 7.55 7.43 8.55 9.46" />
      <path d="M66.01 12c.31.46.36 1.04.29 1.47-.44 2.51-4.22 8.73-7.66 12.34" />
      <path d="M50.09 26.47c.55.56 1.03 1.32 1.11 2.1.3 2.94 2.95 18.96 3.18 22.77" />
      <path d="M51.53 27.77c3.13-.26 30.41-3.45 33.26-3.71 2.38-.22 3.87.84 3.43 3.1-.23 1.22-1.98 12.09-4.16 21.03" />
      <path d="M53.14 38.24c3.6-.18 18.5-2.39 23.94-2.67" />
      <path d="M54.44 49.41c9.47-1 21.59-2.4 29.7-2.81" />
      <path d="M66.9 53.17c.05.4.72 2.09.77 4.63.25 12.2-.14 31.7-.16 35.85-.01 2.96-1.24 2.8-2.43 1.52-1.37-1.48-2.49-2.91-3.41-3.96" />
      <path d="M45.75 67.39c1.18.18 2.57.73 3.75.36 1.19-.36 6.45-1.83 8.42-2.55s3.62.57 2.96 2.17C58.22 73.86 49.29 85.75 39.5 90.5" />
      <path d="M87.51 56.5c.07.33.12.9-.13 1.34-2.31 4.1-7.46 9.53-11.63 11.66" />
      <path d="M69 62.75c6 8.76 16.05 20.58 22.75 25.62 1.41 1.06 2.76 1.6 4.05 1.96" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(19.5 14.5)">{"1"}</text>
      <text transform="translate(35.5 25.5)">{"2"}</text>
      <text transform="translate(35.5 50.5)">{"3"}</text>
      <text transform="translate(4.5 81.5)">{"4"}</text>
      <text transform="translate(15.5 77.5)">{"5"}</text>
      <text transform="translate(26.5 73.5)">{"6"}</text>
      <text transform="translate(59.5 10.5)">{"7"}</text>
      <text transform="translate(44.5 36.5)">{"8"}</text>
      <text transform="translate(50.5 24.5)">{"9"}</text>
      <text transform="translate(55.5 35.5)">{"10"}</text>
      <text transform="translate(55.5 46.63)">{"11"}</text>
      <text transform="translate(56.5 58.63)">{"12"}</text>
      <text transform="translate(43.5 64.5)">{"13"}</text>
      <text transform="translate(87.5 54.13)">{"14"}</text>
    </g>
  </svg>
);

export default Kanji線;
