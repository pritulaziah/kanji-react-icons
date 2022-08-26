import * as React from "react";
import { SVGProps } from "react";

const Hiraganaあ = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M31.01 33c.88.88 2.75 1.82 5.25 1.75 8.62-.25 20-2.12 29.5-4.25 1.51-.34 4.62-.88 6.62-.5" />
      <path d="M49.76 17.62c.88 1 1.82 3.26 1.38 5.25C47.39 39.62 44.89 61 46.01 76.5c.41 5.7 1.88 10.88 3.38 13.62" />
      <path d="M65.63 44.12c.75 1.12 1.16 4.39.5 6.12C61.51 62.5 54.89 74 40.76 86c-6.86 5.83-15.88 3.75-16.25-8.38-.34-10.87 13.38-23.12 32.38-26.74 12.42-2.37 27 1.38 30.5 12.75C91.44 76.81 83.63 90 66.51 94.12" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(22.51 35)">{"1"}</text>
      <text transform="translate(41.51 19)">{"2"}</text>
      <text transform="translate(57.51 42)">{"3"}</text>
    </g>
  </svg>
);

export default Hiraganaあ;
