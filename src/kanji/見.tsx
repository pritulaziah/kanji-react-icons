import * as React from "react";
import { SVGProps } from "react";

const Kanji見 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M32.5 15.21c.58 1.06 1.43 1.85 1.43 3.27s-.69 43.85-.5 45.27" />
      <path d="M34.9 16.65c3.29-.18 28.35-3.44 31.35-3.65 2.5-.18 4.26.76 4.26 3.3 0 3.96-1.16 43.19-1.16 44.25" />
      <path d="M33.84 31.1c5.93 0 11.98-1.05 17.86-1.69l5.77-.62" />
      <path d="M34.11 44.63c5.67 0 12.4-.93 18.02-1.56 1.75-.2 3.52-.39 5.24-.57" />
      <path d="M33.96 59.66c6.54 0 26.03-2.12 34.49-2.12" />
      <path d="M41.49 66.5c.08.76.17 1.96-.16 3.04-1.93 6.42-12.1 21.72-28.16 29.12" />
      <path d="M54.49 60.37c.74 1.19 1.33 2.59 1.38 4.43.2 8.19.04 7.2.04 19.2s6.23 11.8 18.54 11.53 16.09-1.68 17.45-2.62c2.89-2 2.1-3 2.36-6.5" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(26.5 23.5)">{"1"}</text>
      <text transform="translate(35.5 13.5)">{"2"}</text>
      <text transform="translate(38.25 27.43)">{"3"}</text>
      <text transform="translate(38.25 40.63)">{"4"}</text>
      <text transform="translate(38.25 55.63)">{"5"}</text>
      <text transform="translate(32.5 74.5)">{"6"}</text>
      <text transform="translate(48.5 69.5)">{"7"}</text>
    </g>
  </svg>
);

export default Kanji見;
