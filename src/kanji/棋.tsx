import * as React from "react";
import { SVGProps } from "react";

const Kanji棋 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M12.78 38.72c.39.24 2.66.41 3.69.31 4.39-.41 15.2-3.21 22.26-4.41 1.02-.17 2.4-.24 3.04 0" />
      <path d="M28.48 15.5c1.02.47 3.39 2.75 3.39 4.42 0 5.33-.34 68.73-.34 69.58 0 11.25-5.15 2.38-6.28 1.25" />
      <path d="M31.35 40.28c-5.68 15.04-9.85 21.4-18.65 34.56" />
      <path d="M35.18 45.4c2.65 1.59 6 5.76 8.23 8.85" />
      <path d="M47.63 36.84c1.37-.09 3.09-.08 3.83-.16 6.79-.68 31.04-4.18 39.38-4.75 1.23-.08 1.97.16 2.58.33" />
      <path d="M56.32 19.78c.85.48 1.36 2.15 1.53 3.11.17.96 0 43.77-.17 49.74" />
      <path d="M77.47 16c.85.48 1.36 2.15 1.54 3.11.17.96 0 45.64-.17 51.61" />
      <path d="M58.18 47.37c3.43-.26 6.86-.85 10.26-1.32 1.08-.15 2.17-.3 3.2-.44" />
      <path d="M57.99 59.77c3.33-.22 6.66-.77 9.97-1.23 1.03-.14 2.07-.29 3.08-.43" />
      <path d="M43.23 74.68c1.52.07 3.03.08 4.11 0 6.16-.44 34.91-4.69 46.17-4.86 1.79-.03 2.86.24 3.75.49" />
      <path d="M57.23 80.21c.04.34.09.88-.08 1.38-1.02 2.9-6.88 9.27-14.89 13.16" />
      <path d="M75.75 78.75c6.51 2.78 16.81 11.41 18.44 15.73" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(6.5 39.13)">{"1"}</text>
      <text transform="translate(20.5 17.5)">{"2"}</text>
      <text transform="translate(20.5 49.5)">{"3"}</text>
      <text transform="translate(38.5 45.5)">{"4"}</text>
      <text transform="translate(46.5 33.13)">{"5"}</text>
      <text transform="translate(47.25 18.5)">{"6"}</text>
      <text transform="translate(68.25 16.63)">{"7"}</text>
      <text transform="translate(61.5 44.5)">{"8"}</text>
      <text transform="translate(61.5 57.5)">{"9"}</text>
      <text transform="translate(41.5 71.5)">{"10"}</text>
      <text transform="translate(45.5 84.5)">{"11"}</text>
      <text transform="translate(65.5 82.5)">{"12"}</text>
    </g>
  </svg>
);

export default Kanji棋;
