import * as React from "react";
import { SVGProps } from "react";

const Kanji案 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M50.92 9.95c3.11.57 7.07 4.21 7.48 6.22" />
      <path d="M26.85 23.12c0 2.53-3.28 9.63-4.77 11.38" />
      <path d="M29.27 23.7c1.26 0 4.07-.19 5.7-.4 13.97-1.85 43.2-4.91 49.57-5.21 6.37-.29 4.78 1.59 4.56 2.69-.23 1.09-5.22 3.43-6.82 4.05" />
      <path d="M50.4 26.94c.49.83.15 1.91-.24 2.98-1.9 5.24-5.79 11.69-12.86 17.86-1.47 1.29-1.25 1.87-.24 1.85 10-.23 36.85 4.29 44.17 10.67" />
      <path d="M68.67 31.94c.12.68.21 2.34-.23 3.35C64.9 43.45 55 56.75 29.33 62.19" />
      <path d="M13.25 42c1.75-.25.75-.34 2.75-.25 5.5.25 60.75-4.25 74.5-5.5 1.99-.18 2.5-.25 3.75 0" />
      <path d="M23.64 71.4c1.02.16 4.41.19 5.42.06 4.13-.52 32.85-3.17 52.41-3.88 1.71-.06 4.64.03 6.02.33" />
      <path d="M53.09 61.75c.75.5 1.2 2.25 1.35 3.25s-.14 23.25-.14 29.5c0 10-4.67 2.12-6.05.75" />
      <path d="M47 77.25c-2.77 6.21-9.62 16.08-15.75 18.5" />
      <path d="M60 75.75c5.02 2.02 16.67 13.44 19.8 19.41" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(45.49 11.5)">{"1"}</text>
      <text transform="translate(17.5 26.5)">{"2"}</text>
      <text transform="translate(28.5 20.5)">{"3"}</text>
      <text transform="translate(42.5 31.63)">{"4"}</text>
      <text transform="translate(59.5 31.33)">{"5"}</text>
      <text transform="translate(5.25 43.5)">{"6"}</text>
      <text transform="translate(16.5 73.18)">{"7"}</text>
      <text transform="translate(45.75 65.5)">{"8"}</text>
      <text transform="translate(37.5 80.5)">{"9"}</text>
      <text transform="translate(70.5 79.5)">{"10"}</text>
    </g>
  </svg>
);

export default Kanji案;
