import * as React from "react";
import { SVGProps } from "react";

const Kanji足 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M29.75 18.99c.82.82 1.43 1.68 1.66 2.33 1.15 3.39 3.44 13.48 4.61 18.68.34 1.51.59 2.61.68 3" />
      <path d="M31.56 19.63c12.09-1.87 34.1-5.01 40.27-5.14 2.89-.06 3.98 2.41 3.7 3.88-.73 3.84-3.94 15.23-4.51 17.27" />
      <path d="M37.25 40.74c7.07-.43 20.75-2.48 31.53-3.73 1.71-.2 3.34-.14 4.86-.32" />
      <path d="M52.75 41c.81.81 1.4 1.75 1.4 3.62 0 5.11.37 32.49.35 33.88" />
      <path d="M55.75 59.25c1.19 0 10.5-1.5 17.79-2.72 1.54-.26 2.99-.28 4.21-.28" />
      <path d="M36.49 55c.13 1.5.14 3.05-.2 4.35-2.04 7.78-10.16 24.15-17.79 30.9" />
      <path d="M33.25 70.75C41.75 72.12 67 87.38 82 92.5c2.94 1 6.85 1.68 9.75 2" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(22.5 25.5)">{"1"}</text>
      <text transform="translate(32.5 15.5)">{"2"}</text>
      <text transform="translate(39.5 36.5)">{"3"}</text>
      <text transform="translate(46.5 49.5)">{"4"}</text>
      <text transform="translate(57.5 55.5)">{"5"}</text>
      <text transform="translate(27.5 55.5)">{"6"}</text>
      <text transform="translate(35.25 81.5)">{"7"}</text>
    </g>
  </svg>
);

export default Kanji足;
