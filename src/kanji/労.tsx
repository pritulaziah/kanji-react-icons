import * as React from "react";
import { SVGProps } from "react";

const Kanji労 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M28.59 21.25c4.03 3.23 8.34 8.88 8.92 10.5" />
      <path d="M48.5 16.12c1.88 2.31 6.4 8.37 7.15 12.12" />
      <path d="M79.43 14c.45.88.33 1.99-.22 3-1.08 2-5.33 8.5-8.54 13" />
      <path d="M19.88 39.38c0 3.25-3.52 15.46-4.88 17.62" />
      <path d="M20.41 42.75c21.47-2.62 45.47-4.38 66.61-5.5 9.35-.5 6.48 5.12.06 10" />
      <path d="M28.94 60.59c1.93.54 3.68.55 5.56.38 13.36-1.26 34.36-3.74 39.03-4.26 3.17-.35 4.49 2.11 4.12 4.55-1.03 6.87-9.73 27.89-14.69 32.26-3.96 3.48-6.17-1.27-7.45-2.04" />
      <path d="M51.97 45.68c.4 1.32.23 2.8-.19 4.48-3.12 12.48-12.03 34.72-33.28 44.78" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(19.99 19.63)">{"1"}</text>
      <text transform="translate(38.25 13.63)">{"2"}</text>
      <text transform="translate(81.49 10.48)">{"3"}</text>
      <text transform="translate(9.75 42.13)">{"4"}</text>
      <text transform="translate(26.25 37.63)">{"5"}</text>
      <text transform="translate(20.25 63.13)">{"6"}</text>
      <text transform="translate(40.99 52.18)">{"7"}</text>
    </g>
  </svg>
);

export default Kanji労;
