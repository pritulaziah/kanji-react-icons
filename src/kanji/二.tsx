import * as React from "react";
import { SVGProps } from "react";

const Kanji二 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M25.25 32.4c1.77.37 4.78.56 6.55.37 10.82-1.15 28.82-3.4 41.24-3.76 2.95-.09 4.73.18 6.21.36" />
      <path d="M12 80.75c2.37.5 6.73.67 9.09.5 23.79-1.75 45.04-4.12 67.49-4.74 3.95-.11 6.32.24 8.3.49" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(17.5 33.13)">{"1"}</text>
      <text transform="translate(3.5 81.5)">{"2"}</text>
    </g>
  </svg>
);

export default Kanji二;
