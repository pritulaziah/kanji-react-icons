import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji兄: KanjiIconType = (props) => (
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
      <path d="M28.24 20.33c.96.96 1.51 2.17 1.72 3.33.73 4.23 2.35 13.89 3.5 22.34.16 1.16.32 2.29.48 3.38" />
      <path d="M31.29 22.29C43.75 20.38 61 18.12 72 17c2.62-.27 5 2.25 4.5 4.67-.99 4.8-4.27 14.16-5.61 19.85" />
      <path d="M34.5 45.88c6.96-.45 23.37-2.05 34.45-3.18 1.48-.15 2.8-.07 4.17-.13" />
      <path d="M43.49 53.25c.26 1.38.2 2.51-.15 4.1C41.56 65.48 32.5 84.25 17.75 94" />
      <path d="M55.99 48.12c.88.88 1.74 2.63 1.74 4.64 0 6.72-.12 16.9-.12 25.23 0 14.25.63 15.23 16.89 15.23 16.87 0 17.63-1.72 17.63-11.85" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(23.5 28.63)">{"1"}</text>
      <text transform="translate(30.5 18.5)">{"2"}</text>
      <text transform="translate(36.62 42.75)">{"3"}</text>
      <text transform="translate(35.5 58.5)">{"4"}</text>
      <text transform="translate(50.5 56.5)">{"5"}</text>
    </g>
  </svg>
);

export default Kanji兄;
