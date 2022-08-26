import * as React from "react";
import { SVGProps } from "react";

const Hiraganaふ = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M42.63 15.62c3.62 3.38 7.5 5.38 12.74 6.13 9.59 1.37 3.5 3.38-1.88 6.12" />
      <path d="M43.63 46.88c1.88 4.62 7.5 9.41 14.25 17.5 10.62 12.74.49 30-19.13 21.62" />
      <path d="M16.5 73.38c.75 4 1.88 8.12 5 10.12 1.16.74.12-3.38 13.25-9.12" />
      <path d="M80.13 61.88c5.12 3.38 10.28 7.49 11.38 8.88 6.75 8.5-.25 4.62-4.62 7.12" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(36.75 13.88)">{"1"}</text>
      <text transform="translate(37.75 43.88)">{"2"}</text>
      <text transform="translate(13.5 67.63)">{"3"}</text>
      <text transform="translate(69.38 59.13)">{"4"}</text>
    </g>
  </svg>
);

export default Hiraganaふ;
