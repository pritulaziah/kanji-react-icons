import * as React from "react";
import { SVGProps } from "react";

const Kanji球 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M13.75 29.25c.56.37 3.6.45 4.16.34 2.63-.5 13.34-2.09 19.66-2.64.86-.07 2.46-.26 3.18.04" />
      <path d="M12.5 55c.55.4 4.45.46 5.01.37 3.25-.53 15.24-3.62 19.73-4.19.69-.09 3.22-.16 4.25.19" />
      <path d="M12.25 83.75c.54.23 2.68 1.93 3.5 1.5C21 82.5 28.5 78.5 36.5 73.75" />
      <path d="M26.57 31.52c.87.88 1.48 2.77 1.48 3.48 0 5.95.52 37.62.35 41.57" />
      <path d="M46.14 35.41c.87.34 2.48.5 3.34.34 3.53-.66 30.6-3.85 38.9-3.85 1.45 0 2.33.16 3.05.33" />
      <path d="M66.96 14.46c.08.44 1.08 2.29 1.16 5.09.37 13.41-.24 65.12-.24 69.69 0 4.87-1.86 5.79-4.85 2.79-1.6-1.6-1.79-1.41-3.17-2.56" />
      <path d="M48.68 46.06c3.41 1.36 8.82 5.61 9.67 7.73" />
      <path d="M41.25 81.75c1.91 2.88 3.51 1.28 5.42-1.19 1.13-1.45 9.08-11 14.98-18.55" />
      <path d="M88.28 41.49c.05.33.09.91-.11 1.35-1.9 4.13-5.85 8.83-9.58 11.76" />
      <path d="M74.32 61.61c5.52 7.76 14.03 18.24 20.2 22.71 1.3.94 2.54 1.42 3.73 1.74" />
      <path d="M80.39 14.46c2.82 1.36 7.29 5.61 7.99 7.73" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(6.5 30.5)">{"1"}</text>
      <text transform="translate(5.25 55.63)">{"2"}</text>
      <text transform="translate(3.75 87.13)">{"3"}</text>
      <text transform="translate(20.5 39.5)">{"4"}</text>
      <text transform="translate(45.5 32.5)">{"5"}</text>
      <text transform="translate(57.5 12.5)">{"6"}</text>
      <text transform="translate(41.5 45.5)">{"7"}</text>
      <text transform="translate(33.75 90.13)">{"8"}</text>
      <text transform="translate(78.5 41.5)">{"9"}</text>
      <text transform="translate(77.5 64.5)">{"10"}</text>
      <text transform="translate(74.5 11.5)">{"11"}</text>
    </g>
  </svg>
);

export default Kanji球;
