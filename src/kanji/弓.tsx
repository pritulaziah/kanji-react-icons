import * as React from "react";
import { SVGProps } from "react";

const Kanji弓 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M30.12 17.68c1.75.69 4.14.87 6.22.72 8.65-.65 32.36-3.67 36.51-4.41 4.15-.73 5.27 1.01 4.3 3.71-.85 2.37-3.43 9.69-4.31 13.31" />
      <path d="M32.88 35c1.72.49 3.26.61 5 .46 8.37-.71 26.62-2.59 31.16-3.21 1.84-.25 4.09-.5 5.96 0" />
      <path d="M33.68 35.3c.57.57.93 2.32.24 3.93-1.18 2.77-5.39 11.18-7.37 14.46-1.55 2.57-.22 3.83 3.07 3.18 14-2.74 37.8-6.15 47.25-7.66 5.26-.84 5.5 2.16 4.54 6.67-2.29 10.75-10.27 29.08-15.74 36.67-3.92 5.45-10.03-.16-11.92-2.05" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(23.25 19.63)">{"1"}</text>
      <text transform="translate(37.5 32.5)">{"2"}</text>
      <text transform="translate(25.75 39.13)">{"3"}</text>
    </g>
  </svg>
);

export default Kanji弓;
