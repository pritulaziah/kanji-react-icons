import * as React from "react";
import { SVGProps } from "react";

const Kanji否 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M23.56 17.85c3.69.52 6.84.49 9.95.17 10.8-1.12 31.53-2.65 45.12-3.52 3.24-.21 6.62-.27 9.8.42" />
      <path d="M53.22 19.55c.11.85.17 1.78-.47 2.9C48.38 30.12 35.38 44 14.27 54.98" />
      <path d="M52.79 30.78c.78.78 1.26 1.72 1.26 2.92 0 1.99.05 14.33.06 21.67 0 2.95 0 5.1-.01 5.44" />
      <path d="M67.22 33.76c9.41 3.61 19.28 10.49 26.38 17.79" />
      <path d="M30 69.35a6.995 6.995 0 0 1 1.86 3.37c1.26 5.93 2.68 12.5 3.73 19.3.25 1.65.49 3.24.7 4.69" />
      <path d="M32.14 71.21c13.99-1.58 31.73-3.46 42.47-4.25 4.16-.31 6.01 1.5 5.06 5.68-1.07 4.71-1.56 7.65-3.76 17.38" />
      <path d="M36.29 93.63C46.5 93 57.5 92.25 72.25 91.26c2.02-.14 3.96-.19 5.75-.26" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(16.5 18.13)">{"1"}</text>
      <text transform="translate(41.5 27.5)">{"2"}</text>
      <text transform="translate(46.5 42.5)">{"3"}</text>
      <text transform="translate(64.5 31.63)">{"4"}</text>
      <text transform="translate(24.5 78.5)">{"5"}</text>
      <text transform="translate(33.75 67.5)">{"6"}</text>
      <text transform="translate(39.75 90.13)">{"7"}</text>
    </g>
  </svg>
);

export default Kanji否;
