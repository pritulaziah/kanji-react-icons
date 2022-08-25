import * as React from "react";
import { SVGProps } from "react";

const Kanji租 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M40.5 15.5c.07.34.14.87-.14 1.35-1.62 2.84-10.9 9.08-23.62 12.9" />
      <path d="M12.87 42.58c.3.17 2.62.45 3.43.51 2.24.17 23.56-2.56 29.16-3.41.81-.12 1.02-.17 1.53 0" />
      <path d="M32.33 26.66c1.17.84 1.16 2.86 1.16 3.69 0 5.4-.07 58.71-.07 58.9 0 11.25-5.54 2.12-7.16.5" />
      <path d="M33.68 42.97C28.83 54.78 20.73 69.34 9.75 79" />
      <path d="M36.5 52c3.56 2.04 6.58 6.12 8.5 8.75" />
      <path d="M54.77 25.73c.58.98.96 1.94 1.16 2.9.2.96.43 57.8.35 59.92" />
      <path d="M57.06 26.81c2.23-.1 22.7-2.82 24.36-2.99 2.98-.29 4.11 3.32 3.74 4.71-.35 1.34-.18 38.05-.28 57.15" />
      <path d="M57.14 46.85c4.57-.57 9.15-1.08 13.74-1.54 1.23-.12 2.45-.24 3.64-.35" />
      <path d="M57.59 66.2c4.2-.24 9.39-.64 13.58-.97 1.21-.09 2.44-.19 3.64-.27" />
      <path d="M43.04 89.59c1.19.41 3.38.48 4.57.41 12.42-.69 35.35-2.75 47.84-2.75 1.99 0 3.18.2 4.18.4" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(32.25 13.63)">{"1"}</text>
      <text transform="translate(5.25 43.55)">{"2"}</text>
      <text transform="translate(26.25 36.13)">{"3"}</text>
      <text transform="translate(20.25 54.13)">{"4"}</text>
      <text transform="translate(39.75 52.63)">{"5"}</text>
      <text transform="translate(48.5 35.5)">{"6"}</text>
      <text transform="translate(57.75 23.5)">{"7"}</text>
      <text transform="translate(60.75 43.55)">{"8"}</text>
      <text transform="translate(60.75 62.5)">{"9"}</text>
      <text transform="translate(40.5 86.5)">{"10"}</text>
    </g>
  </svg>
);

export default Kanji租;
