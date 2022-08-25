import * as React from "react";
import { SVGProps } from "react";

const Kanji栄 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M27 19.75c3.05 3.23 6.31 8.88 6.75 10.5" />
      <path d="M49 15.25c1.05 2.19 3.58 7.94 4 11.5" />
      <path d="M78.39 13c.57.74.65 1.68-.15 2.95C76 19.5 73.25 23 69.75 26.5" />
      <path d="M21.82 38.2c-.13 3.81-3.22 13.94-4.32 16.27" />
      <path d="M22.24 41.88c17.26-2.13 44.29-5.18 61.8-6.33 12.21-.8 1.41 7.74-.15 9.05" />
      <path d="M24.75 60.5c.75.25 1.75.86 3.75.75 9-.5 33.25-4.75 49-5 2-.03 2.5-.25 3.75 0" />
      <path d="M51.75 43.75c1.25.5 2 2.25 2.25 3.25s-.25 37.75-.25 44c0 11.25-5.25 3.5-6.5 2.25" />
      <path d="M52.25 58.25C46.04 69.24 29.91 84.78 17 91" />
      <path d="M54.25 58.5c5.21 4.12 28.09 23.6 33.76 27.65 1.92 1.37 3.57 1.96 5.49 2.35" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(18.75 18.13)">{"1"}</text>
      <text transform="translate(40.5 13.63)">{"2"}</text>
      <text transform="translate(69.75 13.5)">{"3"}</text>
      <text transform="translate(13.5 44.5)">{"4"}</text>
      <text transform="translate(24.75 38.5)">{"5"}</text>
      <text transform="translate(16.99 62.76)">{"6"}</text>
      <text transform="translate(42.75 48.5)">{"7"}</text>
      <text transform="translate(35.25 70.63)">{"8"}</text>
      <text transform="translate(68.25 67.63)">{"9"}</text>
    </g>
  </svg>
);

export default Kanji栄;
