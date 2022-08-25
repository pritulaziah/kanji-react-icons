import * as React from "react";
import { SVGProps } from "react";

const Kanji巡 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M48.76 18.97c.62 1.15.5 2.84.04 4.12-2.55 7.03-5.49 14.03-10.32 22.62-.93 1.66-.53 1.63 0 2.15 5.83 5.73 9.54 10.67 12.25 17.39.9 2.24 1.7 4.68 2.42 7.4" />
      <path d="M66.48 19.87c.64.88.68 2.56.29 3.87-2.27 7.52-4.78 13.67-9.35 22.95-.45.91-.32 1.78.18 2.33 4.61 5.06 8.67 9.99 11.62 17.27.98 2.43 1.84 5.12 2.56 8.16" />
      <path d="M85.11 19.83c.64.92.72 2.82.29 4.12-2.48 7.44-5.77 12.89-10.43 20.95-.51.88-.35 1.81.18 2.33 4.95 4.89 8.87 9.15 11.81 15.29 1.28 2.67 2.33 5.61 3.11 8.93" />
      <path d="M17.75 17.38c3.88 1.72 10.03 7.08 11 9.76" />
      <path d="M9.75 49.5c1.62.62 3.74.22 4.75 0 2.88-.62 9-3.5 10.5-4s2.84.65 2 2.25c-8 15.25-8.25 9.75 1.25 18.5 1.23 1.14 1.25 2.5-.25 3.75s-9.62 7.5-12.75 9.75" />
      <path d="M11.25 81.22c3.17-.38 9.46-.75 14.28-.56 8.97.34 31.8 5.78 36.48 6.75C74.7 90.02 82.5 91 92.25 90.96" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(39.75 17.5)">{"1"}</text>
      <text transform="translate(57.5 17.5)">{"2"}</text>
      <text transform="translate(75.75 17.5)">{"3"}</text>
      <text transform="translate(10.5 18.5)">{"4"}</text>
      <text transform="translate(2.5 50.5)">{"5"}</text>
      <text transform="translate(4.5 83.98)">{"6"}</text>
    </g>
  </svg>
);

export default Kanji巡;
