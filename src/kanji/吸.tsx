import * as React from "react";
import { SVGProps } from "react";

const Kanji吸 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M12.25 34.42c.6.6 1.12 1.83 1.23 2.9.49 4.73 1.18 9.53 1.85 16.89.14 1.51.27 3.06.39 4.65" />
      <path d="M14.24 36.17c8.47-1.88 15.06-3.08 20.38-4.04 2.77-.5 4.12.86 3.67 3.25-.85 4.49-2.56 11.38-3.94 16.85" />
      <path d="M16.67 55.61c4.51-.45 9.68-1.51 15.83-2.34 1.35-.18 2.71-.35 4.07-.51" />
      <path d="M52.32 30.71c.68 1.29.7 2.97.42 4.76-1.99 12.78-10.99 38.78-31.61 50.95" />
      <path d="M41.65 26.58c1.98.55 4.28.72 6.89.26 6.09-1.07 21.11-5.81 25.2-7.08s5.27 1.31 3.62 4.29C61.5 52.75 60.38 47.62 77 44.65c2.65-.47 3.97 1.32 3.07 3.55C72.25 67.5 61.75 80.75 42 90.77" />
      <path d="M49.4 53.36c6.52 5.93 22.43 22.03 32.39 29.72 3.24 2.51 6.83 4.75 10.46 6.65" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(6.5 38.5)">{"1"}</text>
      <text transform="translate(15.75 32.5)">{"2"}</text>
      <text transform="translate(20.25 52.48)">{"3"}</text>
      <text transform="translate(44.25 37.5)">{"4"}</text>
      <text transform="translate(41.5 24.5)">{"5"}</text>
      <text transform="translate(49.5 66.5)">{"6"}</text>
    </g>
  </svg>
);

export default Kanji吸;
