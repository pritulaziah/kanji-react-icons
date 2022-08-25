import * as React from "react";
import { SVGProps } from "react";

const Kanji貝 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M31.75 17.8c.68 1.34 1.68 2.34 1.68 4.13s.32 47.81-.5 55.31" />
      <path d="M34.57 19.35c3.87-.22 33.39-3.09 36.92-3.36 2.94-.22 4.51 1.23 4.51 2.91 0 4.09-.87 55.6-.87 56.95" />
      <path d="M33.51 38.26c7.06-.5 14.11-1.33 21.15-2.01 2.17-.21 4.34-.42 6.42-.61" />
      <path d="M33.82 55.24c6.8-.61 14.58-1.3 21.38-1.89 1.88-.16 3.76-.32 5.61-.46" />
      <path d="M33.32 73.74c10.93-.74 31.8-2.68 41.76-2.68" />
      <path d="M41.95 80.5c.55 1.41-.42 2.8-1.5 3.83-3.28 3.11-11.89 9.74-18.45 13.42" />
      <path d="M65.75 80C72.78 84.75 81.08 93.35 83 97.5" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(25.25 26.63)">{"1"}</text>
      <text transform="translate(36.25 15.63)">{"2"}</text>
      <text transform="translate(38.75 34.13)">{"3"}</text>
      <text transform="translate(39.25 50.63)">{"4"}</text>
      <text transform="translate(39.25 70.13)">{"5"}</text>
      <text transform="translate(30.25 84.63)">{"6"}</text>
      <text transform="translate(57.75 84.13)">{"7"}</text>
    </g>
  </svg>
);

export default Kanji貝;
