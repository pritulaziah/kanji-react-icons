import * as React from "react";
import { SVGProps } from "react";

const Kanji舌 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M67.12 11.5c-.25 1.12-1 2.25-2.27 3.11-5.1 3.46-18.98 9.89-37.47 15.41" />
      <path d="M14.63 48.81c1.8.41 6.32.64 8.09.41 17.66-2.34 47.03-6.22 66.36-6.71 3-.08 4.8.19 6.3.4" />
      <path d="M52.56 25.26c1.21 1.21 1.76 2.99 1.76 4.58v38.91" />
      <path d="M30 70.75c1.5.88 2.12 2.25 2.52 3.74 1.31 4.92 3.49 13.03 4.85 20.03.32 1.67.62 3.26.88 4.73" />
      <path d="M32.66 71.83c13.59-1.45 36.19-3.69 44.96-4.34 3.2-.24 4.13 2.41 3.67 3.81-1.9 5.78-5.62 13.76-8.44 21.75" />
      <path d="M38.42 96.91c9.19-.66 22.7-1.91 32.12-2.51 1.48-.1 2.98-.25 4.51-.37" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(57.5 11.5)">{"1"}</text>
      <text transform="translate(6.75 52.55)">{"2"}</text>
      <text transform="translate(45.75 36.13)">{"3"}</text>
      <text transform="translate(24.75 81.13)">{"4"}</text>
      <text transform="translate(36.75 67.63)">{"5"}</text>
      <text transform="translate(42.75 91.55)">{"6"}</text>
    </g>
  </svg>
);

export default Kanji舌;
