import * as React from "react";
import { SVGProps } from "react";

const Kanji自 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M50.94 13.17c.48.2-.44 3.56-.74 4.15-1.95 3.93-3.95 9.27-8.56 14.43" />
      <path d="M27 32.23c.8 1.43 1.98 2.49 1.98 4.39 0 1.9-.04 52.32-.04 53.28 0 .95.06 2.85.04 4.85" />
      <path d="M28.81 33.82c6.44-1.07 40.67-4.78 44.81-5.07 3.45-.24 5.38 1.25 5.88 5.59.26 2.25-.85 32.01-.83 52.94 0 2.15 0 5.11-.27 6.52" />
      <path d="M30.23 51.23c8.02-.29 16.03-1.04 24.02-1.63 2.42-.18 4.82-.35 7.12-.52" />
      <path d="M30.61 70.42c7.7-.51 16.38-1.67 24.07-2.23 2.13-.15 4.25-.3 6.33-.43" />
      <path d="M29.04 92.07c10.71-.57 35.28-3.13 46.96-3.13" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(54.75 9.13)">{"1"}</text>
      <text transform="translate(20.25 40.63)">{"2"}</text>
      <text transform="translate(30.75 28.63)">{"3"}</text>
      <text transform="translate(35.25 46.63)">{"4"}</text>
      <text transform="translate(35.25 66.13)">{"5"}</text>
      <text transform="translate(35.25 87.13)">{"6"}</text>
    </g>
  </svg>
);

export default Kanji自;
