import * as React from "react";
import { SVGProps } from "react";

const Kanji房 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M20.38 16.26c.94.3 3.66.33 4.6.3 9.77-.34 44.02-3.56 58.36-4.4 1.56-.09 3.5.14 4.29.29" />
      <path d="M28.35 27.88c1.15.37 2.89 1.05 5.15.78 11.75-1.4 36.14-3.73 43.5-4.4 1.99-.18 4.15 1.3 3.25 4-1 3-2.25 7.25-3 9.75" />
      <path d="M31.25 42.25c1.25 0 2.77-.05 4.5-.14 9.74-.49 34.02-3.61 44-3.61" />
      <path d="M31.44 29.18c.05 1.36.62 3.5.4 5.45C29 59.25 23.75 76.5 12.75 86.75" />
      <path d="M55.54 46.25c2.29.93 4.86 4.04 6.07 6.39" />
      <path d="M34.71 59.81c.93.06 3.07.43 3.98.34 7.34-.71 34.41-4.03 44.38-4.52 1.54-.08 2.33.03 3.47.43" />
      <path d="M55.94 67c4.81 1.75 12.06 3.25 17.68 3.84 2.63.28 2.91 1.95 2.72 3.4-.59 4.51-8.99 18.64-12.28 21.78-3.57 3.4-5.96-.13-7.03-.59" />
      <path d="M55.44 61.21c.38.9.3 1.92-.14 2.93-3.08 7.01-11.97 21.16-25.8 27.79" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(17.5 12.13)">{"1"}</text>
      <text transform="translate(31.5 25.5)">{"2"}</text>
      <text transform="translate(37.5 38.5)">{"3"}</text>
      <text transform="translate(23.5 35.5)">{"4"}</text>
      <text transform="translate(49.5 49.5)">{"5"}</text>
      <text transform="translate(34.5 56.5)">{"6"}</text>
      <text transform="translate(62.5 66.5)">{"7"}</text>
      <text transform="translate(45.5 69.5)">{"8"}</text>
    </g>
  </svg>
);

export default Kanji房;
