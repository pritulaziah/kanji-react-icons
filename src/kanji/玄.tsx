import * as React from "react";
import { SVGProps } from "react";

const Kanji玄 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M47.22 13.25c4.45 1.8 11.04 8.8 11.78 12.33" />
      <path d="M14.5 34.11c1.42.1 4.68.69 6.06.55 11.19-1.16 52.69-4.91 68.64-5.7 2.35-.12 3.55.05 5.3.7" />
      <path d="M50.59 35.62c.37 1.31.6 2.37-.18 3.72-3.41 5.91-7.91 13.91-12.9 17.58-.79.58-.73 3.04 0 3.29 3.84 1.31 13.2 5.89 16.49 8.3" />
      <path d="M69.21 48.62c.54 1.38.23 4.23-.5 5C58.75 64.25 46.5 76.5 31.96 90.37c-1.67 1.59-1.03 2.35 1 2 12.29-2.12 31.25-5 42-7" />
      <path d="M69.21 75.37c4.15 3.66 10.71 15.05 11.75 20.75" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(42 14)">{"1"}</text>
      <text transform="translate(6.75 34.5)">{"2"}</text>
      <text transform="translate(41.5 42.5)">{"3"}</text>
      <text transform="translate(60.75 48.5)">{"4"}</text>
      <text transform="translate(60.75 76.55)">{"5"}</text>
    </g>
  </svg>
);

export default Kanji玄;
