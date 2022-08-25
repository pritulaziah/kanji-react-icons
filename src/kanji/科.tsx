import * as React from "react";
import { SVGProps } from "react";

const Kanji科 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M41.75 13.75c.06.38.14.97-.13 1.51-1.57 3.19-10.56 10.2-22.87 14.49" />
      <path d="M12.19 41.45c.47.23 1.73.6 2.99.68 3.46.23 22.56-2.39 31.21-3.53 1.25-.16 1.57-.23 2.36 0" />
      <path d="M34.64 25.12c.56.63 1.4 2.83 1.51 4.08.11 1.26-.11 60.37-.11 61.04 0 12.5-5.41 3.12-7.03 1.5" />
      <path d="M35.53 43.13c-4.72 11.96-15.94 27.82-24.28 36.5" />
      <path d="M38.25 46.75c3.46 1.67 8.94 6.87 9.81 9.47" />
      <path d="M59.5 21.5c3.18 1.5 8.2 6.17 9 8.5" />
      <path d="M56.25 41.25c3.62 1.23 9.34 5.08 10.25 7" />
      <path d="M46.75 64.75c.65.25 2.4.93 4.13.75 7.12-.75 33.62-6 43.85-6 1.74 0 2.18-.25 3.26 0" />
      <path d="M77.87 13.25c1.09.5 1.74 2.25 1.96 3.25.22 1 0 75.75-.22 82" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(34.5 12.5)">{"1"}</text>
      <text transform="translate(3.75 42.13)">{"2"}</text>
      <text transform="translate(29.25 34.63)">{"3"}</text>
      <text transform="translate(23.25 51.13)">{"4"}</text>
      <text transform="translate(44.25 48.13)">{"5"}</text>
      <text transform="translate(55.5 18.13)">{"6"}</text>
      <text transform="translate(53.5 39.13)">{"7"}</text>
      <text transform="translate(51.5 61.5)">{"8"}</text>
      <text transform="translate(68.5 9.5)">{"9"}</text>
    </g>
  </svg>
);

export default Kanji科;
