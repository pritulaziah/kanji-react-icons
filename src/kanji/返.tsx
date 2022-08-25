import * as React from "react";
import { SVGProps } from "react";

const Kanji返 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M47.29 21.2c2.34.68 5.1.4 7.36.13 7.2-.88 15.44-3.19 22.73-3.69 2.12-.15 4.28-.19 6.36.32" />
      <path d="M49.86 21.63c.94.94 1.26 2.36 1.18 4.1-.92 19.77-3.92 34.02-13.2 47" />
      <path d="M54.16 38.25c1.24.29 2.39.48 4.87.04s15.15-3.97 16.85-4.4c1.7-.44 3.66 1.09 3.07 2.7-6.45 17.79-16.07 33.03-34.04 40.92" />
      <path d="M54.14 47.38c3.21.65 17.21 16.04 28.92 24.68 2.48 1.83 5.25 3.99 8.32 4.7" />
      <path d="M18.71 22.5c3.63 1.39 9.38 5.72 10.29 7.88" />
      <path d="M14.75 51.5c2.25 1 3.75.5 4.75.25s7.75-3.25 9.25-3.75c3.7-1.23 4.4.75 1.61 3.96-9.49 10.91-7.99 8.54-1.11 14.54 1.93 1.69.77 4.27-.75 5.5-3.88 3.12-10.25 8.62-12.75 10.5" />
      <path d="M12.25 84.25c4.38-1 10.5-1.5 15-.5s29.99 6.04 34.5 7c11.12 2.38 20.38 3.25 28.16 3.8" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(49.5 18.5)">{"1"}</text>
      <text transform="translate(42.5 30.13)">{"2"}</text>
      <text transform="translate(56.25 35.5)">{"3"}</text>
      <text transform="translate(60.75 48.13)">{"4"}</text>
      <text transform="translate(10.5 22.63)">{"5"}</text>
      <text transform="translate(7.5 51.16)">{"6"}</text>
      <text transform="translate(5.25 87.5)">{"7"}</text>
    </g>
  </svg>
);

export default Kanji返;
