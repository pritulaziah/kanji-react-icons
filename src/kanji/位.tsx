import * as React from "react";
import { SVGProps } from "react";

const Kanji位 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M32.26 17.5c.22 2-.06 4.62-.76 6.33C27.06 34.75 21.43 45 11.25 58.29" />
      <path d="M26.03 42c1.18 9.11-.82 43.75-.28 51.75" />
      <path d="M56.38 14.75c5.89 3.52 11.04 9.38 13.25 15.25" />
      <path d="M40.09 39.81c.95.3 2.06.34 3 .3 5.35-.26 35.69-4.63 43.77-4.85 1.58-.04 2.53.14 3.31.29" />
      <path d="M49.92 44.52c3.51 14.41 5.1 29.14 5.42 38.64" />
      <path d="M79.57 39.04c.75 1.39.84 2.1.75 3.25-.6 7.89-6.14 32.94-7.64 38.97" />
      <path d="M35.5 86.34c1.19.36 2.58.5 3.76.36 12.93-1.54 39.61-3.91 54.59-4.64 1.98-.1 3.17.17 4.16.35" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(23.5 16.5)">{"1"}</text>
      <text transform="translate(19.5 58.5)">{"2"}</text>
      <text transform="translate(50.5 15.5)">{"3"}</text>
      <text transform="translate(37.5 36.13)">{"4"}</text>
      <text transform="translate(42.5 50.5)">{"5"}</text>
      <text transform="translate(72.5 45.5)">{"6"}</text>
      <text transform="translate(35.5 82.18)">{"7"}</text>
    </g>
  </svg>
);

export default Kanji位;
