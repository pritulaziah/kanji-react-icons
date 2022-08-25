import * as React from "react";
import { SVGProps } from "react";

const Kanji冊 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M27.19 18.64c.84.83 1.53 2.36 1.53 4.53 0 2.26-.04 48.62-.05 65.7v6.12" />
      <path d="M29.71 21.29c7.38-.96 41.79-4.54 48.31-5.3 3.17-.37 5.05.76 5.05 4.13 0 2.01-.58 61.86-.58 67.38 0 8.88-4.41 3.16-6.88.69" />
      <path d="M45.37 22.5c.81.81 1.21 2.25 1.21 3.5 0 .69.05 43.47.04 59.25 0 3.4 0 5.55-.01 5.75" />
      <path d="M62.12 20.5c.75.75 1.21 1.75 1.21 3.25 0 2.65.05 44.8.04 61 0 3.7 0 6.04-.01 6.25" />
      <path d="M12.5 53.45c3.02 1.08 7.1.72 10.25.43 16-1.5 45-3.38 66.87-4.03 2.67-.08 5.75.14 8.38.7" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(22.5 28.63)">{"1"}</text>
      <text transform="translate(31.5 17.5)">{"2"}</text>
      <text transform="translate(38.5 30.05)">{"3"}</text>
      <text transform="translate(55.5 28.48)">{"4"}</text>
      <text transform="translate(11.25 49.4)">{"5"}</text>
    </g>
  </svg>
);

export default Kanji冊;
