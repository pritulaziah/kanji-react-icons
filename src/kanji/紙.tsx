import * as React from "react";
import { SVGProps } from "react";

const Kanji紙 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M24.37 15.75c.32 1.42.4 2.5-.16 4.02-2.84 7.66-6.21 13.2-9.65 19.61-.46.86-.64 3.28 0 3.55 3.38 1.42 8.12 3.78 11.02 6.38" />
      <path d="M36.43 28.53c.3.64.39 2.75 0 3.43-5.73 10.06-14.28 24.07-22.15 33.25-1.81 2.1.45 3.31 1.62 2.88 4.93-1.79 15.15-4.99 21.48-6.7" />
      <path d="M33.29 53.11c2.56 2.58 6.61 10.59 7.25 14.59" />
      <path d="M9.46 81.14c3.89 3.22 6.87 10.7 7.77 13.61" />
      <path d="M20.6 76.98c4.4 2.79 7.78 9.27 8.81 11.8" />
      <path d="M31.74 72.04c4.27 2.24 7.55 7.43 8.55 9.46" />
      <path d="M79 14.25c.1.47.21 1.2-.2 1.87-2.47 3.94-14.3 11.38-26.39 15.63" />
      <path d="M48.66 31.5c2 .75 3.75 3.5 3.75 5.75s-.66 46.5-.66 50-.25 4.5 3 2S67.41 80 69.41 78.5" />
      <path d="M55.04 51.13c.94.41 2.66.46 3.6.41C65.25 51.25 82 45.5 87.91 46c1.56.13 2.5.2 3.29.4" />
      <path d="M68.91 28.5C70.5 46.75 77.14 79.02 92.5 91c6.2 4.83 5.28-.81 5.28-3.84" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(20.25 13.63)">{"1"}</text>
      <text transform="translate(33.75 25.5)">{"2"}</text>
      <text transform="translate(35.25 51.5)">{"3"}</text>
      <text transform="translate(3.5 83.5)">{"4"}</text>
      <text transform="translate(14.5 78.5)">{"5"}</text>
      <text transform="translate(25.5 74.5)">{"6"}</text>
      <text transform="translate(81.75 12.13)">{"7"}</text>
      <text transform="translate(42.75 40.63)">{"8"}</text>
      <text transform="translate(57.75 46.63)">{"9"}</text>
    </g>
  </svg>
);

export default Kanji紙;
