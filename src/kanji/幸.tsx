import * as React from "react";
import { SVGProps } from "react";

const Kanji幸 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M32.63 26.3c.98.38 2.78.48 3.76.38 12.61-1.3 24.61-3.8 37.3-4.13 1.63-.04 2.62.18 3.43.37" />
      <path d="M53.42 11c.12.29 1.77 1.52 1.77 3.39 0 12.11-.19 21.32-.19 24.36" />
      <path d="M12.38 41.61c1.59.54 4.52.69 6.11.54 23.94-2.27 43.41-4.27 71.56-5.23 2.66-.09 4.25.26 5.58.53" />
      <path d="M35.52 42.83c2.84 2.45 7.33 10.07 8.04 13.88" />
      <path d="M70.28 40.64c.02.34.04.87-.04 1.36-.42 2.86-2.86 9.13-6.19 12.97" />
      <path d="M30.88 60.23c.94.43 4.18.46 5.12.38 6.5-.5 25.16-2.16 36.25-3 1.56-.12 4.85.37 5.63.58" />
      <path d="M21.38 75.4c2.04.46 5.79.58 7.82.46 14-.85 34.94-2.35 51.05-2.66 3.4-.06 5.44.22 7.14.45" />
      <path d="M53.81 60.75c.54.51 1.68 2.81 1.79 3.83.1 1.02-.08 28.06-.18 34.42" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(25.5 26.5)">{"1"}</text>
      <text transform="translate(45.75 11.5)">{"2"}</text>
      <text transform="translate(5.5 42.5)">{"3"}</text>
      <text transform="translate(29.25 51.5)">{"4"}</text>
      <text transform="translate(61.5 47.5)">{"5"}</text>
      <text transform="translate(24 62.5)">{"6"}</text>
      <text transform="translate(13.25 76.63)">{"7"}</text>
      <text transform="translate(47.25 69.13)">{"8"}</text>
    </g>
  </svg>
);

export default Kanji幸;
