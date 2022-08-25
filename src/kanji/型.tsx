import * as React from "react";
import { SVGProps } from "react";

const Kanji型 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M17.54 22.38c1.11.38 3.15.44 4.27.38 8.24-.43 18.19-1.89 26.67-2.98 1.84-.24 2.97-.07 3.9.12" />
      <path d="M12.61 39.56c1.9.52 3.99.44 5.91.23 7.52-.84 24.67-3.51 33.12-4.47 2.11-.24 4.1-.43 6.21-.08" />
      <path d="M28.06 25.73c.62 1.04.94 2.29.99 3.39C30 49.5 26.5 59.38 17.58 65.46" />
      <path d="M41.84 23.81c.74.74 1.3 2.19 1.3 3.49 0 2.66-.08 18.19-.12 27.07-.01 2.2-.01 4-.01 5.08" />
      <path d="M66.4 20.05c.91.81 1.62 2.2 1.62 4.44 0 4.77-.01 14.36-.02 20.63v4.2" />
      <path d="M86.56 13.58a5.49 5.49 0 0 1 1.62 3.87c0 9.05.02 34.57.02 37.65 0 8.77-4.08 2.34-6.44-.35" />
      <path d="M33.13 70.42c2.37.46 4.68.29 6.87.06 10.41-1.06 21.21-2.06 30.25-2.64 2.18-.14 4.24-.31 6.38.2" />
      <path d="M52.67 53.62c.98.98 2.02 2.77 2.02 4.64 0 11-.11 25.75-.11 30.11" />
      <path d="M17.38 90.48c3.33 1.19 7.09 1.13 10.5.83 14.22-1.27 39.81-2.83 56.25-3.19 3.27-.07 6.53.01 9.75.7" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(10.99 23.5)">{"1"}</text>
      <text transform="translate(5.5 40.56)">{"2"}</text>
      <text transform="translate(20.5 32.98)">{"3"}</text>
      <text transform="translate(35.5 31.41)">{"4"}</text>
      <text transform="translate(58.5 22.5)">{"5"}</text>
      <text transform="translate(77.5 15.5)">{"6"}</text>
      <text transform="translate(25.99 73.18)">{"7"}</text>
      <text transform="translate(46.99 62.6)">{"8"}</text>
      <text transform="translate(10.5 92.5)">{"9"}</text>
    </g>
  </svg>
);

export default Kanji型;
