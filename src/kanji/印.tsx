import * as React from "react";
import { SVGProps } from "react";

const Kanji印 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M42.38 13.25c0 1.25-.6 2.34-1.37 3.09-3.98 3.91-9.81 7.29-20.2 12.13" />
      <path d="M17.87 29.75c.88.88 1.46 2.38 1.46 3.75 0 3.04-.14 23.52-.2 34.75-.01 2.61-.02 4.73-.02 6" />
      <path d="M20 49c9-1.62 17.62-3.75 19.5-4 1.51-.2 2.88-.25 4.25 0" />
      <path d="M19.75 71.5c8.88-1.88 19.38-4 21.55-4.25 1.31-.15 2.88-.25 4.2.03" />
      <path d="M57.5 26.16c1.5.44 2.81.38 3.91.29 7.97-.72 21.75-2.92 26.68-3.46 3.21-.35 4.01 1.59 3.92 4.06-.51 13.3-3.51 27.44-8.61 38.38-2.17 4.66-5.52 1.7-8.3-1.52" />
      <path d="M60 27c.81.81 1.25 2.43 1.25 3.88v67.87" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(34.5 11.5)">{"1"}</text>
      <text transform="translate(11.5 38.5)">{"2"}</text>
      <text transform="translate(24.75 44.5)">{"3"}</text>
      <text transform="translate(24.75 66.5)">{"4"}</text>
      <text transform="translate(60.5 23.5)">{"5"}</text>
      <text transform="translate(53.25 36.5)">{"6"}</text>
    </g>
  </svg>
);

export default Kanji印;
