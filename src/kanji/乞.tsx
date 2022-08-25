import * as React from "react";
import { SVGProps } from "react";

const Kanji乞 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M40.05 11c.07.92.06 2.17-.38 3.19C34.5 26 27.12 37.62 14.25 49.5" />
      <path d="M36.75 27.5c3.25.12 5.44-.26 8.14-.65 8.9-1.27 20.49-2.85 31.24-4.91 3.11-.6 6.22-.63 9.38-.44" />
      <path d="M30 49.09c2.78 1.06 5.42.99 8.38.5 7.21-1.21 20.46-3.44 25.38-4.13 3.82-.54 4.96 1.14 1.9 3.73-10.56 8.95-22.2 22.63-27.38 29.55-11.9 15.89 8.85 18.8 26.35 18.8 26 0 27.5-.66 28.14-8.89" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(30.5 14.13)">{"1"}</text>
      <text transform="translate(44 23.5)">{"2"}</text>
      <text transform="translate(29.5 46.5)">{"3"}</text>
    </g>
  </svg>
);

export default Kanji乞;
