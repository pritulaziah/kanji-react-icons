import * as React from "react";
import { SVGProps } from "react";

const Kanji角 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M46.25 12c.06.52.12 1.34-.12 2.08C44.7 18.47 36.49 28.1 25.25 34" />
      <path d="M48 15.5c3 0 17-1.25 20-2.25s4.38 1.41 3 3.25c-4.5 6-9.75 12.25-14.5 18" />
      <path d="M29.88 37c.8.81 1.6 3.07 1.6 3.93 0 3.32-.58 29.01-.73 30.82-1 11.68-3.25 19.25-10 26.5" />
      <path d="M31.75 38.7c3.75-.21 39.68-3.73 42.47-3.96 5-.42 6.78 3.51 6.25 5.96-.28 1.31-.94 33.05-.94 49.93 0 14.37-4.04 5.12-8.54 2.12" />
      <path d="M53.29 37.87c.08.24 1.02 1.25 1.1 2.77.35 7.29-.22 26.38-.22 28.87" />
      <path d="M31.75 54.85c9.5-.35 17.25-1.35 29.34-2.13 1.21-.08 2.41-.22 3.58-.33" />
      <path d="M31.74 71.75c7.92 0 35.31-3 46.85-3" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(39.75 12.13)">{"1"}</text>
      <text transform="translate(51.75 12.13)">{"2"}</text>
      <text transform="translate(23.5 45.5)">{"3"}</text>
      <text transform="translate(36.75 35.5)">{"4"}</text>
      <text transform="translate(46.5 46.63)">{"5"}</text>
      <text transform="translate(34.5 51.13)">{"6"}</text>
      <text transform="translate(34.5 68.5)">{"7"}</text>
    </g>
  </svg>
);

export default Kanji角;
