import * as React from "react";
import { SVGProps } from "react";

const Kanji牛 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M35.12 21.88c.09 1.35-.18 2.63-.72 3.89-2.43 5.73-7.64 15.99-14.16 21.99" />
      <path d="M31.13 38.67c2.08.21 3.96.02 5.35-.12 12.02-1.17 27.02-3.67 38.51-5.88 2.27-.44 4.72-.57 5.88-.38" />
      <path d="M13.63 63.23c2.39.54 5.96.92 9.18.54 21.66-2.52 36.43-5.39 62.93-6.73 3.98-.2 6.39.01 8.38.28" />
      <path d="M53.31 11.88c1.19 1.12 2.01 2.87 2.01 4.75 0 .78-.07 56.95-.19 76.12-.02 3.09-.04 5.22-.06 6" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(26.25 21.13)">{"1"}</text>
      <text transform="translate(38.5 35.5)">{"2"}</text>
      <text transform="translate(6.5 65.5)">{"3"}</text>
      <text transform="translate(43 12.5)">{"4"}</text>
    </g>
  </svg>
);

export default Kanji牛;
