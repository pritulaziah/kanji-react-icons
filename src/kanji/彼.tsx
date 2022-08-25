import * as React from "react";
import { SVGProps } from "react";

const Kanji彼 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M31.83 16.75c.13.96-.51 1.9-1.06 2.61-3.17 4.1-10.39 11.14-18.9 16.14" />
      <path d="M32.61 35.75c.06.7-.21 1.69-.62 2.54C29.11 44.32 21.62 55 11.25 65.25" />
      <path d="M25.97 51.75c.83.83.9 1.88.9 2.91 0 .41.02 22.68-.03 33.34-.01 2.68-.03 4.61-.04 5.25" />
      <path d="M46.76 36.45c.9.9.98 2.35.91 4.5-.67 21.8-3.3 37.8-11.87 50.39" />
      <path d="M48.24 37.41c13.89-3.41 23.51-5.16 37.2-6.26 9.82-.79 3.43 5.1.21 8.92" />
      <path d="M66.38 15.25c1.06 1.06 1.39 2.12 1.39 3.6 0 .98-.02 23.86-.02 33.65" />
      <path d="M55.75 55.14c1.23.33 2.47.3 4.95-.12 3.8-.65 15.05-3.65 18.25-4.39 2.56-.6 4.06 1.05 2.81 3.93-7.8 17.89-20.27 29.39-35.05 37.7" />
      <path d="M55.47 63.92c3.49.61 18.28 14.83 30.88 23.62 2.24 1.56 4.15 2.84 7.25 4.15" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(24.5 16.63)">{"1"}</text>
      <text transform="translate(24.5 37.5)">{"2"}</text>
      <text transform="translate(20.25 67.5)">{"3"}</text>
      <text transform="translate(39.75 48.13)">{"4"}</text>
      <text transform="translate(45.75 33.13)">{"5"}</text>
      <text transform="translate(57.5 15.5)">{"6"}</text>
      <text transform="translate(55.5 52.5)">{"7"}</text>
      <text transform="translate(61.5 65.5)">{"8"}</text>
    </g>
  </svg>
);

export default Kanji彼;
