import * as React from "react";
import { SVGProps } from "react";

const Katakanaモ = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M27.88 26.19c2.5 1.19 4.33 1.6 7.45 1.35 11.55-.91 21.93-2.16 32.79-3.93 2.62-.42 6.27-.41 8.39-.17" />
      <path d="M17.5 54.38c2.62 1 4.78 1.45 9.12.75C46.88 51.88 60.5 49.75 78.26 49c3.75-.16 7.38.25 11.12.88" />
      <path d="M48.76 29.88c1.12 1.62 1.42 3.62 1.42 6.12 0 6.53-.65 33.56-.65 35.88 0 7.67 3.09 11.08 10.53 11.76 5.33.49 12.31.24 16.37 0 4.46-.26 6.52-.74 9.59-1.43" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(20.88 23.63)">{"1"}</text>
      <text transform="translate(13.38 49.38)">{"2"}</text>
      <text transform="translate(42.13 35.38)">{"3"}</text>
    </g>
  </svg>
);

export default Katakanaモ;
