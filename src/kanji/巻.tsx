import * as React from "react";
import { SVGProps } from "react";

const Kanji巻 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M29.77 16.83c3.37 2.1 8.2 8.12 9.04 11.38" />
      <path d="M72.27 12.14c.03.45.07 1.16-.07 1.81-.8 3.81-5.2 10.3-11.65 17.27" />
      <path d="M27.25 37.39c.94.38 2.66.49 3.6.38 5.98-.66 33.15-4.52 40.61-4.88 1.56-.08 2.5.18 3.29.37" />
      <path d="M14.75 53.2c1.52.54 4.31.69 5.82.54 7.68-.74 48.68-5.99 64.61-6.23 2.53-.04 4.05.26 5.31.53" />
      <path d="M51.75 10.75c.75 1 1.21 2.5.79 4.72C50 28.75 41.5 63 14.75 76.5" />
      <path d="M54 35c5.27 6.92 27.97 29.5 33.78 34.56 1.97 1.72 4.5 2.45 6.47 2.94" />
      <path d="M38.02 66.8c1.11.65 2.07.66 3.7.43 5.28-.73 21.03-3.68 22.04-3.76 1.34-.11 2.39.71 1.91 2.39-.14.5-1.04 4.44-1.98 9.23" />
      <path d="M38.28 79.59c4.97-.34 19.22-2.34 27.61-3.04" />
      <path d="M37.12 77.78c.7.72 1.31 1.57 1.3 2.68-.02 3.24-.47 6.7-.47 9.64 0 9.17 2.63 8.42 20.02 8.42 6.28 0 12.78-.52 15.7-3.72" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(23.25 15.13)">{"1"}</text>
      <text transform="translate(63.5 11.5)">{"2"}</text>
      <text transform="translate(20.25 37.63)">{"3"}</text>
      <text transform="translate(6.75 54.05)">{"4"}</text>
      <text transform="translate(42.5 9.5)">{"5"}</text>
      <text transform="translate(66.75 43.63)">{"6"}</text>
      <text transform="translate(41.25 63.05)">{"7"}</text>
      <text transform="translate(41.25 76.48)">{"8"}</text>
      <text transform="translate(29.25 86.9)">{"9"}</text>
    </g>
  </svg>
);

export default Kanji巻;
