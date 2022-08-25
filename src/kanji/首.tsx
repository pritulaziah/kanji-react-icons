import * as React from "react";
import { SVGProps } from "react";

const Kanji首 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M35.75 18c2.84 1.76 7.35 7.23 8.06 9.97" />
      <path d="M70.22 13.68c.02.37.05.95-.05 1.47-.56 3.11-3.78 9.93-8.18 14.1" />
      <path d="M15.88 36.98c1.52.54 4.3.63 5.82.54 15.8-.91 42.05-6.77 66.11-7.23 2.53-.05 4.05.26 5.31.53" />
      <path d="M53.27 35.67c.36.15-.33 2.53-.55 2.95-1.47 2.8-2.97 6.6-6.42 10.27" />
      <path d="M35.31 50.24c.6 1.02 1.48 1.77 1.48 3.13 0 1.35-.4 37.25-.4 37.93 0 .68.2 2.1.4 3.45" />
      <path d="M37.8 50.66c3.41-.17 29.38-3.34 32.48-3.54 2.59-.17 4.63.95 4.41 2.2-.28 1.59-1.01 24.21-1 39.11 0 1.53 0 3.21-.2 4.22" />
      <path d="M37.74 63.77c6.01-.2 12.04-1.04 18.02-1.66 1.81-.19 3.62-.38 5.34-.55" />
      <path d="M38.02 77.43c5.78-.37 12.54-1.11 18.31-1.73 1.59-.17 3.19-.34 4.75-.49" />
      <path d="M38.34 92.13c6.77 0 24.58-2.52 33.35-2.52" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(27.75 16.5)">{"1"}</text>
      <text transform="translate(61.5 13.5)">{"2"}</text>
      <text transform="translate(7.5 37.63)">{"3"}</text>
      <text transform="translate(58.5 40.5)">{"4"}</text>
      <text transform="translate(29.5 57.5)">{"5"}</text>
      <text transform="translate(38.25 48.13)">{"6"}</text>
      <text transform="translate(40.5 60.5)">{"7"}</text>
      <text transform="translate(40.5 75.13)">{"8"}</text>
      <text transform="translate(40.5 88.63)">{"9"}</text>
    </g>
  </svg>
);

export default Kanji首;
