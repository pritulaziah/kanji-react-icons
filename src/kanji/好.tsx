import * as React from "react";
import { SVGProps } from "react";

const Kanji好 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M29.33 14.12c.79 1.38 1.04 3.35.85 5.06-.94 8.36-4.83 32.78-8.96 42.56-.85 2.01.39 2.79.85 2.97 5.7 2.28 11.04 5.41 15.17 9.43 2.52 2.46 4.59 5.26 6.02 8.4" />
      <path d="M41.12 35.88c.5 1.4.71 2.83.35 4.75-3.22 17.12-10.1 38.5-24.72 50.12" />
      <path d="M9.75 47.46c.75.99 1.88 1.17 3.01.99 2.15-.34 22.82-5.19 33.86-7.59" />
      <path d="M52.68 20.3c1.69.45 3.74.51 5.21.34 4.48-.52 17.48-3.27 23.34-4.89 1.62-.45 3.4.98 1.82 3.14C80.5 22.38 76.25 28.25 70 35" />
      <path d="M67.57 36.74c9.05 8.89 10.3 31.39 6.43 49.14-1.67 7.64-6.12 7.75-10.09 2.55" />
      <path d="M46.03 52.68c1.46.61 5.04.84 7.65.42 12.32-1.98 26.07-4.36 37.44-4.33 2.64.01 4.97.2 6.73.81" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(22.5 14.5)">{"1"}</text>
      <text transform="translate(39.5 32.5)">{"2"}</text>
      <text transform="translate(1.99 47.98)">{"3"}</text>
      <text transform="translate(50.5 17.5)">{"4"}</text>
      <text transform="translate(60.5 41.5)">{"5"}</text>
      <text transform="translate(47.5 50.5)">{"6"}</text>
    </g>
  </svg>
);

export default Kanji好;
