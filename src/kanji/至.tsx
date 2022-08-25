import * as React from "react";
import { SVGProps } from "react";

const Kanji至 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M23.6 21.38c1.02.37 2.89.44 3.9.37 14-1 35.5-4 52.56-4.46 1.7-.05 2.72.18 3.57.36" />
      <path d="M47.39 23.25c.6.52.81 2.14.36 2.75-5.25 7-9.5 11.5-16.75 18.25-2.34 2.17-2.5 3.64 1.25 3 8.75-1.5 29.25-5.5 43.04-7.97" />
      <path d="M67.5 30.75C72.53 33.62 80.49 42.54 81.75 47" />
      <path d="M52.42 46.12c.12.23 1.81 1.21 1.77 2.69-.19 8.44.56 36.78.56 39.19" />
      <path d="M30.63 68.45c.98.3 2.78.38 3.76.3 10.11-.75 32.11-2.98 41.3-2.98 1.64 0 2.62.14 3.43.3" />
      <path d="M15.38 90.86c1.52.43 4.31.55 5.82.43 22.3-1.79 40.03-3.53 69.11-3.65 2.53-.01 4.05.2 5.31.42" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(15.75 22.63)">{"1"}</text>
      <text transform="translate(36.5 30.5)">{"2"}</text>
      <text transform="translate(57.75 30.5)">{"3"}</text>
      <text transform="translate(45.75 55.5)">{"4"}</text>
      <text transform="translate(21.75 69.5)">{"5"}</text>
      <text transform="translate(8.5 92.5)">{"6"}</text>
    </g>
  </svg>
);

export default Kanji至;
