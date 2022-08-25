import * as React from "react";
import { SVGProps } from "react";

const Kanji貼 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M17.3 22.18c.36 1.17.88 2.04.88 3.6s-.39 40.97-.24 46.11" />
      <path d="M18.28 23.67c2.03-.19 17.49-3.19 19.34-3.42a2.333 2.333 0 0 1 2.62 2.53c-.17 1.83-.22 34.97-.6 46.67" />
      <path d="M18.24 37.62c4.26-.41 8.5-1.02 12.73-1.62 1.01-.14 1.96-.28 2.85-.4" />
      <path d="M17.91 53.45c3.49-.43 8.99-1.32 12.48-1.69.84-.09 1.68-.18 2.54-.27" />
      <path d="M18.43 69.48c4.03 0 15.88-2.34 21.1-2.34" />
      <path d="M23.62 77.73c.26 1.18.52 1.5 0 2.36-1.57 2.59-7.3 10.59-10.45 13.66" />
      <path d="M35.51 75.2c3.69 4.36 8.06 12.27 9.07 16.08" />
      <path d="M67.81 14.63c.76.45 2.36 3.35 2.51 4.25.15.9-.25 34.12-.25 47.25" />
      <path d="M70.25 41.24c8.82-.91 18.12-2.73 19.34-2.73 1.23 0 3.43 0 4.41.3" />
      <path d="M53.91 67.55c.41.46.82.84 1 1.41 1.41 4.54 3.09 17.05 4.05 25.2" />
      <path d="M54.71 68.19c10.79-1.69 29.64-3.07 34.75-3.71 1.87-.23 2.99 2.36 2.73 3.75-1.11 5.71-3.49 14.04-5.02 21.28" />
      <path d="M58.86 91.66c7.64-.41 20.64-1.66 30.68-1.94" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(10.5 29.5)">{"1"}</text>
      <text transform="translate(19.5 20.5)">{"2"}</text>
      <text transform="translate(21.5 34.5)">{"3"}</text>
      <text transform="translate(22.5 49.5)">{"4"}</text>
      <text transform="translate(21.5 66.5)">{"5"}</text>
      <text transform="translate(15.5 80.5)">{"6"}</text>
      <text transform="translate(30.5 81.5)">{"7"}</text>
      <text transform="translate(59.5 13.5)">{"8"}</text>
      <text transform="translate(75.5 37.5)">{"9"}</text>
      <text transform="translate(45.5 76.5)">{"10"}</text>
      <text transform="translate(57.25 64.38)">{"11"}</text>
      <text transform="translate(61.75 88.8)">{"12"}</text>
    </g>
  </svg>
);

export default Kanji貼;
