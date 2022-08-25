import * as React from "react";
import { SVGProps } from "react";

const Kanji仙 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M32.75 18.14c.13 1.18.09 2.45-.37 3.87-3.13 9.73-9.75 24.23-20.07 37.7" />
      <path d="M25.28 42.75c1.11 1.11 1.51 2.62 1.51 4.73V86c0 3.7-.04 6.8-.04 8.87" />
      <path d="M65.99 17.75c1.38 1.38 1.76 3 1.76 4.99v61.43" />
      <path d="M43.99 60.21c.96.96 1.32 2.42 1.26 4.19-.25 7.35-.5 14.72-1.25 21.38-.24 2.16.63 3.41 2.5 2.97 9.88-2.37 34.25-5.62 46.75-6.15" />
      <path d="M92.24 52.38c1.13 1.13 1.51 2.74 1.51 4.49 0 5.54 0 13.5-.38 24.88-.09 2.63-.12 6.37-.37 10.21" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(23.25 17.5)">{"1"}</text>
      <text transform="translate(18.75 61.55)">{"2"}</text>
      <text transform="translate(55.5 17.5)">{"3"}</text>
      <text transform="translate(39.5 56.5)">{"4"}</text>
      <text transform="translate(83.5 52.5)">{"5"}</text>
    </g>
  </svg>
);

export default Kanji仙;
