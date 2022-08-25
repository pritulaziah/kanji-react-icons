import * as React from "react";
import { SVGProps } from "react";

const Kanji邦 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M16.76 31.2c2.16.87 4.82.96 7.12.69 9.61-1.11 16.62-2.54 24.39-3.56 1.71-.22 3.51-.5 5.21-.03" />
      <path d="M18.61 46.71c2.34.69 4.51 1.05 6.89.67 9.67-1.54 14.43-2.67 21.89-3.67 1.51-.2 3.36-.68 4.87-.27" />
      <path d="M13.09 65.81c2.51 1.15 6.3.76 8.91.18 9.5-2.12 17.38-3.74 28.24-4.94 2.56-.28 4.12-.16 5.41.19" />
      <path d="M35.69 12c.97.97 1.17 2.5 1.17 4.72 0 27.15 3.51 64.78-20.55 82.5" />
      <path d="M63.92 20.81c1.96.94 3.48.97 5.46.59 5.45-1.06 14.09-3.3 16.39-4.07 3.24-1.08 6.06 1.49 4.78 4.1C88.5 25.62 84 34.5 80.7 39.87" />
      <path d="M81 40c18.38 12.38 11.62 38.38-.06 28.82" />
      <path d="M66.08 22.25c.9.9 1.07 2 1.07 3.75 0 12.2.06 52.5.06 64.75 0 4.05-.05 7.31-.09 8.38" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(10.5 31.5)">{"1"}</text>
      <text transform="translate(11.5 47.5)">{"2"}</text>
      <text transform="translate(5.5 67.5)">{"3"}</text>
      <text transform="translate(27.5 13.5)">{"4"}</text>
      <text transform="translate(67.5 18.5)">{"5"}</text>
      <text transform="translate(75.5 49.5)">{"6"}</text>
      <text transform="translate(58.5 29.5)">{"7"}</text>
    </g>
  </svg>
);

export default Kanji邦;
