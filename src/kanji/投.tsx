import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji投: KanjiIconType = (props) => (
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
      <path d="M14 36.75c2.08.25 2.76.24 5 0 4.62-.5 12.9-1.68 21.65-2.94 1.22-.17 2.85-.31 4.01.02" />
      <path d="M31.52 15.08c.95.95 1.76 2.79 1.76 5.27 0 14.56-.01 61.16-.01 66.12 0 10.53-4.22 4.16-7.71 1.25" />
      <path d="M13.5 67.98c1.75.65 3.14 1.07 4.94-.46 2.81-2.4 16-14.04 22.56-19.52" />
      <path d="M55.17 18.6c.62.62.98 1.82.95 2.84-.2 10.56-2.17 20.96-7.84 25.67" />
      <path d="M56.85 19.28c5.4-.53 12.01-1.82 15.89-2.9 2.75-.76 4.51.62 4.08 2.62-1.07 4.99-1.2 8.87-1.46 14.37-.33 6.86 1.44 8.64 9.28 8.64 8.99 0 9.03-1.64 9.03-7.86" />
      <path d="M52 55.69c1.75.31 3.38.18 5.54-.13 3.08-.45 17.6-3.15 19.67-3.82 3.04-.99 4.55 1.89 3.12 4.56C70.75 74.25 58.75 85.88 42 94.17" />
      <path d="M50.75 62.12c4.04.76 23.77 20.88 37.83 29.12 2.19 1.29 3.79 2.14 5.82 2.57" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(7.5 37.63)">{"1"}</text>
      <text transform="translate(23.5 15.5)">{"2"}</text>
      <text transform="translate(4.5 70.5)">{"3"}</text>
      <text transform="translate(48.5 25.5)">{"4"}</text>
      <text transform="translate(58.5 15.13)">{"5"}</text>
      <text transform="translate(53.25 52.63)">{"6"}</text>
      <text transform="translate(43.5 64.5)">{"7"}</text>
    </g>
  </svg>
);

export default Kanji投;
