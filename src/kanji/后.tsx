import * as React from "react";
import { SVGProps } from "react";

const Kanji后 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M70.21 14.14c-.21 1.11-.83 2.48-2.36 3.25-6.9 3.5-16.85 7.1-33.79 11.57" />
      <path d="M28.81 25.5c.84.84 1.22 2.39 1.22 4.01-.12 33.9-5.01 48.97-18.53 57.74" />
      <path d="M33 46.65c2.5.47 6.4.05 9.12-.33 10.77-1.52 31.03-4.09 42.38-5.18 2.61-.25 5.44-.32 8 .24" />
      <path d="M38.25 66.6c.95.95 1.62 2.15 1.88 3.7.89 5.33 1.7 12.41 2.65 19.41.24 1.78.48 3.55.7 5.25" />
      <path d="M40.62 68.71c10.18-1.77 29.01-4.08 36.76-4.95 3.79-.43 5.98 1.3 4.91 5.25-1.66 6.12-2.61 10.22-5.09 18.01" />
      <path d="M43.94 91.13c5.86-.64 21.8-2.11 31.55-3 1.62-.15 3.08-.28 4.32-.38" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(61.25 13.63)">{"1"}</text>
      <text transform="translate(21.75 33.5)">{"2"}</text>
      <text transform="translate(35.5 43.5)">{"3"}</text>
      <text transform="translate(32.25 76.55)">{"4"}</text>
      <text transform="translate(41.5 65.5)">{"5"}</text>
      <text transform="translate(47.5 87.05)">{"6"}</text>
    </g>
  </svg>
);

export default Kanji后;
