import * as React from "react";
import { SVGProps } from "react";

const Kanji享 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M50.56 8.5c1.93 1.04 4.78 5.08 5.09 7.12" />
      <path d="M20.3 22.69c1.54.09 5.06.59 6.56.47 12.12-.99 38.08-4.62 55.36-5.3 2.54-.1 3.84.04 5.74.6" />
      <path d="M34.53 32.27c.42.3.84.54 1.02.91 1.44 2.93 3.67 10.02 4.65 15.28" />
      <path d="M37.12 33.27c10.18-1.23 28.89-3.84 34.14-4.26 1.92-.15 3.07 1.53 2.8 2.42-1.14 3.69-1.44 5.87-3.88 11.19" />
      <path d="M40.62 46.52c6.17-.47 23.66-2.97 31.48-3.44" />
      <path d="M37.28 58.62c1.02.21 2.96.53 4.5.35 1.88-.22 22.2-5.22 23.99-5.22 1.79 0 2.73 1.11.94 2.34-1.79 1.23-4.47 4.91-11.07 9.68" />
      <path d="M54.62 66.41C59 70.25 62.99 84.86 57.5 96.1c-3.25 6.65-6.18 1.12-7.75.56" />
      <path d="M17.75 78.08c1.39.61 5 .83 7.51.67C34.03 78.22 76 73 87.85 72.83c2.51-.04 4.73.21 6.4.82" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(44.25 9.5)">{"1"}</text>
      <text transform="translate(13.5 23.5)">{"2"}</text>
      <text transform="translate(28.5 39.13)">{"3"}</text>
      <text transform="translate(39.75 30.13)">{"4"}</text>
      <text transform="translate(44.5 43.5)">{"5"}</text>
      <text transform="translate(29.25 59.98)">{"6"}</text>
      <text transform="translate(48.5 70.5)">{"7"}</text>
      <text transform="translate(11.25 79.63)">{"8"}</text>
    </g>
  </svg>
);

export default Kanji享;
