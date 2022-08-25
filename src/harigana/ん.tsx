import * as React from "react";
import { SVGProps } from "react";

const Hariganaん = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 109 109"
    {...props}
  >
    <path
      d="M56.35 16.5c.75 1.75 1.13 5.83-.38 8.25-7 11.25-27.22 43.47-33.88 54.37-9 14.75-7.62 16.25 1.5 1.25 17.86-29.36 32-23.76 32-6.75 0 25 19 26.5 34.25-5"
      style={{
        fill: "none",
        stroke: "#000",
        strokeWidth: 3,
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }}
    />
    <text
      transform="translate(45.85 15.88)"
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      {"1"}
    </text>
  </svg>
);

export default Hariganaん;
