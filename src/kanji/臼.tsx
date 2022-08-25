import * as React from "react";
import { SVGProps } from "react";

const Kanji臼 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M48.55 18.21c-.29 1.43-.99 2.55-2.11 3.36-6.01 5.4-12.97 10.31-23.94 15.67" />
      <path d="M19.78 35.73c1.06 1.1 1.55 3.55 1.76 5.8 1.2 13.03 2.58 29.47 3.8 41.37.42 4.08.7 7.62.91 10.1" />
      <path d="M60 31.75c2.17.67 4.34.85 6.52.53 4.85-.52 14.99-1.82 18.6-2.37 3.51-.54 4.76.46 4.47 4.21-.88 11.34-2.96 31.9-4.14 45.38-.42 4.83-.76 8.68-.95 10.75" />
      <path d="M24.25 60.25c4.97-.47 10.83-1.62 18.86-2.59 1.78-.26 3.58-.32 5.39-.16" />
      <path d="M60.5 57c2.17.49 4.34.59 6.51.31 5.46-.5 17.62-1.86 19.24-2.06" />
      <path d="M27 88.75c18.62-1.38 39.62-2.75 56.5-3.5" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(40.5 17.5)">{"1"}</text>
      <text transform="translate(12.5 43.5)">{"2"}</text>
      <text transform="translate(61.5 28.5)">{"3"}</text>
      <text transform="translate(29.25 56.5)">{"4"}</text>
      <text transform="translate(59.5 53.5)">{"5"}</text>
      <text transform="translate(31.5 85.5)">{"6"}</text>
    </g>
  </svg>
);

export default Kanji臼;
