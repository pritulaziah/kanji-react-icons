import * as React from "react";
import { SVGProps } from "react";

const Kanji帯 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M12.25 27.95c4.25.93 8.04.63 11.77.17 15.23-1.87 43.1-4.25 61.23-4.96 3.59-.14 6.62.09 10 .63" />
      <path d="M33 14c1 1 1.67 2.5 1.61 3.5-.2 3.31-.6 13.03-.84 20-.04 1.18-.08 2.27-.11 3.25" />
      <path d="M53.45 10.5c.96.96 1.38 2.48 1.36 3.5-.07 4.25-.19 14.88-.21 23" />
      <path d="M74.65 12.5c.86.86 1.44 2.48 1.36 3.5-.27 3.5-1.64 11.38-2.46 19.25" />
      <path d="M33.85 39.88c9.78-1.01 26.65-3.01 36.04-3.63 2.04-.13 3.74-.13 5.19.38" />
      <path d="M17.75 50.62c-.15 3.93-3.73 16.28-5 18.62" />
      <path d="M18.4 52.34c3.84-.45 49.59-6.35 68.62-6.35 14.24 0 1.12 7.48-.56 8.81" />
      <path d="M30.71 62.14c.66.61 1.19 1.99 1.19 3.03 0 2.09.03 10.83.05 17.2 0 1.88.01 3.55.01 4.78" />
      <path d="M32.43 64.79c5.07-.92 39.64-4.98 42.37-5.13 3.22-.18 3.88 3.04 3.8 4.63-.46 8.48-.6 11.46-2 18.01-.86 4-4.22 2.82-6.62-.41" />
      <path d="M52.1 50.88c1.01 1.01 1.44 2.37 1.44 3.53 0 .57.04 25.2.05 38.08 0 3.1.01 5.52.01 6.76" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(4.99 28.63)">{"1"}</text>
      <text transform="translate(24.5 14.5)">{"2"}</text>
      <text transform="translate(44.5 11.5)">{"3"}</text>
      <text transform="translate(65.5 13.41)">{"4"}</text>
      <text transform="translate(38.25 37.63)">{"5"}</text>
      <text transform="translate(10.5 55.5)">{"6"}</text>
      <text transform="translate(20.5 49.5)">{"7"}</text>
      <text transform="translate(24.5 70.5)">{"8"}</text>
      <text transform="translate(33.5 61.63)">{"9"}</text>
      <text transform="translate(43.5 57.5)">{"10"}</text>
    </g>
  </svg>
);

export default Kanji帯;
