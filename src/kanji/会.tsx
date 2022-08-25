import * as React from "react";
import { SVGProps } from "react";

const Kanji会 = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M52.25 14c.25 2.28-.52 3.59-1.8 5.62-5.76 9.14-17.9 27-39.2 39.88" />
      <path d="M54.5 19.25c6.73 7.3 24.09 24.81 32.95 31.91 2.73 2.18 5.61 3.8 9.05 4.59" />
      <path d="M37.36 50.16c1.64.34 4.04.36 4.98.25 6.79-.79 14.29-1.91 19.66-2.4 1.56-.14 3.25-.39 4.66 0" />
      <path d="M23 65.98c2.12.52 4.25.64 7.01.3 13.77-1.71 30.99-3.66 46.35-3.74 3.04-.02 4.87.14 6.4.29" />
      <path d="M47.16 66.38c.62 1.65-.03 2.93-.92 4.28-5.17 7.8-8.02 11.38-14.99 18.84-2.11 2.25-1.5 4.18 2 3.75 7.35-.91 28.19-5.83 40.16-7.95" />
      <path d="M66.62 77.39c4.52 3.23 11 12.73 13.06 18.82" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(44.25 10.63)">{"1"}</text>
      <text transform="translate(60.75 21.13)">{"2"}</text>
      <text transform="translate(39.75 46.63)">{"3"}</text>
      <text transform="translate(23.25 63.13)">{"4"}</text>
      <text transform="translate(33.75 76.63)">{"5"}</text>
      <text transform="translate(69.75 76.63)">{"6"}</text>
    </g>
  </svg>
);

export default Kanji会;
