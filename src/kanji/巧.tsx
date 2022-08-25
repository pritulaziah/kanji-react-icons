import * as React from "react";
import { SVGProps } from "react";

const Kanji巧 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M13.5 31.39c1.42.66 3.84.59 5.38.45 6.37-.57 16.64-2.54 22.12-3.22 1.41-.18 3.1-.49 4.5-.1" />
      <path d="M28.99 33.25c1.07 1.07 1.37 2.62 1.37 4.56 0 13.68-.12 17.53-.12 26.32" />
      <path d="M12.5 70.46c1 .91 2.46 1.2 4.92.17 6.83-2.88 21.38-9.01 28.21-11.88" />
      <path d="M49.04 20.47c2.58.53 5.51.29 7.96 0 9.25-1.09 22.82-2.53 32.01-3.16 2.33-.16 4.63-.13 6.94.33" />
      <path d="M70.56 21.87c.5.96.29 2.43-.4 3.81-1.91 3.82-6.91 13.07-9.45 16.89-1.44 2.17-.46 4.17 3 3.55C70 45 76.75 43 84.59 41.95c4.05-.54 5.06.28 4.13 5.42C86.75 58.25 80 79.75 73.01 89.51c-4.69 6.56-7.39.87-9.04-1.66" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(7.5 30.5)">{"1"}</text>
      <text transform="translate(22.5 41.5)">{"2"}</text>
      <text transform="translate(4.5 74.5)">{"3"}</text>
      <text transform="translate(45.5 17.5)">{"4"}</text>
      <text transform="translate(61.5 29.5)">{"5"}</text>
    </g>
  </svg>
);

export default Kanji巧;
