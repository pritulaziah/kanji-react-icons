import * as React from "react";
import { SVGProps } from "react";

const Kanji内 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M22.54 33.27c.96 1.3 1.27 2.79 1.27 5.15 0 4.81-.05 33.43.03 47.33.02 3.68.04 6.29.04 7.11" />
      <path d="M24.5 35.25c15.76-1.46 57.65-5.15 59.14-5.15 3.11 0 5.42 1.9 5.42 6.05 0 1.91-.93 42.61-1.51 54.43-.51 10.41-6.79 2.92-9.19.54" />
      <path d="M53.71 11.88c.77.76 1.65 2.41 1.64 4.49-.1 20.13-4.85 43.13-25.71 56.53" />
      <path d="M55.5 45.5c7.7 3.74 19.88 15.39 21.81 21.22" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(16.5 42.13)">{"1"}</text>
      <text transform="translate(25.5 31.5)">{"2"}</text>
      <text transform="translate(44.5 12.5)">{"3"}</text>
      <text transform="translate(59.5 45.5)">{"4"}</text>
    </g>
  </svg>
);

export default Kanji内;
