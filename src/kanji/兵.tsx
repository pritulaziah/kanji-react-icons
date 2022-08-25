import * as React from "react";
import { SVGProps } from "react";

const Kanji兵 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M63.53 13c-.03 1-.73 2.17-1.42 2.86-6.96 7.1-13.96 11.56-27.87 18.68" />
      <path d="M33.18 34.33c1.06 1.06 1.62 2.26 1.77 4.07.55 6.7 1.65 21.04 2.3 27.54" />
      <path d="M36.53 41.82c9.72-1.17 28.09-4.32 39.51-6.15 1.75-.28 4.85-.44 5.96-.25" />
      <path d="M67.87 41.47c.63 1.03.81 2.14.57 3.32-.7 3.46-1.95 8.21-3.95 16.88" />
      <path d="M14.75 67.5c2.48.72 7.04 1 9.5.72 17.37-1.98 35.35-3.97 60.95-5.44 4.12-.24 7.55-.16 10.67.63" />
      <path d="M42.66 76.5c.07.51.04 1.48-.39 2.06C36.91 85.79 28.98 92.42 15 98.25" />
      <path d="M67.25 76.5c7.88 4.25 19.38 14 22.56 20.22" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(67.99 12.13)">{"1"}</text>
      <text transform="translate(27.5 44.5)">{"2"}</text>
      <text transform="translate(43.5 37.5)">{"3"}</text>
      <text transform="translate(59.25 48.13)">{"4"}</text>
      <text transform="translate(7.5 69.13)">{"5"}</text>
      <text transform="translate(33.75 78.13)">{"6"}</text>
      <text transform="translate(59.25 78.13)">{"7"}</text>
    </g>
  </svg>
);

export default Kanji兵;
