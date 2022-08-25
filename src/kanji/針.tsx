import * as React from "react";
import { SVGProps } from "react";

const Kanji針 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M34.75 14.24c0 1.34-.07 2.55-.49 3.84-2.15 6.56-12.08 23.06-20.29 30.55" />
      <path d="M36.64 20.46c5.86 2.29 10.61 5.79 15.11 10.29" />
      <path d="M26 42.5c1.5 0 2.19.15 2.67.06 4.83-.93 10.08-2.06 13.44-2.75.72-.15.9-.05 2.15-.05" />
      <path d="M15.59 56.81c2.16.44 4.54.29 6.16.04 6.73-1.07 18.55-3.78 26.04-5.52 1.11-.26 2.09-.2 3.49-.1" />
      <path d="M34.45 43.94c.93.93 1.49 2.18 1.49 3.39 0 4.35.06 27.42.06 34.23" />
      <path d="M18 67.5c4.6 3.54 6.85 7.38 7.79 9.45" />
      <path d="M50.09 60.05c.16.7.04 1.7-.31 2.37-1.16 2.21-3.03 5.33-8.11 10.86" />
      <path d="M14.5 90.25c1 .75 2.42.68 3.5.25 1.25-.5 21.25-9.75 34.25-15.75" />
      <path d="M56.44 46.72c1.91.83 4.91.58 6.92.34 9.2-1.1 22.47-3.46 30.52-4.82 1.6-.27 3.03-.2 4.63-.01" />
      <path d="M75.12 12.75c.94.94 1.46 2.38 1.46 3.75 0 .72.02 55.68.03 75.12V98" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(27.75 16.63)">{"1"}</text>
      <text transform="translate(43.5 20.5)">{"2"}</text>
      <text transform="translate(30.75 39.05)">{"3"}</text>
      <text transform="translate(8.25 59.12)">{"4"}</text>
      <text transform="translate(27 51.75)">{"5"}</text>
      <text transform="translate(10.75 69.25)">{"6"}</text>
      <text transform="translate(41.12 61.5)">{"7"}</text>
      <text transform="translate(6.88 91.88)">{"8"}</text>
      <text transform="translate(55.62 43)">{"9"}</text>
      <text transform="translate(62.38 13.75)">{"10"}</text>
    </g>
  </svg>
);

export default Kanji針;
