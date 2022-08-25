import * as React from "react";
import { SVGProps } from "react";

const Kanji枠 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M14.03 39.47c.35.24 2.39.41 3.31.31 3.94-.41 20.12-2.21 26.45-3.41.92-.17 2.15-.24 2.73 0" />
      <path d="M31.11 13.25c1.64 1 3.04 2.5 3.04 4.42 0 5.08-.3 72.73-.3 73.58 0 12.5-5.1 2.75-6.1 1.75" />
      <path d="M33.69 39.03c-6.06 14.93-9.44 21.24-18.83 34.31" />
      <path d="M36.22 44.65c2.37 1.59 7.28 8.76 9.28 11.85" />
      <path d="M66.15 11.88c.2.79.37 1.62.33 2.23-1.17 18.98-4.48 28.64-15.7 38.5" />
      <path d="M50.64 25.44c.61.43 2.91.15 3.68 0 .77-.14 23.21-4.25 23.87-4.44 1.96-.54 3.61.83 3.06 3.81-.45 2.45-1.83 10.51-1.83 12.96 0 8.22 1.33 10.36 8.15 10.36 7.68 0 8.95-1.36 8.95-7.09" />
      <path d="M46.75 68.47c.89.54 2.51.63 3.41.54 11.59-1.26 36.44-3.97 44.23-4.18 1.48-.04 2.37.26 3.11.52" />
      <path d="M69.6 50.55c.5.45 1.58 3.4 1.67 4.31.1.91-.06 37.35-.17 43.03" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(6.5 40.38)">{"1"}</text>
      <text transform="translate(22.25 13.25)">{"2"}</text>
      <text transform="translate(21.5 50.88)">{"3"}</text>
      <text transform="translate(41 47.88)">{"4"}</text>
      <text transform="translate(57.5 12.25)">{"5"}</text>
      <text transform="translate(47.25 22.25)">{"6"}</text>
      <text transform="translate(47.25 65.25)">{"7"}</text>
      <text transform="translate(60.25 52.25)">{"8"}</text>
    </g>
  </svg>
);

export default Kanji枠;
