import * as React from "react";
import { SVGProps } from "react";

const Hariganaび = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M20 25.12c1.25.88 3.75 2.25 6.5 1.38 2.75-.87 7.31-2.38 11.38-4.5 6-3.12 8.42-1.01 4.25 4C15 58.62 18.37 84.5 40.61 88.88c18.07 3.56 37.63-16.38 35.63-56.51-.72-14.5-.17-14.78 4.12-1.75C84.12 42 90.62 51.38 96.5 57.12" />
      <path d="M86.5 13.5c2.75 1.75 6 5.38 7.75 8.5" />
      <path d="M92.87 8.62c3.06 1.57 6.68 4.82 8.62 7.62" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(18.37 17.63)">{"1"}</text>
      <text transform="translate(78.87 12.5)">{"2"}</text>
      <text transform="translate(85 7.38)">{"3"}</text>
    </g>
  </svg>
);

export default Hariganaび;
