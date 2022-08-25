import * as React from "react";
import { SVGProps } from "react";

const Kanji安 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M49.07 13.48c4.46 1 7.93 6.56 8.58 9.38" />
      <path d="M26.67 28.85c0 3.6-3.32 13.5-4.83 15.9" />
      <path d="M28.74 30.98c1.2.07 46.83-4.47 52.93-4.38 9.83.15-.64 7.71-2.17 8.4" />
      <path d="M49.21 38.12c.5 1.43.15 3.24-.25 5.02C47 51.86 43 62.5 35.75 72.48c-1.51 2.08-1.28 3.08-.25 3.1 10.25.24 37.75 9.55 45.25 20.78" />
      <path d="M69.5 49.75c.13 1.17.22 4.01-.26 5.7C65.41 69.14 52.5 90.25 27 98.25" />
      <path d="M15.38 60.47c1.02.36 3.89.41 4.91.36 6.46-.33 49.21-5.46 68.71-5.55 1.7-.01 4.62.33 6 .96" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(43.5 14.5)">{"1"}</text>
      <text transform="translate(18.75 34.63)">{"2"}</text>
      <text transform="translate(30.5 27.5)">{"3"}</text>
      <text transform="translate(41.5 38.5)">{"4"}</text>
      <text transform="translate(64.5 45.5)">{"5"}</text>
      <text transform="translate(7.5 61.5)">{"6"}</text>
    </g>
  </svg>
);

export default Kanji安;
