import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji肘: KanjiIconType = (props) => (
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
      <path d="M18.97 19.74c.52.95.88 1.88 1.05 2.8.17.92.15 25.9-.41 33.63-.8 11-1.61 22.08-9.11 34.72" />
      <path d="M21.07 20.81c2.1-.06 12.65-2.34 14.21-2.46 2.8-.23 3.5 1.31 3.5 2.67 0 3.23-.53 46.22-.53 64.55 0 12.61-5.91 3.55-7.7 2.04" />
      <path d="M21.07 40.7c2.92-.23 5.84-.59 8.75-.91.8-.09 1.59-.17 2.36-.25" />
      <path d="M20.01 58.65c2.88-.06 6.76-.27 9.63-.47l2.6-.18" />
      <path d="M46.53 39.83c.93.51 2.61.54 3.54.47 7.68-.55 32.22-4.86 43.66-5.83 1.53-.13 2.46.22 3.23.47" />
      <path d="M77.64 14.33c.09.48 1.26 2.49 1.26 5.52 0 20.4-.26 63.16-.26 68.12 0 12.03-5.89 4.53-9.21 1.25" />
      <path d="M55.08 52.62c3.18 2.29 8.21 9.43 9 13" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(13.25 27.5)">{"1"}</text>
      <text transform="translate(22.5 16.5)">{"2"}</text>
      <text transform="translate(24.5 37.5)">{"3"}</text>
      <text transform="translate(24.5 55.5)">{"4"}</text>
      <text transform="translate(43.5 36.5)">{"5"}</text>
      <text transform="translate(68.5 13.5)">{"6"}</text>
      <text transform="translate(48.5 53.5)">{"7"}</text>
    </g>
  </svg>
);

export default Kanji肘;
