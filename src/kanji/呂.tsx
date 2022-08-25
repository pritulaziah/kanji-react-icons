import * as React from "react";
import { SVGProps } from "react";

const Kanji呂 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M28.3 17.97c1.02.89 1.54 1.55 1.88 2.93 1.36 5.69 2.52 12.28 3.89 19.26.34 1.73.69 3.47 1.06 5.24" />
      <path d="M30.99 19.31c11.74-1.08 30.48-3.06 38.31-3.74 3.71-.32 5.72.98 4.98 4.71-1.16 5.84-2.16 9.59-4.16 18.73" />
      <path d="M35.6 43.23c5.77-.5 21.08-1.93 31.29-2.74 2.2-.17 4.17-.32 5.75-.42" />
      <path d="M51.58 45.43c.29.94.17 1.82-.58 3.32-1.68 3.36-5.5 9.62-7.81 13.14" />
      <path d="M25.59 64.27c.91 1.11 1.42 2.03 1.64 3.52 1.09 7.14 2.18 14 3.37 21.7.32 2.1.65 4.25.99 6.5" />
      <path d="M27.63 65.88c16.51-1.72 38.75-3.64 48.25-4.29 4.26-.29 6.97 1.54 5.97 6.16-1.46 6.75-2.34 11.5-4.34 22.07" />
      <path d="M32.45 93.64c7.47-.4 27.3-1.81 40.42-2.49 2.75-.14 5.2-.26 7.19-.32" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(23 25.38)">{"1"}</text>
      <text transform="translate(33.67 15.64)">{"2"}</text>
      <text transform="translate(39 39.23)">{"3"}</text>
      <text transform="translate(41 50.82)">{"4"}</text>
      <text transform="translate(19.67 73.08)">{"5"}</text>
      <text transform="translate(29 62.67)">{"6"}</text>
      <text transform="translate(35.67 90.26)">{"7"}</text>
    </g>
  </svg>
);

export default Kanji呂;
