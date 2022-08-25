import * as React from "react";
import { SVGProps } from "react";

const Kanji盾 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M68.74 13c.1.35.4 1.02-.21 1.42-7.48 5-19.54 10.09-39.04 14.12" />
      <path d="M26.52 26.25c.56 1.04 1.36 3.35 1.36 5.69 0 21.41 1.37 46.31-16.82 63.28" />
      <path d="M30.39 40.33c1.21.43 3.42.54 4.62.43 15.33-1.4 42.3-5.78 52.88-5.95 2.01-.03 3.21.21 4.22.42" />
      <path d="M55.81 26.38c.6.48 1.88 2.09 2 3.05.12.96-.58 15.46-.7 21.45" />
      <path d="M40.77 52.16c.55.95 1.35 2.16 1.35 3.42s-.37 38.88-.37 39.51" />
      <path d="M41.95 53.9c3.11-.16 27.43-3.46 30.27-3.65 2.36-.16 4.03.76 4.03 3.56 0 1.51.08 37.63-.1 38.57" />
      <path d="M42.98 65.37c5.54-.46 11.09-.86 16.64-1.24 1.57-.11 3.12-.21 4.6-.3" />
      <path d="M42.74 78.14c5.58-.24 11.66-1.14 17.23-1.5 1.52-.1 3.05-.2 4.54-.29" />
      <path d="M42.22 91.88c7.28-.38 25.59-1.42 33.6-1.42" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(58.5 12.13)">{"1"}</text>
      <text transform="translate(19.5 34.5)">{"2"}</text>
      <text transform="translate(33.5 37.5)">{"3"}</text>
      <text transform="translate(48.5 32.5)">{"4"}</text>
      <text transform="translate(34.5 60.5)">{"5"}</text>
      <text transform="translate(44.25 50.5)">{"6"}</text>
      <text transform="translate(47.25 62.5)">{"7"}</text>
      <text transform="translate(47.21 74.98)">{"8"}</text>
      <text transform="translate(47.21 88.4)">{"9"}</text>
    </g>
  </svg>
);

export default Kanji盾;
