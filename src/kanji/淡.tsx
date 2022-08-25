import * as React from "react";
import { SVGProps } from "react";

const Kanji淡 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M22.13 18.12c3.66 1.32 9.45 5.42 10.37 7.47" />
      <path d="M14.62 42.5c3.93 1.23 10.14 5.08 11.12 7" />
      <path d="M13.5 88.51c1.25.74 2.78.36 3.74-.81 3.53-4.27 6.63-9.33 10.51-15.2" />
      <path d="M43.21 22.17c2.58 1.97 6.32 7.54 7.03 9.51" />
      <path d="M81.27 18.59c.11.91-.38 1.8-1 2.57-.62.77-5.77 4.96-9.75 7.23" />
      <path d="M60.85 13.75c.59.97.58 2.16.54 3.25-.66 19.72-8 28.6-20.34 33.86" />
      <path d="M60.17 32.25C68.5 37.5 77 43.62 83.12 47.38 85.7 48.96 88 50.26 92 51.26" />
      <path d="M43.87 59.84c3.49 2.13 8.58 8.16 9.53 10.28" />
      <path d="M82.33 55.97c.05.78-.21 1.47-.83 2.38-.62.91-7.07 6.65-10.18 8.76" />
      <path d="M63.31 52.66c.47 1.06.47 2.45.43 3.17C62.25 80.5 50.75 90.25 37.5 95.25" />
      <path d="M63.26 68.26c8.2 8.5 14.87 15.36 22.08 21.42 2.51 2.11 4.54 3.57 7.67 5.26" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(14.5 19.5)">{"1"}</text>
      <text transform="translate(6.75 43.55)">{"2"}</text>
      <text transform="translate(5.5 92.5)">{"3"}</text>
      <text transform="translate(35.25 19.63)">{"4"}</text>
      <text transform="translate(71.5 17.5)">{"5"}</text>
      <text transform="translate(51.75 12.13)">{"6"}</text>
      <text transform="translate(72.75 37.5)">{"7"}</text>
      <text transform="translate(35.25 60.5)">{"8"}</text>
      <text transform="translate(73.5 56.5)">{"9"}</text>
      <text transform="translate(50.25 55.5)">{"10"}</text>
      <text transform="translate(75.75 78.13)">{"11"}</text>
    </g>
  </svg>
);

export default Kanji淡;
