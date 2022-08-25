import * as React from "react";
import { SVGProps } from "react";

const Kanji肝 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M19.66 17.24c.6.95 1 1.88 1.2 2.8.2.92.18 25.9-.46 33.63-.91 11-1.4 21.08-9.4 34.72" />
      <path d="M22.06 19.31c4.69-.81 15.94-3.34 17.73-3.46 1.46-.1 2.5 1.3 2.5 2.67 0 3.23-.6 44.71-.6 63.04 0 12.95-3.16 6.17-6.28 3.04" />
      <path d="M22.06 37.2c3.31-.36 6.1-.84 9.39-1.32.83-.12 1.65-.24 2.47-.35" />
      <path d="M22 55.16c3-.05 6.01-.41 9-.72.88-.09 1.77-.18 2.66-.28" />
      <path d="M55.37 21.41c.63.31 2.81.33 3.45.28 4.38-.36 19.64-2.64 27.1-3.24 1.05-.08 3.26.26 3.79.42" />
      <path d="M49.63 44.48c1.02.33 2.9.43 3.92.33 10.2-1.06 30.95-3.06 40-3.62 1.7-.1 2.73.16 3.58.32" />
      <path d="M71.81 22.63c.54.51 1.68 3.81 1.79 4.83.11 1.02-.07 61.56-.18 67.92" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(12.75 27.13)">{"1"}</text>
      <text transform="translate(23.5 15.13)">{"2"}</text>
      <text transform="translate(24.75 33.05)">{"3"}</text>
      <text transform="translate(24.58 51.5)">{"4"}</text>
      <text transform="translate(53.5 18.13)">{"5"}</text>
      <text transform="translate(48.5 41.5)">{"6"}</text>
      <text transform="translate(65.25 30.5)">{"7"}</text>
    </g>
  </svg>
);

export default Kanji肝;
