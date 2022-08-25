import * as React from "react";
import { SVGProps } from "react";

const Kanji九 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M41.88 14.38c1 1.38 1.5 3.25 1.5 5.12 0 40.13-9.12 57.5-28.5 68.75" />
      <path d="M13.5 45.75c2.88.85 5.78.05 8.58-.66 8.47-2.14 39.88-9.79 40.92-9.84 2.5-.12 4.75.5 4.25 4.75s-5.5 20.75-7 32.5c-2.23 17.46 2 19.37 18.21 19.37 13.79 0 19.01-1.07 19.27-10.12" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(32.5 14.5)">{"1"}</text>
      <text transform="translate(5.5 46.63)">{"2"}</text>
    </g>
  </svg>
);

export default Kanji九;
