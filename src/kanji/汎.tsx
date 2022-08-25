import * as React from "react";
import { SVGProps } from "react";

const Kanji汎 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M20.13 18.25c4.45 1.47 11.5 6.05 12.62 8.34" />
      <path d="M16 41.75c4.06 1.37 10.48 5.62 11.5 7.75" />
      <path d="M16.75 88.68c2.25.82 4.21-.1 5.27-1.76 3.09-4.84 5.67-9.25 8.48-15.42" />
      <path d="M51.87 19.89c.54 2.02 1.3 3.61 1.3 6.13 0 23.06.73 54.26-16.42 69.23" />
      <path d="M52.96 22.32c2.86-.72 17.56-3.61 19.85-4.33 2.29-.72 4.77.72 4.2 4.35-.57 3.62-.85 52.84-.91 55.49-.19 8.69-1.18 14.55 10.23 14.73s10.45-2.9 10.45-10.39" />
      <path d="M59.45 45.26c5.06 4.09 7.95 8.44 9.52 12.28" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(13.5 18.5)">{"1"}</text>
      <text transform="translate(8.5 42.5)">{"2"}</text>
      <text transform="translate(8.5 90.5)">{"3"}</text>
      <text transform="translate(45.25 28.4)">{"4"}</text>
      <text transform="translate(55.5 18.5)">{"5"}</text>
      <text transform="translate(57.5 42.5)">{"6"}</text>
    </g>
  </svg>
);

export default Kanji汎;
