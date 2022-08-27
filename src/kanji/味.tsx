import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji味: KanjiIconType = (props) => (
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
      <path d="M11.21 35.83c.28.85.61 1.43.71 2.08.7 4.69 1.55 16.25 2.53 25.13" />
      <path d="M12.64 37.62c5.39-.85 17.34-3.03 21.01-3.16 1.52-.06 2.5 1.28 2.21 2.5-1.04 4.34-2.69 12.89-3.28 19.62" />
      <path d="M14.17 58.88c3.98 0 14.59-1.54 20.09-1.66" />
      <path d="M45.56 33.52c.8.28 2.27.31 3.07.28 8.34-.32 20.61-3.05 30.03-3.73 1.33-.1 2.14.13 2.81.27" />
      <path d="M40.13 51.5c.81.25 2.7.5 4.87.5 6.5 0 27.45-3.5 42.33-4.75 2.16-.18 2.71-.25 4.06 0" />
      <path d="M61.18 11.25c1.35.5 2.16 2.25 2.43 3.25s-.27 78.72-.27 80c0 10.75-5.72 1.88-6.84.75" />
      <path d="M60.72 52.25c-6.08 11.07-21.07 26.73-33.72 33" />
      <path d="M65.28 51.25c4.55 6.64 21.25 23.94 28.03 29.49 1.69 1.39 3.05 2.09 4.69 2.51" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(5.5 45.13)">{"1"}</text>
      <text transform="translate(15.75 33.13)">{"2"}</text>
      <text transform="translate(17.25 55.63)">{"3"}</text>
      <text transform="translate(42.75 29.5)">{"4"}</text>
      <text transform="translate(41.25 48.13)">{"5"}</text>
      <text transform="translate(52.5 12.5)">{"6"}</text>
      <text transform="translate(48.5 62.5)">{"7"}</text>
      <text transform="translate(76.5 59.5)">{"8"}</text>
    </g>
  </svg>
);

export default Kanji味;
