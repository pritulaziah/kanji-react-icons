import * as React from "react";
import { SVGProps } from "react";

const Kanji粒 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M16.69 26.39c2.01 2.21 5.05 8.47 5.56 11.91" />
      <path d="M47.51 20.72c.02.35.04.9-.05 1.4-.54 2.96-3.65 9.45-7.89 13.42" />
      <path d="M13.85 46.02c.53.23 1.94.8 3.35.68 5.05-.45 19.55-3.7 25.26-4.42 1.4-.18 1.76-.23 2.65 0" />
      <path d="M30.27 15.21c.88.45 1.41 2.03 1.59 2.94s-.18 65.74-.18 71.39c0 12.71-5.29 3.89-7.18 2" />
      <path d="M31.77 45.71c-3.39 12-11.64 28.84-19.27 35.76" />
      <path d="M35.12 53.07c4.46 2.84 7.74 6.11 9.4 10.9" />
      <path d="M63.4 19c3.44 2.04 9.49 7.66 11.21 11.88" />
      <path d="M51 41.45c1.16.33 2.53.45 3.68.33 7.57-.78 23.07-3.03 32.99-3.27 1.94-.05 3.1.16 4.07.32" />
      <path d="M55.25 51.5c3.62 9.69 5.92 21.36 6.25 27.75" />
      <path d="M82.88 45.75c.37 1.25.49 2.49.38 3.58-.71 7.47-6.75 29.71-8.51 35.42" />
      <path d="M43.25 87.05c1.46.39 3.17.5 4.62.39 12.38-.94 30.38-3.69 43.28-4 2.43-.06 3.89.19 5.1.38" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(10.25 26.88)">{"1"}</text>
      <text transform="translate(39.5 20.25)">{"2"}</text>
      <text transform="translate(7.25 47.25)">{"3"}</text>
      <text transform="translate(21.5 16.25)">{"4"}</text>
      <text transform="translate(21.25 56.25)">{"5"}</text>
      <text transform="translate(38.25 53.25)">{"6"}</text>
      <text transform="translate(59 16.38)">{"7"}</text>
      <text transform="translate(50.25 38.25)">{"8"}</text>
      <text transform="translate(49.25 52.25)">{"9"}</text>
      <text transform="translate(72.25 49.25)">{"10"}</text>
      <text transform="translate(40.25 84.25)">{"11"}</text>
    </g>
  </svg>
);

export default Kanji粒;
