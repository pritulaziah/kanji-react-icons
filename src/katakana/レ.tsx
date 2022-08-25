import * as React from "react";
import { SVGProps } from "react";

const Katakanaレ = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 109 109"
    {...props}
  >
    <path
      d="M34.5 19.75c1.5 1.25 2.38 3.12 2.38 5.38s-.12 50.12-.12 54.12c-.02 8.75-.14 8.63 9.36 3.75 13.23-6.79 33.38-22.5 43.25-33.5"
      style={{
        fill: "none",
        stroke: "#000",
        strokeWidth: 3,
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }}
    />
    <text
      transform="translate(27.87 16.5)"
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      {"1"}
    </text>
  </svg>
);

export default Katakanaレ;
