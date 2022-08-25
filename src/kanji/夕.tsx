import * as React from "react";
import { SVGProps } from "react";

const Kanji夕 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M52.99 13.14c.26 1.61 0 3.47-.49 4.61C49 26 41.38 39.25 27.56 48.97" />
      <path d="M54 23.5c1.75.5 3.47.6 4.78.33 5.22-1.08 10.97-2.58 17.56-4.58 4.26-1.29 6.14.55 4.41 4.53C70 48.5 48.62 78.38 17.75 93" />
      <path d="M45.25 42.62c4.84 2.36 12.04 9.2 13.25 12.88" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(45.5 13.5)">{"1"}</text>
      <text transform="translate(58.5 20.5)">{"2"}</text>
      <text transform="translate(48.5 42.5)">{"3"}</text>
    </g>
  </svg>
);

export default Kanji夕;
