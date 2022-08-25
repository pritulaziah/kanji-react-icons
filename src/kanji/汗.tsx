import * as React from "react";
import { SVGProps } from "react";

const Kanji汗 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M22 14c5.03 1.65 11.5 5.5 14.25 9.34" />
      <path d="M14.88 38.12c4.54 1.61 11.74 6.62 12.88 9.12" />
      <path d="M16.91 88.2c1.18.49 2.38.22 3.09-.99 2.75-4.7 7.5-13.95 10-19.95" />
      <path d="M45.17 20.87c2.58.76 5.48.28 7.58.01 7.04-.91 20.1-2.54 28.51-3.41 2.37-.24 5.49-.22 7.11.11" />
      <path d="M38.38 46.53c2.66.94 6.27.57 9 .29 11.84-1.24 30-3.25 42.74-3.86 2.62-.13 5.17-.23 7.76.32" />
      <path d="M65.56 22.88c1.03 1.03 1.79 2.62 1.79 4.58 0 3.47-.06 43.64-.08 60.91 0 3.88-.01 6.61-.01 7.5" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(15.75 14.5)">{"1"}</text>
      <text transform="translate(7.5 38.5)">{"2"}</text>
      <text transform="translate(8.5 90.5)">{"3"}</text>
      <text transform="translate(43.5 17.5)">{"4"}</text>
      <text transform="translate(36.5 43.55)">{"5"}</text>
      <text transform="translate(58.5 30.5)">{"6"}</text>
    </g>
  </svg>
);

export default Kanji汗;
