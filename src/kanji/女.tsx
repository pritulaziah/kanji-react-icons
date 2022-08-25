import * as React from "react";
import { SVGProps } from "react";

const Kanji女 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M53.21 18.37c.54 2.13.26 3.41-.25 5.25C50.38 33 42.62 52.75 35.75 64c-1.39 2.27-1 3.5 1 3.5 11.63 0 28.46 7.48 38.83 16.41 2.56 2.21 4.68 4.51 6.17 6.84" />
      <path d="M69.62 42.18c.5 1.7.63 3.57-.01 5.93C65.93 61.8 54.61 81.6 27 91.75" />
      <path d="M13.88 50.43c3.48 1.39 7.26.85 10.88.53 19.52-1.7 42.04-4.08 60.61-4.63 3.66-.11 7.21-.1 10.62 1.42" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(45 17.5)">{"1"}</text>
      <text transform="translate(68.5 37.5)">{"2"}</text>
      <text transform="translate(5.5 51.5)">{"3"}</text>
    </g>
  </svg>
);

export default Kanji女;
