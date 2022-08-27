import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji吏: KanjiIconType = (props) => (
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
      <path d="M23.51 27.95c3.24.55 6.34.2 9.25-.14 10.64-1.25 32.38-3.74 42.88-4.71 2.71-.25 5.58-.3 8.24.27" />
      <path d="M29.56 40.03c.89.89 1.39 1.53 1.55 2.52.89 2.98 1.59 8.54 2.16 13.19.19 1.57.4 3.09.64 4.47" />
      <path d="M31.86 41.95c10.86-1.2 34.82-3.35 43.53-4.12 3.44-.3 5.45.66 4.39 4.42-.97 3.43-1.5 5.12-3.4 12.32" />
      <path d="M34.35 57.97c5.65-.46 28.03-1.69 39.67-2.31 2.11-.11 4.11-.05 5.18-.05" />
      <path d="M53.9 11.68c1.27 1.27 1.39 2.95 1.45 5.7C56.62 70.62 54.25 81.5 19.46 98" />
      <path d="M34.31 66.53c5.61-.03 28.83 17.26 45 25.72 3.66 1.91 6.44 3.25 11.23 4.69" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(16.25 29.25)">{"1"}</text>
      <text transform="translate(23.25 48.25)">{"2"}</text>
      <text transform="translate(33.25 38.25)">{"3"}</text>
      <text transform="translate(38.25 54.25)">{"4"}</text>
      <text transform="translate(45.5 13.38)">{"5"}</text>
      <text transform="translate(27.5 70.25)">{"6"}</text>
    </g>
  </svg>
);

export default Kanji吏;
