import * as React from "react";
import { SVGProps } from "react";

const Hariganaて = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 109 109"
    {...props}
  >
    <path
      d="M20.5 26.38c1.87 1.62 4.42 1.97 8.12 1.37 21.75-3.5 33-5.12 50.12-8.38 12.34-2.34 13-.88.38 1.38-17.89 3.19-33.78 19.12-33.78 37.62 0 20.5 17.91 30.25 35.16 30.25"
      style={{
        fill: "none",
        stroke: "#000",
        strokeWidth: 3,
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }}
    />
    <text
      transform="translate(16.37 20)"
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      {"1"}
    </text>
  </svg>
);

export default Hariganaて;
