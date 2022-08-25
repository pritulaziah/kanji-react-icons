import * as React from "react";
import { SVGProps } from "react";

const Kanji符 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M31 14.75c.07.98.05 1.77-.31 2.7-1.98 5.09-5.61 11.73-12.94 19.3" />
      <path d="M30.23 25.29c2.92 0 12.44-2.42 18.27-3.54 1.56-.3 2.87-.49 3.75-.49" />
      <path d="M37.52 27.33c1.6 1.44 4.14 5.9 4.54 8.13" />
      <path d="M64.99 10.5c.07.93-.02 1.62-.36 2.49-1.67 4.3-5.57 10.6-10.62 15.63" />
      <path d="M64.23 21.16c3.65 0 13.43-2.12 20.5-3.09 2.11-.29 3.92-.48 5.14-.48" />
      <path d="M72.78 23.75c.11.62-.02 1.43-.38 1.94-1.16 2.43-2.54 4.63-5.14 7.81" />
      <path d="M37.96 40.5c.18 1.47-.05 2.89-.64 4.14-3.76 8.01-10.15 18.6-18.76 28.34" />
      <path d="M32.05 59.69c1.07 1.07 1.22 2.45 1.22 3.81 0 6.6.04 19.53.06 29 0 2.39.01 4.54.01 6.25" />
      <path d="M45.88 54.67c2.77.75 5.48.39 8.25-.05 8.49-1.34 19.19-2.99 31.24-4.12 2.62-.25 5.64-.26 8.01.31" />
      <path d="M77.25 36.58c1.21 1.21 1.65 2.67 1.65 4.8 0 13.33.02 45.43.02 49.97 0 8.5-5.96 1.63-7.97.23" />
      <path d="M52.79 67.11c2.97 1.94 7.68 7.99 8.42 11.01" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(23.5 15.5)">{"1"}</text>
      <text transform="translate(35.5 21.13)">{"2"}</text>
      <text transform="translate(30.5 33.05)">{"3"}</text>
      <text transform="translate(56.5 11.5)">{"4"}</text>
      <text transform="translate(69.75 17.5)">{"5"}</text>
      <text transform="translate(63.5 30.5)">{"6"}</text>
      <text transform="translate(28.5 42.5)">{"7"}</text>
      <text transform="translate(26.5 74.5)">{"8"}</text>
      <text transform="translate(44.5 51.13)">{"9"}</text>
      <text transform="translate(66.5 42.5)">{"10"}</text>
      <text transform="translate(43.5 69.5)">{"11"}</text>
    </g>
  </svg>
);

export default Kanji符;
