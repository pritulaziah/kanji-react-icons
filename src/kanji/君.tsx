import * as React from "react";
import { SVGProps } from "react";

const Kanji君 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M29.49 20.59c1.88.54 4.04 1.06 6.39.85C48 20.38 65 18.25 73.33 17.75c3.32-.2 5.46 1.31 4.61 4.94-1.44 6.19-3.44 14.19-5.09 24.64" />
      <path d="M14.75 37.39c3.14.21 5.61.5 9.07.17 19.3-1.82 40.55-4.07 62.58-5.81 3.84-.3 6.98.17 8.72.39" />
      <path d="M26.53 52.37c1.73.21 4.86.11 6.91-.11 13.81-1.5 24.31-3 34.53-3.94 2.75-.25 4.99-.25 7.07-.04" />
      <path d="M51.96 22.5c.67 1.38.59 2.42.29 3.5C46.28 47.18 39 69.5 15.75 88.5" />
      <path d="M39.5 66.6c.95.95 1.32 2.26 1.5 3.4 1.09 6.87 1.8 13.94 2.65 21.25.12 1.07.25 2.14.38 3.21" />
      <path d="M41.64 68.46C54 66.5 71.31 64.38 77.69 63.77c2.81-.27 4.56.98 3.9 3.85-1.36 5.88-2.59 10.88-4.67 20.9" />
      <path d="M44.04 92.38c6.29-.63 20.95-2.05 30.6-2.64 1.84-.11 3.49-.19 4.87-.23" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(23.25 21.5)">{"1"}</text>
      <text transform="translate(6.5 38.5)">{"2"}</text>
      <text transform="translate(18.75 53.24)">{"3"}</text>
      <text transform="translate(44.5 29.5)">{"4"}</text>
      <text transform="translate(34.5 80.5)">{"5"}</text>
      <text transform="translate(44.5 64.63)">{"6"}</text>
      <text transform="translate(47.5 88.97)">{"7"}</text>
    </g>
  </svg>
);

export default Kanji君;
