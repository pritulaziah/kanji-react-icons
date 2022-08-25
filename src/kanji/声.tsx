import * as React from "react";
import { SVGProps } from "react";

const Kanji声 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M23 24.5c1.42.31 5.02.4 7.82.14 14.99-1.39 28.63-3.89 47.02-4.91 3.4-.19 5.44-.02 7.14.16" />
      <path d="M52.75 10c1.06 1.06 1.75 3.25 1.75 4.5 0 .83-.18 20.94-.23 22.15" />
      <path d="M30.33 39.41c1.68.32 4.76.22 6.44.06 11.24-1.08 27.49-3.33 39.97-4.6 2.79-.29 4.48-.05 5.88.08" />
      <path d="M32 50.25c1.75.75 3.05.62 4.74.41 12.38-1.54 28.89-3.8 37.26-4.41 5.12-.38 6.38 1.12 5.63 4.76-.5 2.47-2.05 7.41-3.16 10.32-.49 1.28-.87 1.73-.97 1.91" />
      <path d="M54.75 49.25c1 .75 1.01 1.89 1.02 2.75.07 3.65.23 9.58.23 11" />
      <path d="M33.5 66.75C43.62 65.62 68.75 62.5 75 62" />
      <path d="M33 50.75c.81.81 1.13 2.01 1 3.25-1.88 17.62-6.38 32.88-15.25 42.75" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(15.75 24.13)">{"1"}</text>
      <text transform="translate(42.75 9.13)">{"2"}</text>
      <text transform="translate(20.25 39.13)">{"3"}</text>
      <text transform="translate(36.75 48.13)">{"4"}</text>
      <text transform="translate(47.25 58.63)">{"5"}</text>
      <text transform="translate(38.25 63.13)">{"6"}</text>
      <text transform="translate(26.25 60.13)">{"7"}</text>
    </g>
  </svg>
);

export default Kanji声;
