import * as React from "react";
import { SVGProps } from "react";

const Kanji屯 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M80.19 18.25c-.19 1.25-.96 2.04-2.16 2.55C67.62 25.25 53.92 30.06 29 34.29" />
      <path d="M26.04 46.52c.85.85.96 2.36.81 4.2-.23 2.79-1.78 12.2-2.23 17.13-.23 2.54-.84 4.44 2.97 3.73C44 68.5 65.38 67 81.09 66.33" />
      <path d="M84.04 40.67c.71 1.2.92 2.6.81 3.75-.37 4.14-1.28 11.51-2.41 19.11-.33 2.22-.68 4.46-1.04 6.64" />
      <path d="M51.74 11.62c1.13 1.13 1.39 2.75 1.39 4.53 0 9.76.12 58.99.12 65.63 0 12.48 2 13.99 21.57 13.99 18.94 0 21.27-1.52 21.27-11.13" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(69.5 17.5)">{"1"}</text>
      <text transform="translate(17.5 46.63)">{"2"}</text>
      <text transform="translate(74.5 41.5)">{"3"}</text>
      <text transform="translate(42.5 11.5)">{"4"}</text>
    </g>
  </svg>
);

export default Kanji屯;
