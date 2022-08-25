import * as React from "react";
import { SVGProps } from "react";

const Kanji北 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M13.75 48.75c2 .5 2.5.75 4.5.75s16.75-4 18.5-4" />
      <path d="M36.25 21.5C37.75 23 39 24.75 39 25.75s.25 49.75.25 52.5" />
      <path d="M11.25 87.75c3 2.25 5.29 2.37 7.5 1.25 13.25-6.75 17.5-8.75 24.5-12.5" />
      <path d="M62.75 47.25c5.5-1.5 16.19-3.52 21.75-4.75 2.25-.5 3.5-.5 5-.5" />
      <path d="M60.62 20c.71 1.02 1.66 3 1.66 5.05 0 1.38.24 49.35.24 53.52 0 10.68 9.23 9.68 16.73 9.68 3.81 0 11.28-.2 13.65-3.25 2.37-3.05 2.61-7.45 2.85-10.5" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(7.5 51.5)">{"1"}</text>
      <text transform="translate(27.75 22.5)">{"2"}</text>
      <text transform="translate(3.5 90.5)">{"3"}</text>
      <text transform="translate(66 42.5)">{"4"}</text>
      <text transform="translate(52.5 20.5)">{"5"}</text>
    </g>
  </svg>
);

export default Kanji北;
