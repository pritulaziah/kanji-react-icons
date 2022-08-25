import * as React from "react";
import { SVGProps } from "react";

const Katakanaニ = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M32.63 34.69c2.5 1.19 4.33 1.6 7.45 1.35 11.55-.91 18.3-2.41 27.04-3.18 2.64-.23 6.27-.16 8.39.08" />
      <path d="M20 74.88c2.62 1 4.78 1.45 9.12.75 20.25-3.25 36.5-3.88 52.38-3.88 3.75 0 8 1 11.12 2.38" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(26.01 33.13)">{"1"}</text>
      <text transform="translate(15.76 68.5)">{"2"}</text>
    </g>
  </svg>
);

export default Katakanaニ;
