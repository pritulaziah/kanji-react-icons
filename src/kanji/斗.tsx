import * as React from "react";
import { SVGProps } from "react";

const Kanji斗 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M33.02 20.96c3.52 1.46 9.1 6.02 9.98 8.29" />
      <path d="M26.38 41c3.93 1.37 10.14 5.62 11.12 7.75" />
      <path d="M13 66c3.23 1.08 6.33.69 9.63.28 19.37-2.4 50.82-5.39 66.12-6.88 3.13-.31 5.05-.25 8 .35" />
      <path d="M56 12.5c1.25 1.25 1.75 2.75 1.75 5V99" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(26.25 21.13)">{"1"}</text>
      <text transform="translate(18.75 42.13)">{"2"}</text>
      <text transform="translate(4.5 67.5)">{"3"}</text>
      <text transform="translate(45.5 12.13)">{"4"}</text>
    </g>
  </svg>
);

export default Kanji斗;
