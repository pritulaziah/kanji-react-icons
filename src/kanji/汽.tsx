import * as React from "react";
import { SVGProps } from "react";

const Kanji汽 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M17.75 18.82c3.71 1.43 9.57 5.87 10.5 8.09" />
      <path d="M13.62 41.44c3.93 1.43 10.14 5.9 11.12 8.12" />
      <path d="M14.25 88.27c1.75.79 3.31.36 4.25-1.25 2.75-4.7 5-9.95 7.5-15.95" />
      <path d="M49.91 11.25c.47 1.44.22 3.06-.61 4.83C46.99 21 40.88 31.69 34 38.57" />
      <path d="M48.23 24.94c.77.12 2.45-.02 3.42-.18 7.01-1.14 16.87-3.24 24.97-4.98 1.48-.32 2.88-.59 4.38-.47" />
      <path d="M45.06 37.09c1.61.39 2.94.4 4.57.2 8.37-.99 15.3-2.36 22.25-3.79 1.67-.34 3.61-.69 5.04-.54" />
      <path d="M37.89 51.74c2.31.56 4.03.56 6.37.15 12.09-2.11 23.99-4.68 32.99-6.58 2.55-.54 3.47 1.02 3.2 2.78-3.45 22.73 1.8 35.6 11.89 45.17 5.27 5 5.66 4.3 5.16-6.21" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(9.75 18.7)">{"1"}</text>
      <text transform="translate(5.25 42.7)">{"2"}</text>
      <text transform="translate(6.75 92.2)">{"3"}</text>
      <text transform="translate(50.25 6.7)">{"4"}</text>
      <text transform="translate(56.25 20.2)">{"5"}</text>
      <text transform="translate(47.25 35.2)">{"6"}</text>
      <text transform="translate(39.75 50.2)">{"7"}</text>
    </g>
  </svg>
);

export default Kanji汽;
