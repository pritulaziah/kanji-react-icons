import * as React from "react";
import { SVGProps } from "react";

const Kanji末 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M17.75 31.7c1.52.54 4.3.64 5.82.54 7.68-.49 53.68-5.49 62.61-5.73 2.53-.07 4.05.26 5.31.53" />
      <path d="M26.75 52c.75.25 2.75.36 4.75.25 9-.5 34.75-4.5 45.5-5 2-.09 2.5-.25 3.75 0" />
      <path d="M52.25 11.25c1.25.5 2 2.25 2.25 3.25s-.25 78.73-.25 80c0 11.5-5.75 2-7 .75" />
      <path d="M53.75 51.25C46.71 63.91 28.4 81.83 13.75 89" />
      <path d="M55 51c5.05 4.8 27.2 27.53 32.69 32.25 1.86 1.6 3.45 2.29 5.31 2.75" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(10.5 32.5)">{"1"}</text>
      <text transform="translate(19.5 53.5)">{"2"}</text>
      <text transform="translate(43.5 11.5)">{"3"}</text>
      <text transform="translate(37.5 62.91)">{"4"}</text>
      <text transform="translate(66.5 59.5)">{"5"}</text>
    </g>
  </svg>
);

export default Kanji末;
