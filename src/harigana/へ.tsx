import * as React from "react";
import { SVGProps } from "react";

const Hariganaへ = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 109 109"
    {...props}
  >
    <path
      d="M15 48.75c2.25 1.62 4.67 1.96 7-.38 3.62-3.62 7.46-6.54 11.25-10.5 5.5-5.75 8.48-4.75 13.12-.88 12.12 10.12 30.38 25.12 33.38 27.38 3 2.26 12.37 10.38 13.87 11.63"
      style={{
        fill: "none",
        stroke: "#000",
        strokeWidth: 3,
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }}
    />
    <text
      transform="translate(9.87 42.75)"
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      {"1"}
    </text>
  </svg>
);

export default Hariganaへ;
