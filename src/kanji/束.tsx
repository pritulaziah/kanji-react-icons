import * as React from "react";
import { SVGProps } from "react";

const Kanji束 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M24.25 26.39c.94.38 2.66.44 3.6.38 7.9-.52 42.15-5.02 50.61-5.38 1.56-.07 2.5.18 3.29.37" />
      <path d="M27.25 41.57c.4.38.81.7.99 1.18 1.39 3.78 3.05 14.21 4 21" />
      <path d="M29.74 43.64c12.01-1.64 42.14-4.77 46.83-5.15 2.92-.24 4.77 2.45 4 4.64C78.5 49 78 51 76.36 55.49" />
      <path d="M32.42 60.93C44 59.5 67.25 56.75 78.07 56.04" />
      <path d="M51.25 11.25c1.25.5 2 2.25 2.25 3.25s-.25 71.75-.25 78c0 13.5-6.25 2.75-7.25 1.75" />
      <path d="M53.25 59.75C46.78 70.74 29.96 86.28 16.5 92.5" />
      <path d="M54 59.5c5.58 3.88 29.56 22.72 35.63 26.53 2.06 1.29 3.82 1.85 5.87 2.22" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(18.5 27.5)">{"1"}</text>
      <text transform="translate(21.5 49.63)">{"2"}</text>
      <text transform="translate(31.5 40.5)">{"3"}</text>
      <text transform="translate(35.25 57.13)">{"4"}</text>
      <text transform="translate(42.5 12.5)">{"5"}</text>
      <text transform="translate(35.5 71.5)">{"6"}</text>
      <text transform="translate(68.5 67.5)">{"7"}</text>
    </g>
  </svg>
);

export default Kanji束;
