import * as React from "react";
import { SVGProps } from "react";

const Kanji抄 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M14.5 34.92c2.61.31 4.63.39 7.4-.02 5.08-.75 12.62-2.33 19.09-3.22 1.07-.15 2.39-.42 3.68-.42" />
      <path d="M31.52 12.25c1.05 1.05 1.51 2.62 1.51 4.77 0 15.23-.01 58.71-.01 70.15 0 12.83-6.57 4.28-8.02 2.75" />
      <path d="M15.24 68.26c1.21 1.01 2.76.82 4.01-.26 7.25-6.25 8.5-7.25 19.25-16.83" />
      <path d="M67.21 11c.77.77 1.26 2 1.26 3.58 0 10.12-.01 42.2-.01 45.65 0 9.77-5.46 2.04-6.96 1.17" />
      <path d="M58.16 35.42c.1 1.25-.23 2.25-.8 3.33-3.4 6.5-9.33 15.94-16.94 22.93" />
      <path d="M79.25 34.25c7.33 2.41 17.17 8.59 19 12.34" />
      <path d="M86.37 48.08c.12 1.27-.08 3.06-.76 4.85-6.24 16.44-24.88 37.85-45.11 47.82" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(8.25 36.13)">{"1"}</text>
      <text transform="translate(22.5 13.63)">{"2"}</text>
      <text transform="translate(7.5 72.5)">{"3"}</text>
      <text transform="translate(57.75 11.5)">{"4"}</text>
      <text transform="translate(51.5 31.5)">{"5"}</text>
      <text transform="translate(75.5 31.5)">{"6"}</text>
      <text transform="translate(78.75 48.5)">{"7"}</text>
    </g>
  </svg>
);

export default Kanji抄;
