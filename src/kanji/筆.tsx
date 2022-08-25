import * as React from "react";
import { SVGProps } from "react";

const Kanji筆 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M30.75 11.07c.08 1.14-.05 2.15-.43 3.24-1.63 4.65-7.22 13.06-13.82 18.26" />
      <path d="M28.73 23.6c2.9 0 12.34-2.23 18.31-3.14 1.34-.2 2.61-.15 3.96-.15" />
      <path d="M35.5 25.44c1.87 1.34 4.84 5.51 5.31 7.59" />
      <path d="M66.26 11.57c.09.84-.03 1.9-.37 2.67-1.14 3.37-3.55 7.75-6.63 11.58" />
      <path d="M66.98 20.72c3.6 0 11.75-1.9 17.78-2.84 1.63-.25 3.22-.48 4.87-.48" />
      <path d="M75.13 22.94c.05.51-.03 1-.23 1.48-.69 1.9-2.73 5.1-5.4 7.15" />
      <path d="M32.75 39.32c1.88.5 3.7.66 6 .5 10.5-.75 26.5-3.25 36.5-3.75 3.25-.16 3.88 1.88 3.25 4-1.18 4.02-3.25 9.25-4.5 16.75" />
      <path d="M16.25 52.07c3.18.25 5.69.37 9.2 0 17.8-1.88 42.39-4.62 62.46-5.25 3.9-.12 7.08.5 8.84.75" />
      <path d="M33.75 61.57c1.41.25 3.95.42 5.62.25 12.38-1.25 21.88-2.62 31.78-3.25 2.25-.14 3.66 0 5.34.25" />
      <path d="M31.25 72.73c1.43.38 4.06.5 5.49.38 12.75-1.05 26.13-2.55 37.12-3.63 2.37-.23 3.82.18 5.01.37" />
      <path d="M20.63 85.29c2.52.54 6.26.79 8.77.54 18.98-1.89 33.6-3.39 50.92-4.48 4.18-.26 6.71.01 8.81.28" />
      <path d="M53.12 30.07c1.25 1.25 1.46 2.75 1.46 3.75 0 .9-.36 45.09-.45 62.25-.01 2.46-.02 4.36-.02 5.5" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(26.25 6.7)">{"1"}</text>
      <text transform="translate(36.75 20.2)">{"2"}</text>
      <text transform="translate(30.75 33.7)">{"3"}</text>
      <text transform="translate(62.25 7.61)">{"4"}</text>
      <text transform="translate(72.75 17.2)">{"5"}</text>
      <text transform="translate(66.75 29.2)">{"6"}</text>
      <text transform="translate(26.25 42.7)">{"7"}</text>
      <text transform="translate(8.25 53.84)">{"8"}</text>
      <text transform="translate(26.25 63.7)">{"9"}</text>
      <text transform="translate(18.75 73.95)">{"10"}</text>
      <text transform="translate(9.75 86.2)">{"11"}</text>
      <text transform="translate(44.25 29.2)">{"12"}</text>
    </g>
  </svg>
);

export default Kanji筆;
