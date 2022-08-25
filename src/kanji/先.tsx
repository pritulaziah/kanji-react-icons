import * as React from "react";
import { SVGProps } from "react";

const Kanji先 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M37.51 21c.07.62.15 1.61-.14 2.49C35.25 29.88 31.62 37.38 24.5 45" />
      <path d="M38.13 32.04c1.5.09 3.95-.16 4.64-.22 6.48-.57 20.36-1.82 27.82-2.94 1.65-.25 3.66-.13 5.16.27" />
      <path d="M52.81 12.38c1.28 1.28 2.01 3.12 2.01 4.75 0 .75-.05 31.92-.07 32.87" />
      <path d="M15.88 53.26c3.42.98 7.15.5 10.62.22 15.99-1.3 38.99-3.55 59-4.4 2.94-.13 5.84-.03 8.75.47" />
      <path d="M45.18 55.68c.32 1.45.15 2.48-.15 3.85C43.24 67.65 35 86.62 20 96.38" />
      <path d="M60.49 53.62c1.07 1.07 1.38 2.71 1.38 4.98 0 7.78-.22 14.88-.22 21.89 0 15.14 1.1 16.04 15.85 16.04 14.62 0 15.64-1.78 15.64-11.29" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(29.5 20.13)">{"1"}</text>
      <text transform="translate(42.5 28.5)">{"2"}</text>
      <text transform="translate(43.5 11.5)">{"3"}</text>
      <text transform="translate(7.5 54.5)">{"4"}</text>
      <text transform="translate(36.75 62.13)">{"5"}</text>
      <text transform="translate(53.5 65.5)">{"6"}</text>
    </g>
  </svg>
);

export default Kanji先;
