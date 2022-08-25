import * as React from "react";
import { SVGProps } from "react";

const Kanji枕 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M12.78 40.72c.35.24 2.39.41 3.31.31 3.94-.41 17.62-2.71 23.95-3.91.92-.17 1.15-.24 1.73 0" />
      <path d="M28.86 15c.91.47 2.04 3 2.04 4.92 0 .95-.3 70.73-.3 71.58 0 10.75-5.6 2.25-6.85 1" />
      <path d="M30.44 41.28c-5.9 14.39-9.69 21.97-18.83 34.56" />
      <path d="M33.97 49.9c2.51 1.75 7.04 7.75 9.16 11.14" />
      <path d="M49.41 30.13c0 3.93-2 14.74-2.91 17.37" />
      <path d="M49.74 35.14c11.69-2.49 28-4.48 36.36-5.31 11.22-1.11 3.55 6.73-.42 9.79" />
      <path d="M68.15 12.5c.89 1.77 1.12 2.32 1.15 5.06.18 22.95-.91 61.04-28.38 77.11" />
      <path d="M71.99 50.87c.74 1.19 1.33 2.59 1.38 4.43.2 8.19-.03 18.14-.03 23.7 0 13 2.9 14.53 11.67 14.53 10.75 0 11.89-5.78 11.89-12.62" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(6.5 41.85)">{"1"}</text>
      <text transform="translate(19.5 15.5)">{"2"}</text>
      <text transform="translate(19.5 50.5)">{"3"}</text>
      <text transform="translate(35.5 48.5)">{"4"}</text>
      <text transform="translate(42.5 30.5)">{"5"}</text>
      <text transform="translate(53.5 30.5)">{"6"}</text>
      <text transform="translate(59.5 11.18)">{"7"}</text>
      <text transform="translate(77.5 55.5)">{"8"}</text>
    </g>
  </svg>
);

export default Kanji枕;
