import * as React from "react";
import { SVGProps } from "react";

const Kanji長 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M38.25 16c11.5-.25 25.2-4.5 27.75-4.5 2 0 2.25 0 3.75.5" />
      <path d="M34 14.75c1.5 1.5 1.5 1.75 1.5 3.25s.5 35 .5 37.25" />
      <path d="M36.25 30c11.5-.25 26.2-4.5 28.75-4.5 2 0 2.26-.02 3.75.5" />
      <path d="M37.5 42.75C49 42.5 60.25 39 64.5 38.5c1.99-.23 3.98-.2 5.5.25" />
      <path d="M10.88 58.98c1.52.54 4.3.63 5.82.54 15.8-.91 50.55-7.52 72.11-8.23 2.53-.08 4.05.26 5.31.53" />
      <path d="M31.75 61.5c1.5 1.75 1.39 2.5 1.39 5 0 11.82-.45 25.19-.45 27.19s1.65 3.14 3.74 1.64c2.09-1.5 17-10.84 19.78-12.34" />
      <path d="M77.02 55.75c.04.33.4 1.58.17 2.02-1.4 2.71-5.79 6.58-12.94 11.98" />
      <path d="M46.25 62.25c8.25 0 34.69 25.9 44.5 29.5C93.1 92.61 94.5 93 97 93.5" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(37.5 12.5)">{"1"}</text>
      <text transform="translate(29.25 24.13)">{"2"}</text>
      <text transform="translate(40.5 25.63)">{"3"}</text>
      <text transform="translate(40.5 39.13)">{"4"}</text>
      <text transform="translate(3.75 59.5)">{"5"}</text>
      <text transform="translate(25.5 69.5)">{"6"}</text>
      <text transform="translate(81.5 61.5)">{"7"}</text>
      <text transform="translate(43.5 71.5)">{"8"}</text>
    </g>
  </svg>
);

export default Kanji長;
