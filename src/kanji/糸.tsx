import * as React from "react";
import { SVGProps } from "react";

const Kanji糸 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M51 11c.5 1.5.78 2.65-.25 4.25-4.5 7-13.5 17-18.5 20.5-1.02.72-.99 3.47 0 3.75 5.25 1.5 11 4 15.5 6.75" />
      <path d="M70.75 21c.5.75.2 2.95-.5 3.75C59.5 37 47.25 49 33.5 62.25c-1.66 1.6-1 2.5 1 2 8.36-2.09 31.75-7 42.5-9" />
      <path d="M72.5 47.5c3.71 2.78 9.57 11.43 10.5 15.75" />
      <path d="M53 63.25c.09.26 1.17 1.35 1.26 2.99.4 7.9-.26 25.57-.26 28.26 0 13.25-5 3-6.5 1.5" />
      <path d="M33.23 74.41c.27.82.23 3.53-.27 4.12-3.3 3.85-11.54 11.27-16.21 14.56" />
      <path d="M76.16 73.5C80.54 77.25 88.04 87.25 89.6 91" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(43.5 11.5)">{"1"}</text>
      <text transform="translate(63.5 21.5)">{"2"}</text>
      <text transform="translate(69.5 43.5)">{"3"}</text>
      <text transform="translate(46.5 70.5)">{"4"}</text>
      <text transform="translate(24.5 75.5)">{"5"}</text>
      <text transform="translate(67.5 73.5)">{"6"}</text>
    </g>
  </svg>
);

export default Kanji糸;
