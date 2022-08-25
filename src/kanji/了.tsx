import * as React from "react";
import { SVGProps } from "react";

const Kanji了 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M23.78 21.29c3.6.9 6.76.85 10.36.3 10.48-1.6 38.27-5.5 40.43-5.84 3.93-.62 4.68 1.86 2.07 4.08-2.6 2.22-14.89 12.42-21.68 17.44" />
      <path d="M51.94 38.24C61.5 42.5 64.75 70.25 57.89 90c-3.24 9.32-8.64 2.5-10.39.5" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(21.5 17.25)">{"1"}</text>
      <text transform="translate(44.25 41.25)">{"2"}</text>
    </g>
  </svg>
);

export default Kanji了;
