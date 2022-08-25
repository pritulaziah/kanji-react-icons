import * as React from "react";
import { SVGProps } from "react";

const Katakanaヲ = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M30.24 25.14c2.38 1.7 5.11 2.13 9.25 1.7 12.32-1.29 21.94-2.6 30.48-3.64 2.81-.34 5.51-.65 8.14-.93" />
      <path d="M29 46.69c2.25 1.44 4.44 1.9 8.05 1.4 8.19-1.15 19.93-2.64 28.56-3.79 2.38-.31 4.65-.62 6.75-.92" />
      <path d="M78 22.88c.88 2 .62 4.64.12 7C73.24 52.38 54.62 77 34 90.62" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(27 20.38)">{"1"}</text>
      <text transform="translate(25.12 43)">{"2"}</text>
      <text transform="translate(79.25 18.88)">{"3"}</text>
    </g>
  </svg>
);

export default Katakanaヲ;
