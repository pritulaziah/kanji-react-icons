import * as React from "react";
import { SVGProps } from "react";

const Kanji言 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M48.38 11.25c4.38 2.5 8.88 7.75 10.38 11.5" />
      <path d="M14.88 33.98c2.52.54 6.91.76 9.42.54 22.95-2.02 40.82-4.02 59.99-4.73 4.2-.16 6.73.26 8.83.53" />
      <path d="M38.63 46.65c1.37.35 2.37.35 3.82.23 7.06-.6 18.6-2.27 22.81-2.6 1.86-.15 3.36-.15 4.74.22" />
      <path d="M37.88 61.4c1.5.23 2.75.35 4.16.23 7.68-.67 20.23-2.28 24.8-2.85 2.16-.27 3.66-.15 5.17.22" />
      <path d="M37 74.75c.81.81 1.4 1.76 1.53 2.77.85 6.73 1.9 11.43 2.89 18.45.18 1.24.35 2.43.54 3.53" />
      <path d="M39.53 76.74c9.24-1.7 22.59-3.37 30.29-4.25 2.21-.25 3.55 1.17 3.24 2.32-.69 2.52-3.74 12.7-4.94 16.98" />
      <path d="M42.2 95.16c6.19-.53 16.55-1.39 25.32-2.22 1.33-.13 2.73-.12 3.95-.12" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(41.25 12.13)">{"1"}</text>
      <text transform="translate(6.75 36.13)">{"2"}</text>
      <text transform="translate(30.75 46.63)">{"3"}</text>
      <text transform="translate(29.25 63.13)">{"4"}</text>
      <text transform="translate(30.5 82.63)">{"5"}</text>
      <text transform="translate(39.5 73.63)">{"6"}</text>
      <text transform="translate(44.5 91.63)">{"7"}</text>
    </g>
  </svg>
);

export default Kanji言;
