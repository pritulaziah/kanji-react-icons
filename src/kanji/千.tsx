import * as React from "react";
import { SVGProps } from "react";

const Kanji千 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M70.38 10.17c-.13 1.58-.83 2.64-2.17 3.67-5.71 4.41-21.46 11.91-41.57 16.82" />
      <path d="M12.13 50.83c3.36.94 7.21.75 10.63.49 17.76-1.34 37.63-4.16 66.24-4.94 3.08-.08 6.08-.14 9.13.38" />
      <path d="M54.56 25.25c1.03 1.03 2.01 3 2.01 5.18 0 .9-.07 46.38-.19 63.58-.02 2.93-.04 5.04-.06 5.99" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(61.75 8.13)">{"1"}</text>
      <text transform="translate(5.25 52.63)">{"2"}</text>
      <text transform="translate(48.5 35.5)">{"3"}</text>
    </g>
  </svg>
);

export default Kanji千;
