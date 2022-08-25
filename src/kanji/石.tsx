import * as React from "react";
import { SVGProps } from "react";

const Kanji石 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M19.88 26.65c3.2.73 6.6.59 8.91.4 18.28-1.55 33.06-3.55 52.96-4.66 3.87-.22 6.42-.02 8.12.39" />
      <path d="M42.42 29.43c.33 1.45.22 2.69-.15 4.17C39.38 45 30.75 61.62 15 73.5" />
      <path d="M34.5 56.24c.71.64 1.62 2.13 1.75 2.97.87 5.49 1.95 14.48 3.14 24.27.2 1.68.41 3.36.6 5.02" />
      <path d="M35 56.3c12.06-1.23 38.12-3.55 45.33-4.31 3.05-.32 4.48 2.33 3.94 4.1-1.56 5.08-3.24 16.32-4.5 24.38" />
      <path d="M40.83 84.37c7.19-.52 22.62-1.77 34.17-2.38 2.39-.13 4.6-.21 6.5-.24" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(12.5 27.5)">{"1"}</text>
      <text transform="translate(33.5 37.5)">{"2"}</text>
      <text transform="translate(29.5 71.5)">{"3"}</text>
      <text transform="translate(42.5 52.5)">{"4"}</text>
      <text transform="translate(43.5 80.5)">{"5"}</text>
    </g>
  </svg>
);

export default Kanji石;
