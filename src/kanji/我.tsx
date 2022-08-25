import * as React from "react";
import { SVGProps } from "react";

const Kanji我 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M45.99 16.14c.06.38-.2 1.85-.62 2.27-3.75 3.71-9.5 7.96-21.56 13.8" />
      <path d="M15.75 44.95c2.88.68 5.82.43 8.52.1 9.61-1.17 43.59-6.49 60.24-7.8 3.07-.24 5.97-.35 9 .3" />
      <path d="M39.02 27.33c.83.83 1.51 2.04 1.51 4.27 0 14.56-.01 52.4-.01 58.37 0 11.78-5.71 1.75-7.21.5" />
      <path d="M15.62 74.5c1.38.88 3.03.67 4.69-.35 1.62-1 21.43-13.52 29.93-19.15" />
      <path d="M60 12.25c1.12 1.38 1.5 3.38 1.74 6.29 2.89 35.21 8.89 61.71 29.79 75.88 5.93 4.02 6.23 2.08 4.9-5.59" />
      <path d="M84.21 47.14c.09 1 .08 2.39-.43 3.78-3.28 8.82-13.86 27.11-31.47 38.54" />
      <path d="M80.88 16.62c3.22 1.82 8.37 6 9.88 9.12" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(38.5 16.5)">{"1"}</text>
      <text transform="translate(8.25 46.5)">{"2"}</text>
      <text transform="translate(33.75 37.63)">{"3"}</text>
      <text transform="translate(7.5 77.5)">{"4"}</text>
      <text transform="translate(50.5 12.5)">{"5"}</text>
      <text transform="translate(76.75 50.63)">{"6"}</text>
      <text transform="translate(73.5 17.5)">{"7"}</text>
    </g>
  </svg>
);

export default Kanji我;
