import * as React from "react";
import { SVGProps } from "react";

const Kanji冗 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M22.41 21.19c-.13 5.71-2.54 17.94-4.66 24.06" />
      <path d="M22.97 25.5c17.4-2.25 39.03-7.38 60.22-7.75 12.05-.21 3.56 7.5-.94 11.25" />
      <path d="M39.57 45.25c.97.97 1.14 2.47 1.05 4.19-.75 15.31-6.25 34.81-20.12 45.81" />
      <path d="M41.75 48.65c3.59-.68 14.06-2.51 18.26-3.36 3.9-.79 5.17.28 4.62 4.35-1.09 8.19-2.04 16.72-2.22 28.36-.19 11.64 1.39 14.11 16.18 14.11 15.66 0 16.7-1.11 16.7-8.73" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(15.5 23.5)">{"1"}</text>
      <text transform="translate(27.75 21.5)">{"2"}</text>
      <text transform="translate(31.5 51.05)">{"3"}</text>
      <text transform="translate(44.5 44.5)">{"4"}</text>
    </g>
  </svg>
);

export default Kanji冗;
