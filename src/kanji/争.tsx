import * as React from "react";
import { SVGProps } from "react";

const Kanji争 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M48.25 9.75c.06.54-.03 1.44-.37 2.18C45.5 17 37.89 26.84 26.25 33" />
      <path d="M43.5 20.01c5.46-.79 20.94-3.2 23.19-3.77 2.44-.61 3.81 1.64 2.06 3.76C64.47 25.19 59.5 30.88 54 38" />
      <path d="M28.92 41.83c2.21.54 3.89.79 6.14.53 13.73-1.54 28.49-4.53 38.93-6.14 3.89-.6 5.26 1.03 4.44 4.38-1.84 7.51-3.43 13.27-5.98 24.8" />
      <path d="M15 57.25c3.25.62 6.2.54 9.5.1 19.41-2.56 45.11-5.53 61.63-7.03 3.5-.32 6.65-.41 10.12.18" />
      <path d="M29.13 70.44c2.52.22 4.86.37 7.37.03 10-1.35 23.5-3.09 35.51-4.1 1.96-.16 3.19-.12 4.66-.02" />
      <path d="M53.52 43.33c.98.92 1.76 2.42 1.76 4.52 0 14.9-.01 40.16-.01 45.12 0 9.66-7.71 1-9.21-.25" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(41.5 9.5)">{"1"}</text>
      <text transform="translate(55.5 15.5)">{"2"}</text>
      <text transform="translate(21.49 44.5)">{"3"}</text>
      <text transform="translate(7.5 58.5)">{"4"}</text>
      <text transform="translate(22.5 72.5)">{"5"}</text>
      <text transform="translate(47.5 50.5)">{"6"}</text>
    </g>
  </svg>
);

export default Kanji争;
