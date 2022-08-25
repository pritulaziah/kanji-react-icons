import * as React from "react";
import { SVGProps } from "react";

const Kanji河 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M21.88 17.38c4.04 1.59 9.86 5.99 10.88 8.47" />
      <path d="M16.62 40c4.1 1.19 10.6 4.9 11.62 6.75" />
      <path d="M15.44 85.78c1.31.55 2.65.3 3.43-.96 2.97-4.74 5.93-10.53 8.63-16.57" />
      <path d="M41.22 23.13c2.78.62 6.17.35 8.78.04 9.61-1.15 28.85-3.66 39-4.6 2.6-.24 4.98-.43 7.53.22" />
      <path d="M43.08 43.57c.8.8 1.4 1.87 1.48 2.92.8 3.45 1.65 9.58 2.32 14.89.23 1.78.43 3.46.61 4.92" />
      <path d="M45.4 45.55c6.98-1.34 14.04-2.86 18.23-3.5 2.6-.4 4.12 1.07 3.78 3.33-.6 4.04-1.04 6.74-2.22 13.1" />
      <path d="M48.39 61.83c3.73-.44 9.92-1.47 15.49-2.29 1.29-.19 2.55-.37 3.74-.53" />
      <path d="M82.66 22.34c1.19 1.19 1.89 2.79 1.89 4.68 0 13.68.05 55.82.05 60.48 0 9-8.21.91-9.39-.27" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(12.75 15.13)">{"1"}</text>
      <text transform="translate(9.75 36.13)">{"2"}</text>
      <text transform="translate(8.25 91.63)">{"3"}</text>
      <text transform="translate(42.75 18.13)">{"4"}</text>
      <text transform="translate(36.75 55.63)">{"5"}</text>
      <text transform="translate(47.25 40.63)">{"6"}</text>
      <text transform="translate(51.49 58.18)">{"7"}</text>
      <text transform="translate(74.25 31.63)">{"8"}</text>
    </g>
  </svg>
);

export default Kanji河;
