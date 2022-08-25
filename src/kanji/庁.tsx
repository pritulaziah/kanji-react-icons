import * as React from "react";
import { SVGProps } from "react";

const Kanji庁 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M50.31 12.13C53.75 14 58 18.5 59.56 22.44" />
      <path d="M23.63 29.23c1.52.54 4.3.63 5.82.54 15.8-.91 36.3-3.27 54.11-4.73 2.52-.21 4.05.26 5.31.53" />
      <path d="M27.49 32c.05 1.37.01 3.53-.1 5.5-.89 16-3.39 39-16.83 52.22" />
      <path d="M34.74 49.3c1.08.43 3.07.53 4.16.43 11.1-1.12 34.97-4.08 48.32-4.63 1.81-.08 2.89.2 3.8.42" />
      <path d="M61.91 49.74c.07.4.98 2.11 1.05 4.68.34 12.35-.21 33.61-.21 37.82 0 9.53-7.13.43-8.39-.63" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(44.75 12.5)">{"1"}</text>
      <text transform="translate(29.25 26.5)">{"2"}</text>
      <text transform="translate(19.5 39.5)">{"3"}</text>
      <text transform="translate(34.5 46.5)">{"4"}</text>
      <text transform="translate(54.5 58.5)">{"5"}</text>
    </g>
  </svg>
);

export default Kanji庁;
