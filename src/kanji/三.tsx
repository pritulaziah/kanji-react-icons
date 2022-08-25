import * as React from "react";
import { SVGProps } from "react";

const Kanji三 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M27.5 23.65c3.09.73 6.29.36 9.4.06 10.2-1 27-2.94 38.97-3.57 3.06-.16 6.09-.2 9.14.23" />
      <path d="M28.75 55.14c3.13.76 6.46.43 9.64.2 10.03-.72 23.97-2.63 34.73-3.12 2.7-.12 5.45-.16 8.13.3" />
      <path d="M13 87.83c3.94 1.01 7.72.96 11.75.72 18.41-1.07 41.27-3.39 61.12-4.07 3.63-.13 7.2-.1 10.75.78" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(18 25.78)">{"1"}</text>
      <text transform="translate(18.75 57.13)">{"2"}</text>
      <text transform="translate(3.75 91.63)">{"3"}</text>
    </g>
  </svg>
);

export default Kanji三;
