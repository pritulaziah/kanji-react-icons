import * as React from "react";
import { SVGProps } from "react";

const Kanji拭 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M14 36.75c2.19.26 4.13.43 6.38.05 4.32-.73 9.6-2.25 15.72-3.21 1.16-.18 2.15-.22 3.56-.26" />
      <path d="M29.27 12.33c1.2 1.2 1.51 2.54 1.51 4.52 0 14.56-.01 65.69-.01 70.65 0 14.25-6.32 3.53-7.77 2" />
      <path d="M12 64.83c1.5.8 2.5.8 4.43-.41 1.67-1.04 14.29-9.11 21.32-14.17" />
      <path d="M45.75 37.94c3.62.81 6.59.41 9.88-.28 7.99-1.38 19.62-3.16 29.5-4.07 2.69-.46 5.36-.38 8.02.24" />
      <path d="M44 54.63c1.77.2 3.52.02 5.28-.27 4.47-.74 7.56-1.52 12.35-2.05 1.94-.33 3.89-.42 5.84-.25" />
      <path d="M54.79 55.87c.79.79.96 1.63.96 2.62v16.78" />
      <path d="M42.5 80.83c1.1 1.23 2.73 1.26 3.77.73 7.98-4.06 9.26-4.89 21.33-11.03" />
      <path d="M69.54 12.25c1.23 1.23 2.05 2.75 2.19 5.45 1.39 26.43 4.77 60.8 21.6 76.57 3.71 3.48 4.67 4.98 4.32-6.94" />
      <path d="M83.07 15.49c3.06 1.68 7.27 5.78 8.7 8.67" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(7.5 38.88)">{"1"}</text>
      <text transform="translate(20.5 13.5)">{"2"}</text>
      <text transform="translate(3.5 68.5)">{"3"}</text>
      <text transform="translate(44.5 34.5)">{"4"}</text>
      <text transform="translate(42.5 51.5)">{"5"}</text>
      <text transform="translate(48.75 63.5)">{"6"}</text>
      <text transform="translate(39.5 75.93)">{"7"}</text>
      <text transform="translate(60.75 12.5)">{"8"}</text>
      <text transform="translate(79.5 12.5)">{"9"}</text>
    </g>
  </svg>
);

export default Kanji拭;
