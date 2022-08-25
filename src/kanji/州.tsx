import * as React from "react";
import { SVGProps } from "react";

const Kanji州 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M20 42.75c-.02 5.98-1.27 10.26-5.69 15.13" />
      <path d="M29.24 20.93c1.11 1.11 1.6 2.82 1.62 4.89C31.38 71.75 26 79 13.56 90.49" />
      <path d="M41.38 43.62c2.39 2.13 6.17 8.77 6.77 12.09" />
      <path d="M56 17.88c1.12 1.12 1.66 2.87 1.66 4.15 0 .6-.04 40.61-.1 56.84-.01 3.38-.03 5.74-.04 6.51" />
      <path d="M68.75 42c2.96 2.42 7.65 9.95 8.39 13.72" />
      <path d="M87.31 17.13c1.28 1.28 2.01 2.87 2.01 5 0 3.28-.07 48.91-.18 66.49-.02 3.17-.04 5.4-.07 6.26" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(14.25 42.13)">{"1"}</text>
      <text transform="translate(21.5 21.5)">{"2"}</text>
      <text transform="translate(36.5 40.5)">{"3"}</text>
      <text transform="translate(47.5 18.5)">{"4"}</text>
      <text transform="translate(64.5 39.5)">{"5"}</text>
      <text transform="translate(78.5 18.5)">{"6"}</text>
    </g>
  </svg>
);

export default Kanji州;
