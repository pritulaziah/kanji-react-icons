import * as React from "react";
import { SVGProps } from "react";

const Kanji訓 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M23.88 13.25c3.4 1.72 8.78 7.07 9.62 9.75" />
      <path d="M13.62 31.58c1.52.56 3.7.24 5.27.13 7.06-.52 16.37-1.97 21.88-2.61 1.54-.18 3.05-.51 4.58-.18" />
      <path d="M18.98 44.56c1.17.37 2.81.15 4.02.07 3.83-.25 10.63-1.25 13.93-2.04 1.45-.34 2.99-.63 4.46-.35" />
      <path d="M19.48 56.08c.98.34 2.36.15 3.4.08 3.24-.22 9.07-1.21 12.76-1.49 1.5-.11 3.24-.3 4.89-.21" />
      <path d="M18.64 69.4c.72.62 1.1 1.4 1.12 2.34.74 3.72 1.33 9.34 1.77 15 .08 1 .15 2.01.22 3" />
      <path d="M20.56 70.87c5.99-.83 10.99-1.72 16.44-2.56 2.72-.42 3.65.73 3.17 3.34-.71 3.82-1.07 7.68-2.5 14.06" />
      <path d="M22.47 87.8c4.18-.47 7.64-.92 13.78-1.36.91-.07 1.88-.13 2.91-.2" />
      <path d="M54.72 20.18c1.12 1.12 1.69 2.7 1.69 4.62C56.5 70.5 53.5 81.25 41.5 93" />
      <path d="M71.75 18.88c1.06 1.06 1.41 2.37 1.41 3.65 0 .58-.04 31.38-.09 45.84a518 518 0 0 1-.05 7.01" />
      <path d="M89.81 15.13c1.09 1.09 1.51 2.49 1.51 4v75.5" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(17.5 13.5)">{"1"}</text>
      <text transform="translate(6.5 33.5)">{"2"}</text>
      <text transform="translate(12.49 45.5)">{"3"}</text>
      <text transform="translate(12.49 58.5)">{"4"}</text>
      <text transform="translate(11.5 74.83)">{"5"}</text>
      <text transform="translate(21.5 67.26)">{"6"}</text>
      <text transform="translate(25.99 84.5)">{"7"}</text>
      <text transform="translate(47.5 17.5)">{"8"}</text>
      <text transform="translate(64.5 16.5)">{"9"}</text>
      <text transform="translate(77.5 14.5)">{"10"}</text>
    </g>
  </svg>
);

export default Kanji訓;
