import * as React from "react";
import { SVGProps } from "react";

const Kanji況 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M19.51 18.88c4.67 1.54 12.07 6.32 13.24 8.72" />
      <path d="M14.5 45.62c4.68 1.43 12.08 5.9 13.25 8.12" />
      <path d="M17.31 88.14c1.35.54 2.73.33 3.54-.82C23.82 83.09 29.3 72.91 32 67.5" />
      <path d="M44.16 21.07c.82.82 1.27 1.83 1.45 2.93.66 4.11 1.89 11.96 3.02 18.98.25 1.54.47 3.05.66 4.49" />
      <path d="M46.5 22.28c10-1.41 27.35-3.46 33.58-4.53 2.13-.37 4.09 1.88 3.68 4.16C82.73 27.67 81.3 35 79.9 42.45" />
      <path d="M50.52 45.86c5.44-.4 17.55-1.48 26.73-2.36 1.73-.17 3.34-.32 4.76-.44" />
      <path d="M56.71 51.53c.07.95.17 2.46-.14 3.83C54.38 65 48.38 81.12 32.11 92" />
      <path d="M68.19 47.47c.92.92 1.21 2.09 1.24 4.42.09 6.41-.29 20.12-.29 28.07 0 9.41 1.61 11.26 14.62 11.26 10.87 0 12.49-1.35 12.49-11.55" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(12.75 18.5)">{"1"}</text>
      <text transform="translate(8.25 46.5)">{"2"}</text>
      <text transform="translate(8.5 92.5)">{"3"}</text>
      <text transform="translate(38.25 30.13)">{"4"}</text>
      <text transform="translate(47.25 18.13)">{"5"}</text>
      <text transform="translate(54.75 42.13)">{"6"}</text>
      <text transform="translate(48.75 57.5)">{"7"}</text>
      <text transform="translate(62.5 59.5)">{"8"}</text>
    </g>
  </svg>
);

export default Kanji況;
