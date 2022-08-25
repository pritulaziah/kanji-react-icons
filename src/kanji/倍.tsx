import * as React from "react";
import { SVGProps } from "react";

const Kanji倍 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M33.27 16c.2 1.95-.06 4.51-.7 6.18-4.13 10.66-9.36 20.66-18.81 33.64" />
      <path d="M27.36 39.92c.95 8.88-.66 46.27-.23 54.08" />
      <path d="M58.3 13.75c3.42 2.44 6.41 5.69 9.4 9.75" />
      <path d="M43.5 30.7c1.16.33 2.53.38 3.68.33 6.57-.28 25.57-3.53 35.49-3.77 1.94-.05 3.1.16 4.07.32" />
      <path d="M51 38c4.21 4.38 6.12 8.86 6.5 11.75" />
      <path d="M78.11 33c.66.63.74.94.66 1.46-.53 3.55-4.94 14.32-6.27 17.04" />
      <path d="M38.25 57.3c1.46.39 3.17.54 4.62.39 15.88-1.69 28.88-4.19 47.28-5 2.43-.11 3.89.19 5.1.38" />
      <path d="M49.25 69.64c.42.39.85.72 1.04 1.21 1.46 3.9 2.21 15.65 3.21 22.65" />
      <path d="M51.88 70.78C60.75 69.5 77.5 68 82.44 67.49c1.8-.19 2.89 1.11 2.63 2.21-1.07 4.55-2.82 12.05-4.41 18.35" />
      <path d="M53.7 91.08c5.8-.58 20.8-1.58 28.77-2.47" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(24.75 17.5)">{"1"}</text>
      <text transform="translate(20.5 57.5)">{"2"}</text>
      <text transform="translate(52.5 14.5)">{"3"}</text>
      <text transform="translate(43.5 27.13)">{"4"}</text>
      <text transform="translate(44.5 41.5)">{"5"}</text>
      <text transform="translate(70.5 36.5)">{"6"}</text>
      <text transform="translate(37.5 53.5)">{"7"}</text>
      <text transform="translate(43.5 78.13)">{"8"}</text>
      <text transform="translate(51.75 67.5)">{"9"}</text>
      <text transform="translate(56.5 87.5)">{"10"}</text>
    </g>
  </svg>
);

export default Kanji倍;
