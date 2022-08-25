import * as React from "react";
import { SVGProps } from "react";

const Kanji肌 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M18.71 20.22c.5.94.83 1.86 1 2.76.17.91.15 25.55-.39 33.17-.75 10.85-3.16 20.8-9.82 34.24" />
      <path d="M20.71 22.26c3.9-.8 12.77-2.8 14.25-2.92 1.21-.1 2.08 1.29 2.08 2.63v61.68c0 12.77-3.63 6.08-6.23 3" />
      <path d="M20.71 39.91c2.75-.36 5.49-.33 8.23-.8.69-.12 1.38-.24 2.06-.35" />
      <path d="M20.65 57.62c2.5-.06 5.01-.41 7.49-.71l2.21-.27" />
      <path d="M55.47 18.5c.46 1.98 1.11 3.53 1.11 6 0 22.58 1.16 55.12-14.38 66.75" />
      <path d="M56.95 21c3.75-.75 14.5-3.25 17.5-4s4 .25 4 3c0 3.82-.5 59.5-.5 62.25 0 5.25.05 8.5 9.3 8.5s8.45-4.25 8.45-10" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(12.75 28.63)">{"1"}</text>
      <text transform="translate(21.75 17.5)">{"2"}</text>
      <text transform="translate(24.75 36.5)">{"3"}</text>
      <text transform="translate(24.58 53.5)">{"4"}</text>
      <text transform="translate(48.75 28.63)">{"5"}</text>
      <text transform="translate(59.25 16.63)">{"6"}</text>
    </g>
  </svg>
);

export default Kanji肌;
