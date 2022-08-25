import * as React from "react";
import { SVGProps } from "react";

const Kanji矛 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M29.48 15.91c2.63.87 5.12.72 7.78.36 7.63-1.02 28.14-4.06 31.25-4.52 3.58-.53 4.56 2.25 2.42 4-3.67 3-13.85 13.82-16.11 15.96" />
      <path d="M43.38 27c2.98 1.31 10.69 6.33 12.09 9.75" />
      <path d="M16.92 44.83c3.76 1.25 6.95.69 10.73-.08 17.73-3.63 37.85-7.38 56.68-7.42 8.44-.02-.08 8.17-3.33 10.25" />
      <path d="M55.19 42.98c6.06 2.88 8.84 29.04 2.7 50.21-2.64 9.09-7.89 2.3-10.14.46" />
      <path d="M53.39 41.43c.11.92-.06 1.96-.73 3.21C47.62 54 35.75 70 12.89 80.15" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(23.5 16.5)">{"1"}</text>
      <text transform="translate(35.5 28.5)">{"2"}</text>
      <text transform="translate(17.25 41.5)">{"3"}</text>
      <text transform="translate(62.5 49.5)">{"4"}</text>
      <text transform="translate(40.5 53.5)">{"5"}</text>
    </g>
  </svg>
);

export default Kanji矛;
