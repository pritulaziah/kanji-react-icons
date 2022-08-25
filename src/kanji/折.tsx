import * as React from "react";
import { SVGProps } from "react";

const Kanji折 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M13.5 37c1.9.23 3.73.42 5.64.1 5.11-.85 13.37-2.65 20.74-4.22 1.31-.28 2.62-.51 3.79-.55" />
      <path d="M32.27 11.58c1.2 1.2 1.76 2.79 1.76 4.77 0 14.56-.26 66.16-.26 71.12 0 12.78-6.22 3.24-8.21 1.25" />
      <path d="M12.6 63.29c1.1.6 2.1.76 3.9-.04 1.75-.78 18.28-9.76 25.5-14" />
      <path d="M76.54 13.75c.05.45 0 1.34-.35 1.82C72 21.38 65.5 27.88 57.12 33" />
      <path d="M54.49 34.88c.88.88 1.11 2.16 1.16 4.06.73 28.93-4.52 43.18-14.9 52.31" />
      <path d="M57.99 46.59c1.64.03 2.7-.01 3.97-.17 7.42-.92 23.54-3.42 30.81-4.78 1.25-.24 3.23-.39 4.52 0" />
      <path d="M76.33 47.48c.91.91 1.6 2.4 1.6 4 0 1.05.03 27.44.04 40.9v5.88" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(7.5 39.13)">{"1"}</text>
      <text transform="translate(23.5 12.5)">{"2"}</text>
      <text transform="translate(3.5 65.5)">{"3"}</text>
      <text transform="translate(67.5 13.5)">{"4"}</text>
      <text transform="translate(47.5 42.5)">{"5"}</text>
      <text transform="translate(61.5 43.5)">{"6"}</text>
      <text transform="translate(68.25 55.63)">{"7"}</text>
    </g>
  </svg>
);

export default Kanji折;
