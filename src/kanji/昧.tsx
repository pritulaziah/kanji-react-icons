import * as React from "react";
import { SVGProps } from "react";

const Kanji昧 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M13.27 27.44c.39.78.78 1.68.78 2.72 0 1.04-.13 41.29 0 42.34" />
      <path d="M14.69 29.07C19.75 28 27.75 27 31.61 26.24c1.64-.32 2.61 1.44 2.61 2.22 0 4.04-.52 35.79-.52 43.01" />
      <path d="M14.08 49.23c3.4-.37 6.79-.8 10.19-1.21.84-.1 1.68-.21 2.5-.31" />
      <path d="M14.44 70.56C20.5 70 26 69 33.29 68.52" />
      <path d="M48.06 34.52c.8.28 2.27.31 3.07.28 8.34-.32 19.61-3.05 29.03-3.73 1.33-.1 2.14.13 2.81.27" />
      <path d="M39.63 51.5c.81.25 2.71.69 4.87.5 8.5-.75 29.75-3.75 42.33-4.25 2.16-.09 4.21.25 5.56.5" />
      <path d="M62.68 12.25c1.35.5 2.16 2.25 2.43 3.25s-.27 77.22-.27 78.5c0 9.75-5.34 1-6.09.25" />
      <path d="M64.22 51.25c-5.5 11.74-19.04 28.35-30.47 35" />
      <path d="M65.28 51C71 60.5 83 76 90.95 81.87c1.71 1.26 2.79 2.19 4.3 2.63" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(6.5 35.5)">{"1"}</text>
      <text transform="translate(15.5 25.5)">{"2"}</text>
      <text transform="translate(18.5 45.5)">{"3"}</text>
      <text transform="translate(18.5 67.5)">{"4"}</text>
      <text transform="translate(40.5 34.5)">{"5"}</text>
      <text transform="translate(39.5 48.5)">{"6"}</text>
      <text transform="translate(54.5 12.5)">{"7"}</text>
      <text transform="translate(50.5 62.5)">{"8"}</text>
      <text transform="translate(75.5 61.5)">{"9"}</text>
    </g>
  </svg>
);

export default Kanji昧;
