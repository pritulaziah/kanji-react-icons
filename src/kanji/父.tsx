import * as React from "react";
import { SVGProps } from "react";

const Kanji父 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M38.49 18.25c.39 1.38.07 2.89-.59 4.16-5.9 11.5-11.58 16.72-19.15 23.21" />
      <path d="M69.38 19.5c7.25 4 14.29 9.68 18.88 15.5" />
      <path d="M67.7 39.68c.55 1.57.31 3.8-.42 5.92C60.63 64.87 48 80.25 23 90.25" />
      <path d="M34.25 47c4.83 0 29 25.38 45.99 37.02 3.54 2.43 7.39 4.55 11.51 5.77" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(30.5 18.5)">{"1"}</text>
      <text transform="translate(61.25 19.5)">{"2"}</text>
      <text transform="translate(57.5 41.5)">{"3"}</text>
      <text transform="translate(34.5 44.63)">{"4"}</text>
    </g>
  </svg>
);

export default Kanji父;
