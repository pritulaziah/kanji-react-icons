import * as React from "react";
import { SVGProps } from "react";

const Kanji厄 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M24.44 19.61c2.71 1.06 6.02.46 8.81.22 13.57-1.21 27.63-2.95 43.5-4.2 2.89-.23 5.78-.24 8.63.43" />
      <path d="M27.96 21.04c.81.81.99 2.33.89 3.96-1.23 21.62-3.48 47.62-18.29 62.46" />
      <path d="M41.25 39.87c2.22.85 4.84.74 7.14.39 8.99-1.38 19.11-3.13 24.66-3.8 3.74-.45 5.74 1.24 5.45 4.04-.62 5.89-3 17.01-5.76 23.94-2.33 5.86-5.49 2.32-7.38.4" />
      <path d="M42.99 40.87c.76.76.97 2 .97 3.98 0 11.99-.09 22.75-.09 30.9 0 14.62 2.62 17.5 22.08 17.5 19.79 0 23.68-2.25 23.68-13.36" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(27.25 16.25)">{"1"}</text>
      <text transform="translate(20.25 29.25)">{"2"}</text>
      <text transform="translate(48.25 37.25)">{"3"}</text>
      <text transform="translate(36.25 45.25)">{"4"}</text>
    </g>
  </svg>
);

export default Kanji厄;
