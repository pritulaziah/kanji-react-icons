import * as React from "react";
import { SVGProps } from "react";

const Kanji永 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M45.5 13.25c5.12 2.4 8.62 5.75 10.75 9" />
      <path d="M31.75 37.25c1.88.75 4.12 1 6.07.55 3.62-.83 9.41-2.51 13.04-3.35 3-.7 5.16.8 5.16 4.05 0 14.5-.26 45.45-.26 50 0 12-7.02 2.84-8.52 1.7" />
      <path d="M14.25 58.68c1.75.45 3.46.3 5-.02 2.5-.53 12.84-3.54 15.34-4.49 2.5-.95 4.65.77 3.75 2.85C33.5 68.25 25.75 79.75 16 86.37" />
      <path d="M81.22 36.52c-.1 1.11-.78 2.03-1.52 2.7-4.83 4.38-13.96 9.73-21.46 11.92" />
      <path d="M58 52.74c9.88 9.52 20.02 18.85 29.07 24.84 2.01 1.33 4.05 2.66 6.43 3.56" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(36.75 13.5)">{"1"}</text>
      <text transform="translate(23.5 37.5)">{"2"}</text>
      <text transform="translate(6.75 59.5)">{"3"}</text>
      <text transform="translate(72.5 35.5)">{"4"}</text>
      <text transform="translate(67.5 58.5)">{"5"}</text>
    </g>
  </svg>
);

export default Kanji永;
