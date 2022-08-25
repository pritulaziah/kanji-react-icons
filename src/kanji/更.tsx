import * as React from "react";
import { SVGProps } from "react";

const Kanji更 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M29.75 17.89c.94.38 4.66.5 5.6.38 8.4-1.02 29.65-4.02 38.61-4.38 1.56-.06 4.5.18 5.29.37" />
      <path d="M28.02 31.57c.63.69 1.27 1.54 1.27 2.46 0 .92 4.08 24.38 4.08 24.84 0 .46.21.46.42 1.38" />
      <path d="M30.35 33.18c3.59-.12 44.84-5.8 48.11-5.94 2.72-.12 4.55 2.01 3.76 5.46-1.23 5.43-3.97 15.55-7.13 24.07" />
      <path d="M31.48 46.18C42.5 44.75 53 43.66 61.26 42.75c2.48-.27 4.93-.54 7.26-.78" />
      <path d="M35.25 57.66C48.25 56 60.5 55 75.38 53.91" />
      <path d="M56 18c.25 1 .8 2.75.8 4.93C56.79 64.5 54.75 84 19 96.54" />
      <path d="M28 65.75c10.75 1.5 43.48 21.24 52.25 24.88 2.97 1.23 5.52 1.76 8.5 2.12" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(22.5 18.5)">{"1"}</text>
      <text transform="translate(21.5 38.5)">{"2"}</text>
      <text transform="translate(30.75 29.5)">{"3"}</text>
      <text transform="translate(36.57 42.05)">{"4"}</text>
      <text transform="translate(36.75 54.5)">{"5"}</text>
      <text transform="translate(49.5 25.5)">{"6"}</text>
      <text transform="translate(21.75 68.5)">{"7"}</text>
    </g>
  </svg>
);

export default Kanji更;
