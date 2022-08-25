import * as React from "react";
import { SVGProps } from "react";

const Kanji非 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M41.62 14c1.09.5 1.74 2.25 1.96 3.25.09.43.11 14.28.07 30.5-.04 21.81-.65 37.5-14.15 51" />
      <path d="M63.87 12.75c1.09.5 1.74 2.25 1.96 3.25.22 1 0 75.75-.22 82" />
      <path d="M20.75 36c1.5 0 3.25.25 4.75 0s13.25-1.75 15-2.5" />
      <path d="M20.25 52.25c1.5 0 3.25.25 4.75 0s12.5-2.25 16.5-3" />
      <path d="M13.75 71.52c1.5 1.73 3.55 2.78 6.04 1.71 1.46-.63 14.25-5.71 20.46-8.73" />
      <path d="M68.75 29.75c4.5-.38 15.62-3.12 19-3.75 1.23-.23.38-.12 2.5-.12" />
      <path d="M69.12 47c4.5-.38 16.12-2.62 19.5-3.25 1.23-.23.38-.12 2.5-.12" />
      <path d="M69 67.88c4.5-.38 20.12-2.62 23.5-3.25 1.23-.23.38-.12 2.5-.12" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(34.5 14.5)">{"1"}</text>
      <text transform="translate(55.5 12.5)">{"2"}</text>
      <text transform="translate(12.5 37.55)">{"3"}</text>
      <text transform="translate(12.5 54.5)">{"4"}</text>
      <text transform="translate(5.25 75.5)">{"5"}</text>
      <text transform="translate(70.5 26.5)">{"6"}</text>
      <text transform="translate(70.55 43.48)">{"7"}</text>
      <text transform="translate(70.52 64.4)">{"8"}</text>
    </g>
  </svg>
);

export default Kanji非;
