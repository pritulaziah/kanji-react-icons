import * as React from "react";
import { SVGProps } from "react";

const Kanji工 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M28.25 31.97c2.28.53 4.93.8 7.34.53 12.41-1.38 27.81-4 41.59-4.54 2.4-.09 4.58.1 6.56.54" />
      <path d="M52.87 32.75c1.25 1.25 1.77 3.03 1.77 5.3 0 7.2-.07 32.83-.07 41.45" />
      <path d="M15.5 83.05c2.26.33 5.6.75 8.84.51 17.03-1.3 43.16-4.3 60.65-5.03 3.84-.16 8.46.53 10.38 1.03" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(21.25 32.63)">{"1"}</text>
      <text transform="translate(45.75 42.5)">{"2"}</text>
      <text transform="translate(7.5 84.5)">{"3"}</text>
    </g>
  </svg>
);

export default Kanji工;
