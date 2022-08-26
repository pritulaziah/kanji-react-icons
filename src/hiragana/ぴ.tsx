import * as React from "react";
import { SVGProps } from "react";

const Hiraganaぴ = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M20 25.12c1.25.88 3.75 2.25 6.5 1.38 2.75-.87 7.31-2.38 11.38-4.5 6-3.12 8.42-1.01 4.25 4C15 58.62 18.37 84.5 40.61 88.88c18.07 3.56 37.63-16.38 35.63-56.51-.72-14.5-.17-14.78 4.12-1.75C84.12 42 90.62 51.38 96.5 57.12" />
      <path d="M93.87 22.12c-9.62 0-9.25-14.25 0-14.25 9.75.01 9.5 14.25 0 14.25" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(16.62 20.88)">{"1"}</text>
      <text transform="translate(89.12 29.13)">{"2"}</text>
    </g>
  </svg>
);

export default Hiraganaぴ;
