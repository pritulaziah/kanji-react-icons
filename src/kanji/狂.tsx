import * as React from "react";
import { SVGProps } from "react";

const Kanji狂 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M38.8 18c.07.59.31 1.73-.14 2.37C33 28.5 27.25 34.25 13.5 43.04" />
      <path d="M19 20c23.5 19.75 18.75 79 8 67" />
      <path d="M30.83 43.5c.05.64.22 1.89-.1 2.58-4.1 8.86-8.27 15.13-18.23 24.71" />
      <path d="M48.4 26.88c.76.45 3.25.16 4.02.03 3.59-.61 24.75-3.24 33.4-3.7 1.18-.06 2.25.09 3.22.47" />
      <path d="M49.46 55.03c.71.49 3.05.3 3.78.22 7.55-.86 20.96-2.59 29.83-3.47.89-.09 2.83-.2 4.16.23" />
      <path d="M42 86.02c1.75.48 3.98.53 5.08.5 11.42-.27 27.16-2.81 43.44-3.49 1.75-.07 3.85.46 4.73.89" />
      <path d="M66.4 28c1.92 2.4 1.92 3.83 1.92 5.75 0 13.41-.02 29.25-.02 50.75" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(31.5 17.5)">{"1"}</text>
      <text transform="translate(11.5 21.05)">{"2"}</text>
      <text transform="translate(23.25 46.63)">{"3"}</text>
      <text transform="translate(47.5 23.5)">{"4"}</text>
      <text transform="translate(42.5 55.5)">{"5"}</text>
      <text transform="translate(42.5 82.5)">{"6"}</text>
      <text transform="translate(59.5 37.63)">{"7"}</text>
    </g>
  </svg>
);

export default Kanji狂;
