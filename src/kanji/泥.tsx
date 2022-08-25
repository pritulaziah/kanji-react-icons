import * as React from "react";
import { SVGProps } from "react";

const Kanji泥 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M21.38 14.5c4.45 1.47 11.5 6.05 12.62 8.34" />
      <path d="M13.38 39.88c4.02 1.65 10.37 6.8 11.38 9.38" />
      <path d="M17.25 86.25c1.25.49 2.52.22 3.27-.99 2.91-4.72 5.83-10.49 8.48-16.5" />
      <path d="M46.28 19.56c1.34.7 3.95 1.08 5.38.94 6.57-.67 25.71-2.43 33.09-3.11 3.71-.34 5.2 1.14 4.25 5.36-.87 3.87-1.29 5.55-2.33 12.19" />
      <path d="M50.65 38.68c3.29-.2 22.63-1.53 33.6-2.2 1.91-.12 3.57-.22 4.84-.31" />
      <path d="M49.15 20.93c1.21 1.21 1.32 3.03 1.24 4.32-1.4 23.25-3.15 46-16.9 64.5" />
      <path d="M88.71 52.48c0 1.15-.64 1.91-1.2 2.4-3.57 3.07-11.95 9.24-20.63 11.75" />
      <path d="M62.4 47.11c1.12 1.12 1.42 2.52 1.42 4.48 0 1.45-.07 26.67-.07 31.16 0 9.67 2.17 11.15 16.25 11.15 13.33 0 14.5-1.74 14.5-11.05" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(12.75 15.13)">{"1"}</text>
      <text transform="translate(5.25 40.55)">{"2"}</text>
      <text transform="translate(8.25 91.48)">{"3"}</text>
      <text transform="translate(51.75 16.63)">{"4"}</text>
      <text transform="translate(54.75 34.55)">{"5"}</text>
      <text transform="translate(41.25 28.48)">{"6"}</text>
      <text transform="translate(81.75 51.13)">{"7"}</text>
      <text transform="translate(54.75 57.13)">{"8"}</text>
    </g>
  </svg>
);

export default Kanji泥;
