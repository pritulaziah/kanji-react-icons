import * as React from "react";
import { SVGProps } from "react";

const Kanji博 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M9.5 43.29c.73.3 2.06.31 2.79.3 4.96-.08 17.96-2.83 23.41-4.01 1.19-.26 1.94.14 2.55.29" />
      <path d="M23.93 16.88c.76.6 2.51 2.87 2.51 5.73 0 7.14-.1 65.98-.25 73.52" />
      <path d="M41.25 26.39c.94.38 2.66.49 3.6.38 5.98-.66 31.15-4.27 37.61-4.38 1.56-.03 2.5.18 3.29.37" />
      <path d="M46.27 37.06c.48.57.96.84.96 1.63 0 .79 1.68 21.69 1.68 22.08 0 .39.16.39.32 1.17" />
      <path d="M48.02 37.07c2.7-.24 32.52-3.91 34.99-4.15 2.05-.2 3.74.58 3.21 3.01-.77 3.55-1.72 10.31-3.47 20.79a9.39 9.39 0 0 0-.16 1.88" />
      <path d="M49.5 47.72c7.35-.36 14.73-1.68 22.03-2.56.89-.11 1.75-.21 2.58-.31" />
      <path d="M50.33 59.67c7.45-.8 21.86-2.79 31.13-3.62" />
      <path d="M63.37 10.75c1.09.5 1.74 2.25 1.96 3.25.22 1 0 37.75-.22 44" />
      <path d="M86 13.25c3.18 1.63 8.2 6.71 9 9.25" />
      <path d="M36.38 72.68c1.32.62 3.74.81 5.07.62C49.21 72.16 81 69 94 68.12c2.2-.15 3.52.29 4.63.6" />
      <path d="M77.7 62.33c.07.37 1.05 1.93 1.05 4.28 0 14.89-.05 13.89-.05 25.26 0 10.62-5.44 1.38-7.27.19" />
      <path d="M52.49 80.02c1.93 1.66 4.99 6.8 5.47 9.38" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(3.49 45.5)">{"1"}</text>
      <text transform="translate(15.75 18.5)">{"2"}</text>
      <text transform="translate(42.5 23.5)">{"3"}</text>
      <text transform="translate(40.5 44.5)">{"4"}</text>
      <text transform="translate(48.75 34.5)">{"5"}</text>
      <text transform="translate(52.5 45.13)">{"6"}</text>
      <text transform="translate(52.5 57.5)">{"7"}</text>
      <text transform="translate(54.5 10.5)">{"8"}</text>
      <text transform="translate(78.5 10.63)">{"9"}</text>
      <text transform="translate(36.75 70.63)">{"10"}</text>
      <text transform="translate(66.94 66.88)">{"11"}</text>
      <text transform="translate(42.5 83.5)">{"12"}</text>
    </g>
  </svg>
);

export default Kanji博;
