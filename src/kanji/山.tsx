import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji山: KanjiIconType = (props) => (
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
      <path d="M52.49 15.5c1.38 1.38 2.26 3.5 2.26 5.75 0 .75-.22 58.3-.25 59.25" />
      <path d="M21.49 54.5c.88.88 1.39 2.25 1.26 3.75-.58 6.99-1 16-2.5 23-.7 3.26.11 4 2 3.75 17-2.25 47.12-5.12 65.5-6" />
      <path d="M89.24 49c.94.94 1.64 2.38 1.51 4.25-.25 3.68-1.83 20.3-2.55 28.77-.22 2.64-.39 4.51-.45 4.98" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(45.75 10.63)">{"1"}</text>
      <text transform="translate(12.75 52.63)">{"2"}</text>
      <text transform="translate(83.25 43.63)">{"3"}</text>
    </g>
  </svg>
);

export default Kanji山;
