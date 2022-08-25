import * as React from "react";
import { SVGProps } from "react";

const Kanji希 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M67.18 8.43c.07 1.07-.18 2.43-1.16 3.52C57 22 44.5 27.25 24 33" />
      <path d="M36.75 15.25c16 .5 32 5.5 42 13.5" />
      <path d="M52.88 27.75c.11 1.02.35 2.66-.23 4.09-4.4 10.91-15.52 26.78-40.01 39.18" />
      <path d="M13.75 43.32c1.89.54 5.36.66 7.25.54 17.35-1.11 47.17-5.49 68.88-5.98 3.15-.07 5.04.26 6.62.53" />
      <path d="M34.25 60c.94.94 1.34 2.09 1.34 3.21 0 5.35.04 16.35.06 23.29 0 1.86.01 3.42.01 4.51" />
      <path d="M36.34 60.84c3.48-.24 39.04-4.38 41.63-4.53 3.05-.17 4.35.81 4.35 4.53 0 10.42.06 14.54-.78 22.66-.67 6.55-4.88.31-6.04-.88" />
      <path d="M56.49 46.25c.94.94 1.59 2.62 1.59 4.21 0 3.65-.12 30.52-.16 43.79-.01 3.24-.02 5.67-.02 6.75" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(58.5 7.5)">{"1"}</text>
      <text transform="translate(28.5 16.5)">{"2"}</text>
      <text transform="translate(44.5 34.5)">{"3"}</text>
      <text transform="translate(6.5 46.41)">{"4"}</text>
      <text transform="translate(28.5 70.5)">{"5"}</text>
      <text transform="translate(43.5 57.5)">{"6"}</text>
      <text transform="translate(62.5 49.18)">{"7"}</text>
    </g>
  </svg>
);

export default Kanji希;
