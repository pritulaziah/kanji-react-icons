import * as React from "react";
import { SVGProps } from "react";

const Kanji任 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M34 16.25c.24 2.13-.11 4.16-.83 6-4.43 11.5-10.31 24.11-21.43 38.29" />
      <path d="M27.03 40.25c.73.73 1.27 1.85 1.27 3.24 0 11.45.1 35.22-.02 46.01-.02 1.95-.03 3.57-.03 4.75" />
      <path d="M79.18 16.5c-.18.88-1.17 2.03-1.8 2.53-6.45 5.19-15.29 9.54-31.54 13.78" />
      <path d="M39.2 55.35c2.55.65 5.73.69 8.06.42 12.24-1.4 30.92-3.48 43.25-3.92 2.44-.09 4.92-.22 7.3.42" />
      <path d="M67.29 29.86c.86.86 1.39 2.26 1.39 3.46 0 .93-.18 42.18-.18 50.73" />
      <path d="M46.33 86.03c2.3.47 4.54.3 6.56.19 10.35-.58 23.95-2.19 34.72-2.42 2.08-.04 4.23-.17 6.28.3" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(25.5 16.63)">{"1"}</text>
      <text transform="translate(20.5 59.5)">{"2"}</text>
      <text transform="translate(69.5 16.63)">{"3"}</text>
      <text transform="translate(37.5 52.5)">{"4"}</text>
      <text transform="translate(60.75 40.63)">{"5"}</text>
      <text transform="translate(44.5 82.63)">{"6"}</text>
    </g>
  </svg>
);

export default Kanji任;
